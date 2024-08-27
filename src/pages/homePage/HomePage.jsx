import React from "react";
import styles from "./homePage.module.css";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";

import coin from "./../../assets/homePage/coin.png";

export default function HomePage({ homeData }) {
  return (
    <div className={`flex-col-center ${styles.HomePage}`}>
      <Header title={"home"} />

      <div className={`flex-row-center ${styles.mainContainer}`}>
        {homeData?.map((item, index) => (
          <div key={index} className={styles.singleGameContainer}>
            <Link
              to={item.path}
              className={`flex-row-center ${styles.imgContainer}`}
            >
              <img src={item.img} alt={`icon-${index}`} />
            </Link>

            {/* game finished container */}
            {item.isGameFinished && (
              <div
                className={`flex-row-center ${styles.gameFinishedContainer}`}
              >
                <div className={`flex-row-center ${styles.coin}`}>
                  <img src={coin} alt="coin" />
                </div>
                <p className={styles.pointsTxt}>+{item.points}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
