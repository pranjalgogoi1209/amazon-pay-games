import React from "react";
import styles from "./homePage.module.css";

import homePageArr from "../../utils/homePage";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={`flex-row-center ${styles.mainContainer}`}>
        {homePageArr?.map((item, index) => (
          <div key={index} className={`flex-row-center`}>
            <img src={item} alt={`icon-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
