import React, { useState, useEffect } from "react";
import styles from "./TransactionList.module.css";
import TransactionCard from "../TransactionCard/TransactionCard";
import ModalWrapper from "../../components/Modal/Modal";
import AddExpenseForm from "../../components/Forms/AddExpenseForm/AddExpenseForm";
import Pagination from "../Pagination/Pagination";

const TransactionList = ({
  transactions,
  title,
  editTransactions,
  balance,
  setBalance,
}) => {
  const [editId, setEditId] = useState(0);
  const [isDisplayEditor, setIsDisplayEditor] = useState(false);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const maxRecords = 3;
  const [totalPages, setTotalPages] = useState(0);

  const handleDelete = (id) => {
    const item = transactions.find((i) => i.id == id);
    const price = Number(item.price);
    setBalance((prev) => prev + price);
    editTransactions(prev => (
      prev.filter(item => item.id !=id)
    ))
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsDisplayEditor(true);
  };

  // Decide how many transactions I want to show in latest page mannually  - Pagination Logic
  useEffect(() => {
    const startIndex = (currentPage - 1) * maxRecords; // 0
    const lastIndex = Math.min(currentPage * maxRecords, transactions.length); // 3, 4 = 3
    setCurrentTransactions([...transactions].slice(startIndex, lastIndex)); // 0,1,2
    setTotalPages(Math.ceil(transactions.length / maxRecords)); // 4/3 => 2
  }, [currentPage, transactions]);

  //update page if all items on current page have been deleted
  useEffect(() => {
    if (totalPages < currentPage && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className={styles.expenseCart}>
          {title && <h2>{title}</h2>} 
    <div className={styles.transactionsWrapper}>
  
      {transactions.length > 0 ? (
        <div className={styles.list}>
          <div>
            {currentTransactions.map((transaction) => (
              <TransactionCard
                details={transaction}
                key={transaction.id}
                handleDelete={() => handleDelete(transaction.id)}
                handleEdit={() => handleEdit(transaction.id)}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              updatePage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className={styles.emptyTransactionsWrapper}>
          <p>No transactions!</p>
        </div>
      )}
      <ModalWrapper isOpen={isDisplayEditor} setIsOpen={setIsDisplayEditor}>
        <AddExpenseForm
          editId={editId}
          expenseList={transactions}
          setExpenseList={editTransactions}
          setIsOpen={setIsDisplayEditor}
          setBalance={setBalance}
          balance={balance}
        />
      </ModalWrapper>
    </div>
    </div>
  );
};

export default TransactionList;
