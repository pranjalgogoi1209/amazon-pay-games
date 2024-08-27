import React, { useEffect, useState } from "react";
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

  // game restart function
  const restartGame = () => {
    setHomeData(homePageArr);
    setTotalScore(0);
    setIsAllGamePlayed(false);
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
