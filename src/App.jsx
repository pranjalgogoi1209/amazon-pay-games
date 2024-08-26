import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  SpinOnePage,
  SpinTwoPage,
  JackpotPage,
  QuizPage,
  FinalPage,
} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route path="/" element={<HomePage />} />

        {/* spin one page */}
        <Route path="/spin-one" element={<SpinOnePage />} />

        {/* spin two page */}
        <Route path="/spin-two" element={<SpinTwoPage />} />

        {/* jackpot page */}
        <Route path="/jackpot" element={<JackpotPage />} />

        {/* quiz page */}
        <Route path="/quiz" element={<QuizPage />} />

        {/* final page */}
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
