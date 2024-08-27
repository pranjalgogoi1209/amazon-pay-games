import React from "react";
import styles from "./finalPage.module.css";

import payIcon from "./../../assets/header/pay-icon.png";
import win from "./../../assets/finalPage/win.png";
import loose from "./../../assets/finalPage/loose.png";

export default function FinalPage({ totalScore }) {
  console.log("total score =>", totalScore);
  return (
    <div className={`flex-col-center ${styles.FinalPage}`}>
      {/* pay icon */}
      <div className={`flex-row-center ${styles.payIcon}`}>
        <img src={payIcon} alt="pay-icon" />
      </div>

      <div className={`flex-row-center ${styles.resultContainer}`}>
        <img src={totalScore >= 15 ? win : loose} alt="result" />
      </div>
    </div>
  );
}
