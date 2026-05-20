import { React, useState } from "react";
import { useSnackbar } from "notistack";
import Button from "@mui/material/Button";
import styles from "../AddBalanceForm/AddBalanceForm.module.css";

const AddBalanceForm = ({ setIsOpen, setBalance }) => {
  const [income, setIncome] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(income) < 0) {
      enqueueSnackbar("Income should be greater than 0", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }
    setBalance((prev) => prev + Number(income));
    setIsOpen(false);
  };

  return (
    <div className={styles.formWrapper}>
      <h3>Add Balance</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.balancegrid}>       
        <input
          type="number"
          placeholder="Income Amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <Button type="submit" className={styles.submit}>
          Add Balance
        </Button>
        <Button onClick={() => setIsOpen(false)} className={styles.cancel}>
          Cancel
        </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBalanceForm;
