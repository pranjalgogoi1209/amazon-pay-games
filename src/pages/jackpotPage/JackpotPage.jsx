import React, { useEffect, useState } from "react";
import "./jackpot.css";
import styles from "./jackpotPage.module.css";

import Header from "../../components/header/Header";
import iconsArr from "../../utils/jackpot";

import jackpotImg from "./../../assets/jackpotPage/jackpot.png";
import jackpotLeaver from "./../../assets/jackpotPage/leaver.png";
import spriteSheet from "./../../assets/jackpotPage/spritesheet.png";

// const iconsArr = ["🍒", "🍋", "🔔", "🍉", "⭐", "7️⃣"];

export default function JackpotPage() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const shuffleArray = (arr) => {
    const shuffledArr = [...arr];

    arr.forEach((_ele, index) => {
      const randomIndex = Math.floor(Math.random() * index);
      [shuffledArr[index], shuffledArr[randomIndex]] = [
        shuffledArr[randomIndex],
        shuffledArr[index],
      ];
    });

    return shuffledArr;
  };

  //

  //<div>{symbol}</div>

  const getSymbolContent = (ans) => {
    const symbolContent = [
      ...shuffleArray(iconsArr),
      ...shuffleArray(iconsArr),
      ...shuffleArray(iconsArr),
      ...shuffleArray(iconsArr),
    ].map((symbol, idx) => <img src={symbol} alt={`icon ${idx + 1}`} />);

    //
    //<div>{iconsArr[ans]}</div>
    // 23
    symbolContent.splice(56, 0, <img src={iconsArr[ans]} alt="replaceIcon" />);
    return symbolContent;
  };

  return (
    <div className={`flex-col-center ${styles.JackpotPage}`}>
      <Header title={"JACKPOT"} />

      <div className={`flex-row-center ${styles.jackpotWrapper}`}>
        {/* jackpot png */}
        <div className={`flex-row-center ${styles.jackpotImgContainer}`}>
          <img src={jackpotImg} alt="jackpot" />
        </div>

        {/* jackpot leaver */}
        <div
          onClick={() => setIsGameStarted(true)}
          className={`flex-row-center ${styles.jackpotLeaver} ${
            isGameStarted ? styles.leaverPulled : ""
          }`}
        >
          pull leaver
        </div>

        {/* jackpot container */}
        <div
          className={`flex-row-center ${styles.jackpotContainer}  ${
            isGameStarted ? styles.startGame : ""
          }`}
        >
          <div className={`flex-row-center  ${styles.singleIcon}`}>
            <div className={`cou__item--digit ${styles.imgContainer}`}>
              {getSymbolContent(2)}
            </div>
          </div>

          <div className={`flex-row-center ${styles.singleIcon}`}>
            <div className={`cou__item--digit ${styles.imgContainer}`}>
              {getSymbolContent(2)}
            </div>
          </div>

          <div
            className={`flex-row-center cou__content__digit ${styles.singleIcon}`}
          >
            <div className={`cou__item--digit ${styles.imgContainer}`}>
              {getSymbolContent(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
