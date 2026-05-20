import React from "react";
import styles from "./Pagination.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Pagination = ({ updatePage, currentPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      updatePage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (totalPages != currentPage) {
      updatePage((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.paginationWrapper}>
      <button onClick={handlePrev} disabled={currentPage == 1}>
        <IoIosArrowRoundBack className={styles.icon}/>
      </button>
      <p>{currentPage}</p>
      <button onClick={handleNext} disabled={totalPages == currentPage}>
        <IoIosArrowRoundForward className={styles.icon}/>
      </button>
    </div>
  );
};

export default Pagination;
