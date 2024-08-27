import React, { useEffect, useState } from "react";
import styles from "./jackpotPage.module.css";
import Spritesheet from "react-responsive-spritesheet";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import iconsArr from "../../utils/jackpot";

import jackpotImg from "./../../assets/jackpotPage/jackpot.png";

export default function JackpotPage({ data, updateData }) {
  const navigate = useNavigate();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([0, 0, 0]);

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

  const getSymbolContent = (ans) => {
    const symbolContent = [
      ...shuffleArray(iconsArr),
      ...shuffleArray(iconsArr),
      ...shuffleArray(iconsArr),
      ...shuffleArray(iconsArr),
    ].map((symbol, idx) => (
      <img src={symbol} key={idx} alt={`icon ${idx + 1}`} />
    ));

    symbolContent.splice(56, 0, <img src={iconsArr[ans]} alt="replaceIcon" />);
    return symbolContent;
  };

  // generate 3 random numbers between 0 and 12
  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 13);
    const random2 = Math.floor(Math.random() * 13);
    const random3 = Math.floor(Math.random() * 13);
    setRandomNumbers([random1, random2, random3]);

    return [random1, random2, random3];
  };

  // calculate jackpot score
  const calculateJackpotScore = (numbers) => {
    const [num1, num2, num3] = numbers;
    let score = 0;

    if (num1 === num2 && num2 === num3) {
      score = 3;
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
      score = 2;
    }

    return score;
  };

  // Trigger random number generation and update data
  useEffect(() => {
    if (isGameStarted) {
      const randomNumbers = generateRandomNumbers();
      console.log(randomNumbers);

      const score = calculateJackpotScore(randomNumbers);
      console.log(score);

      // Use the calculated score directly to update data
      setTimeout(() => {
        updateData({
          points: score,
          isGameFinished: true,
        });

        navigate("/");
      }, 9000);
    }
  }, [isGameStarted]);

  return (
    <div className={`flex-col-center ${styles.JackpotPage}`}>
      <Header title={"jackpot"} />

      <div className={`flex-row-center ${styles.jackpotWrapper}`}>
        {/* jackpot png */}
        <div className={`flex-row-center ${styles.jackpotImgContainer}`}>
          <img src={jackpotImg} alt="jackpot" />
        </div>

        {/* jackpot lever */}
        <div
          onClick={() => setIsGameStarted(true)}
          className={`flex-row-center ${styles.jackpotLeaver} ${
            isGameStarted ? styles.leaverPulled : ""
          }`}
        >
          <Spritesheet
            className={styles.spriteSheet}
            image={"/src/assets/jackpotPage/spritesheet.png"}
            widthFrame={459}
            heightFrame={978}
            steps={46}
            fps={60}
            startAt={0}
            endAt={55}
            autoplay={false}
            onClick={(spritesheet) => {
              spritesheet.play();
            }}
          />
        </div>

        {/* jackpot container */}
        <div
          className={`flex-row-center ${styles.jackpotContainer} ${
            isGameStarted ? styles.startGame : ""
          }`}
        >
          <div className={`flex-row-center  ${styles.singleIcon}`}>
            <div className={`cou__item--digit ${styles.imgContainer}`}>
              {getSymbolContent(randomNumbers[0])}
            </div>
          </div>

          <div className={`flex-row-center ${styles.singleIcon}`}>
            <div className={`cou__item--digit ${styles.imgContainer}`}>
              {getSymbolContent(randomNumbers[1])}
            </div>
          </div>

          <div
            className={`flex-row-center cou__content__digit ${styles.singleIcon}`}
          >
            <div className={`cou__item--digit ${styles.imgContainer}`}>
              {getSymbolContent(randomNumbers[2])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
