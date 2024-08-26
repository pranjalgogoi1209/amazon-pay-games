import React, { useState } from "react";
import styles from "./spinTwoPage.module.css";
import { wheelTwoList } from "../../data/wheelsList";
import spinPointer from "../../assets/spin one/pointer.png";
import spinnerBase from "../../assets/spin one/stand.png";
import btnIcon from '../../assets/spin one/btnicon.png'

// winning angle 5607deg
const angleArray = [
  29088, // 14524 + 30 = 14554, next step doubled
  14700, // 7264 + 60 = 7324, next step doubled
  7464,  // 3600 + 32 + 3632 (next step doubled)
3900,
];

export default function SpinTwoPage() {
    const [isSpin, setIsSpin] = useState(false);
    const [spinLeft,setSpinLeft]=useState(3);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * wheelTwoList.length)
  );
  const [rotation, setRotaion] = useState(0);
  const [randomWin,setRandomWin] = useState(Math.floor(Math.random()*3)+1);
  const [isWin,setIsWin]=useState('');

  console.log(randomWin,isWin,spinLeft,'random win is win and spin left')

  const generateButtonName = () => {
    const btn = <img src={btnIcon} alt="icon"  />;
    if (isSpin) return "Spinning...";
    if (spinLeft === 3) return "Spin Now";
    if (spinLeft > 0) return <>{btn}Try Again</>;
    return "No Spins Left";
  };

  const spinTheWheel = () => {
    
    setIsSpin(true);
    console.log('clicked');
    if(isWin=='True'){
        console.log('is win true');
        if(randomWin==spinLeft){
          console.log('confirm win');
          setRotaion(5890);
          
          setTimeout(()=>{
            navigate('/')
          },8000)
          // return
        }else{
          setRotaion(angleArray[spinLeft]);
          setSpinLeft(prev=>prev-1);
        }
    }else{
      if(spinLeft>0){ 
        setRotaion(angleArray[spinLeft]);
        setSpinLeft(prev=>prev-1);
      }else{
        console.log('no spin left')
      }
    }
    setTimeout(()=>{
      setIsSpin(false);
    },6000);
  };

  return (
    <div className={`flex-col-center ${styles.SpinOnePage}`}>
      {/* heading */}
      <div className={`flex-col-center ${styles.heading}`}>
        <h2>Spin & Win</h2>
      </div>
      {/* spin the wheel */}

      {/* wheel wrapper */}
      <div className={`flex-col-center ${styles.wheelWrapper}`}>

        {/* wheel container */}

        {/* complete spinner  */}

        <div className={`flex-col-center ${styles.spinner}`}>
        
        <div className={`flex-col-center ${styles.wheelContainer}`}>
          {/* wheel imag */}
          <div
            className={`${styles.wheel} ${styles.wheelCommon}`}
            style={{
              transition: isSpin ? "transform 6s ease-out" : "none",
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {/* {(totalSpin==10 && !isSpin) && <Confetti />} */}
            <img src={wheelTwoList[randomNumber]} alt="wheel" />
          </div>

          {/* pointer */}
          <div
            className={`flex-col-center ${styles.spinPointer} ${styles.wheelCommon}`}
          >
            <img src={spinPointer} alt="arrow" />
          </div>

        </div>
        {/* spinner stand */}
        <div
          className={`flex-col-center ${styles.spinnerBase} ${styles.wheelCommon}`}>
          <img src={spinnerBase} alt="wheelbase" />
        </div>
        </div>

        {/* button div */}

        <div className={`flex-col-center ${styles.buttonDiv}`}>
          <button className={`flex-row-center `} onClick={spinTheWheel}>{generateButtonName()}</button>
        </div>
      </div>
    </div>
  );
}
