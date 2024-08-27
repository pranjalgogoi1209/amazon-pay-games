import React from "react";
import styles from "./header.module.css";

// import logo from "./../../assets/logo.png";
import payIcon from "./../../assets/header/pay-icon.png";

export default function Header({ title }) {
  return (
    <div className={`flex-col-center ${styles.Header}`}>
      {/* pay icon */}
      <div className={styles.payIcon}>
        <img src={payIcon} alt="pay-icon" />
      </div>

      {/* game heading */}
      <div className={`flex-row-center ${styles.gameHeading}`}>
        <img
          src={`/src/assets/header/${title}-game-img.png`}
          alt="game-heading"
        />
      </div>
    </div>
  );
}
