import React from "react";
import styles from "./header.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "./../../assets/logo.png";
import payIcon from "./../../assets/header/pay-icon.png";
import homeHeading from "./../../assets/header/home-heading-img.png";

export default function Header({ title, restartGame }) {
  const navigate = useNavigate();
  const location = useLocation();
  return location.pathname === "/" ? (
    <div className={`flex-col-center ${styles.HomeHeader}`}>
      {/* logo */}
      <div className={`flex-row-center ${styles.logo}`}>
        <img src={logo} alt="Pay" />
      </div>

      {/* home heading */}
      <div className={`flex-row-center ${styles.homeHeading}`}>
        <img src={homeHeading} alt="home-heading" />
      </div>
    </div>
  ) : (
    <div className={`flex-col-center ${styles.GameHeader}`}>
      {/* pay icon */}
      <div
        onClick={() => {
          restartGame();
          navigate("/");
        }}
        className={`flex-row-center ${styles.payIcon}`}
      >
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
