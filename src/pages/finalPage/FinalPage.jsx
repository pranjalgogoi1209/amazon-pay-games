import React, { useEffect, useState } from "react";
import styles from "./finalPage.module.css";

import payIcon from "./../../assets/header/pay-icon.png";
import win from "./../../assets/finalPage/win.png";
import loose from "./../../assets/finalPage/loose.png";
import Confetti from "react-confetti";

export default function FinalPage({ totalScore }) {
  const [isConfetti,setIsConfetti]=useState(false);
  
  useEffect(()=>{
    if(totalScore>=15){
      setIsConfetti(true);
      console.log('conffetti')
    }
    setTimeout(()=>{
      console.log('confetti will reset')
      setIsConfetti(false);
    },4000)
  },[])
  console.log("total score =>", totalScore);
  return (
    <div className={`flex-col-center ${styles.FinalPage}`}>
      {/* pay icon */}
      <div className={`flex-row-center ${styles.payIcon}`}>
        <img src={payIcon} alt="pay-icon" />
      </div>
      {isConfetti && <Confetti />}
      <div className={`flex-row-center ${styles.resultContainer}`}>
        <img src={totalScore >= 15 ? win : loose} alt="result" />
      </div>
    </div>
  );
}
