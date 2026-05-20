import React from "react";
import styles from "../Card/Card.module.css"
import Button from '@mui/material/Button'

export const Card = ({
  title,
  money,
  buttonText,
  buttonType,
  handleClick,
  success = true,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        {`${title}:`}
        <span className={success ? styles.success : styles.failure}>
          {`₹${money}`}
        </span>
      </h3>
      <Button onClick={handleClick} className={styles[`${buttonType}Button`]}>
  {buttonText}
</Button>
    </div>
  );
};
