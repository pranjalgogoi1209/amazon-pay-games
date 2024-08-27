import {
  question01,
  question02,
  question03,
  question04,
  question05,
  question06,
} from "../assets/quizPage";

const questionsArr = [
  {
    questionImage: question01,
    options: [{ text: "a. 5 million" }, { text: "b. 2 million" }],
    correctAnswer: 0,
  },
  {
    questionImage: question02,
    options: [{ text: "a. 1 million" }, { text: "b. 2 million" }],
    correctAnswer: 1,
  },
  {
    questionImage: question03,
    options: [{ text: "a. Yes" }, { text: "b. No" }],
    correctAnswer: 0,
  },
  {
    questionImage: question04,
    options: [{ text: "a. ₹60,000" }, { text: "b. ₹30,000" }],
    correctAnswer: 0,
  },
  {
    questionImage: question05,
    options: [{ text: "a. Yes" }, { text: "b. No" }],
    correctAnswer: 1,
  },
  {
    questionImage: question06,
    options: [{ text: "a. Yes" }, { text: "b. No" }],
    correctAnswer: 0,
  },
];

export default questionsArr;
