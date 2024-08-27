import React, { useState } from "react";
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

  console.log(homeData);

  // Helper function to update a specific game object in homeData
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
        <Route path="/" element={<HomePage homeData={homeData} />} />

        {/* spin one page */}
        <Route
          path="/spin-one"
          element={
            <SpinOnePage
              data={homeData[0]}
              updateData={(updatedData) => updateGameData(0, updatedData)}
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
            />
          }
        />

        {/* final page */}
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
