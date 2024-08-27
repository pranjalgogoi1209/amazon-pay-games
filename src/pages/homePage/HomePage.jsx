import React from "react";
import styles from "./homePage.module.css";
import { Link } from "react-router-dom";

import homePageArr from "../../utils/homePage";
import Header from "../../components/header/Header";

export default function HomePage() {
  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      <Header title={"home"} />

      <div className={`flex-row-center ${styles.mainContainer}`}>
        {homePageArr?.map((item, index) => (
          <div className={styles.singleGameContainer}>
            <Link
              to={item.path}
              key={index}
              className={`flex-row-center ${styles.imgContainer}`}
            >
              <img src={item.img} alt={`icon-${index}`} />
            </Link>

            {/* game finished container */}
            {item.isGameFinished && (
              <div
                className={`flex-row-center ${styles.gameFinishedContainer}`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
