// converting jsx file into component using rafc
import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import cross_icon from "../Assets/cross.png";
import circle_icon from "../Assets/circle.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false); //lock == true means user wins

  let titleRef = useRef(null);

  let clearBoxRef0 = useRef(null);
  let clearBoxRef1 = useRef(null);
  let clearBoxRef2 = useRef(null);
  let clearBoxRef3 = useRef(null);
  let clearBoxRef4 = useRef(null);
  let clearBoxRef5 = useRef(null);
  let clearBoxRef6 = useRef(null);
  let clearBoxRef7 = useRef(null);
  let clearBoxRef8 = useRef(null);

  const toggle = (e, index) => {
    if (lock) {
      return 0;
    }
    if (data[index] === "") {
      if (count % 2 === 0) {
        e.target.innerHTML = `<img src='${cross_icon}'/>`;
        data[index] = "x";
        setCount(++count);
      } else {
        e.target.innerHTML = `<img src='${circle_icon}'/>`;
        data[index] = "o";
        setCount(++count);
      }
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    }
    if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    }
    if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    }
    if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    }
    if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
    if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    }
    if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    }
    if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    }
  };
  const won = (winner) => {
    if (winner === "o") {
      titleRef.current.innerHTML = `Winner is : <img src="${circle_icon}"/>`;
    } else {
      titleRef.current.innerHTML = `Winner is : <img src="${cross_icon}"/>`;
    }

    setLock(true);
  };

  let flag = 1;

  for (let i = 0; i < 9; i++) {
    flag = 0;
    if (data[i] === "") {
      flag = 1;
      break;
    }
  }
  if (flag === 0) {
    titleRef.current.innerHTML = "<span>Draw<span>";
  }

  let clearBoard = (e) => {
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "TicTacToe Game";
    clearBoxRef0.current.innerHTML = "";
    clearBoxRef1.current.innerHTML = "";
    clearBoxRef2.current.innerHTML = "";
    clearBoxRef3.current.innerHTML = "";
    clearBoxRef4.current.innerHTML = "";
    clearBoxRef5.current.innerHTML = "";
    clearBoxRef6.current.innerHTML = "";
    clearBoxRef7.current.innerHTML = "";
    clearBoxRef8.current.innerHTML = "";
    setLock(false);
  };
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        TicTacToe Game
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={clearBoxRef0}
            onClick={(e) => toggle(e, 0)}
          ></div>
          <div
            className="boxes"
            ref={clearBoxRef1}
            onClick={(e) => toggle(e, 1)}
          ></div>
          <div
            className="boxes"
            ref={clearBoxRef2}
            onClick={(e) => toggle(e, 2)}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={clearBoxRef3}
            onClick={(e) => toggle(e, 3)}
          ></div>
          <div
            className="boxes"
            ref={clearBoxRef4}
            onClick={(e) => toggle(e, 4)}
          ></div>
          <div
            className="boxes"
            ref={clearBoxRef5}
            onClick={(e) => toggle(e, 5)}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={clearBoxRef6}
            onClick={(e) => toggle(e, 6)}
          ></div>
          <div
            className="boxes"
            ref={clearBoxRef7}
            onClick={(e) => toggle(e, 7)}
          ></div>
          <div
            className="boxes"
            ref={clearBoxRef8}
            onClick={(e) => toggle(e, 8)}
          ></div>
        </div>
      </div>
      <button onClick={(e) => clearBoard(e)}>Reset</button>
    </div>
  );
};
export default TicTacToe;
