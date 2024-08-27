import React, { useEffect, useState } from "react";
import styles from "./spinOnePage.module.css";
import { wheelOneList } from "../../data/wheelsList";
import spinPointer from "../../assets/spin one/pointer.png";
import spinnerBase from "../../assets/spin one/stand.png";
import btnIcon from '../../assets/spin one/btnicon.png'
import spin_button from '../../assets/spin one/spin_btn.png'
import { useNavigate } from "react-router-dom";


// 5890deg
const angleArray = [
  3600,
  7264,  // 3600 + 32 + 3632 (next step doubled)
  14600, // 7264 + 60 = 7324, next step doubled
  29088, // 14524 + 30 = 14554, next step doubled
];

export default function SpinOnePage() {
  const [isSpin, setIsSpin] = useState(false);
  const [spinLeft,setSpinLeft]=useState(3);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * wheelOneList.length)
  );
  const [randomWin,setRandomWin]=useState(Math.floor(Math.random()*3)+1)
  const [isWin,setIsWin]=useState('');

  console.log(randomWin,spinLeft, isWin,'random_number spin_left winstatus ');
  

  const [rotation, setRotaion] = useState(0);


  const generateButtonName = () => {
    const btn = <img src={btnIcon} alt="icon"  />;
    const spinBTn = <img src={spin_button} alt="button" />
    if (isSpin) return "Spinning...";
    if (spinLeft === 3) return "Spin Now";
    if (spinLeft > 0) return <>{btn}Try Again</>;
    return "No Spins Left";
};

const navigate = useNavigate();

  const generateIcon=()=>{
    if(spinLeft==3) return;
    if(spinLeft>0) return btnIcon;
  }

  const spinTheWheel = () => {
    
    if(isSpin || spinLeft==0) return

    setIsSpin(true);
    console.log('clicked',spinLeft);
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

  useEffect(()=>{
    const getWin=async()=>{
      try {
           const response = await fetch(`https://analytiq4.com/amazon-pay/spin-the-wheel/fetch.php`)
           .then((res)=>{
            return res.json()
           }).then((data)=>{
            console.log(data)
            setIsWin(data.Win)
           })
      } catch (error) {
        console.log(error);
      }
    }
    // getWin();

  },[]);

  useEffect(()=>{
    if(isSpin){
      const randomId = Math.floor(Math.random() * wheelOneList.length)
      setRandomNumber(randomId)
    }
    if(spinLeft==0 && !isSpin){
      console.log('left nothing')
      setTimeout(()=>{
       navigate('/');
      },2000)
    }
    console.log(spinLeft,'spin left inside isspin effect');
  },[isSpin])

  return (
    <div className={`flex-col-center ${styles.SpinOnePage}`}>
      {/* heading */}
   
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
            <img src={wheelOneList[randomNumber]} alt="wheel" />
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
          <button className={`flex-row-center`} onClick={spinTheWheel} disabled={isSpin ? true : false}>
            {generateButtonName()}
            </button>
        </div>
      </div>
    </div>
  );
}
