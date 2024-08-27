import { spinOne, spinTwo, jackpot, quiz } from "../assets/homePage";

const homePageArr = [
  {
    img: spinOne,
    path: "/spin-one",
    points: "",
    isGameFinished: false,
  },
  {
    img: spinTwo,
    path: "/spin-two",
    points: "",
    isGameFinished: false,
  },
  {
    img: jackpot,
    path: "/jackpot",
    points: "",
    isGameFinished: true,
  },
  {
    img: quiz,
    path: "/quiz",
    points: "",
    isGameFinished: false,
  },
];

export default homePageArr;
