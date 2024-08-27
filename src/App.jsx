import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  SpinOnePage,
  SpinTwoPage,
  JackpotPage,
  QuizPage,
  FinalPage,
} from "./pages";

import homePageArr from "./utils/homePage";

export default function App() {
  const [homeData, setHomeData] = useState(homePageArr);
  const [totalScore, setTotalScore] = useState(0);
  const [isAllGamePlayed, setIsAllGamePlayed] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const [isUserWin, setIsUserWin] = useState(false);

  console.log("is user win", isUserWin);

  // api calling
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://analytiq4.com/amazon-pay/spin-the-wheel/fetch.php"
        );
        if (response.data.Win === "True") {
          setIsUserWin(true);
        } else {
          setIsUserWin(false);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [gameRestart]);

  // game restart function
  const restartGame = () => {
    setHomeData(homePageArr);
    setTotalScore(0);
    setIsAllGamePlayed(false);
    setGameRestart((prev) => !prev);
  };

  // update a specific game object in homeData
  const updateGameData = (index, updatedData) => {
    setHomeData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, ...updatedData } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route
          path="/"
          element={
            <HomePage
              homeData={homeData}
              setTotalScore={setTotalScore}
              isAllGamePlayed={isAllGamePlayed}
              setIsAllGamePlayed={setIsAllGamePlayed}
              restartGame={restartGame}
            />
          }
        />

        {/* spin one page */}
        <Route
          path="/spin-one"
          element={
            <SpinOnePage
              data={homeData[0]}
              updateData={(updatedData) => updateGameData(0, updatedData)}
              restartGame={restartGame}
              isUserWin={isUserWin}
            />
          }
        />

        {/* spin two page */}
        <Route
          path="/spin-two"
          element={
            <SpinTwoPage
              data={homeData[1]}
              updateData={(updatedData) => updateGameData(1, updatedData)}
              restartGame={restartGame}
              isUserWin={isUserWin}
            />
          }
        />

        {/* jackpot page */}
        <Route
          path="/jackpot"
          element={
            <JackpotPage
              data={homeData[2]}
              updateData={(updatedData) => updateGameData(2, updatedData)}
              restartGame={restartGame}
              isUserWin={isUserWin}
            />
          }
        />

        {/* quiz page */}
        <Route
          path="/quiz"
          element={
            <QuizPage
              data={homeData[3]}
              updateData={(updatedData) => updateGameData(3, updatedData)}
              restartGame={restartGame}
            />
          }
        />

        {/* final page */}
        <Route
          path="/final"
          element={
            <FinalPage totalScore={totalScore} restartGame={restartGame} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
