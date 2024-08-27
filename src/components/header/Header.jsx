import React from "react";
import styles from "./header.module.css";

import logo from "./../../assets/logo.png";

export default function Header({ title }) {
  return (
    <div className={`flex-col-center ${styles.Header}`}>
      <div className={`flex-row-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo" />
      </div>

      <h1>{title}</h1>
    </div>
  );
}
