import React, { useState } from "react";
import circleIcon from "../assets/circle.png";
import crossIcon from "../assets/cross.png";

const Game = () => {

    const [boardData, setBoardData] = useState(Array(9).fill(""));
    
    const [count, setCount] = useState(0);
    
    const [lock, setLock] = useState(false);
    
    const [refresh, setRefresh] = useState(0);

    const toggle = (e, num) => {

        if (lock || boardData[num] !== "") {
            return;
        }

        const newBoard = [...boardData];

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="${crossIcon}" alt="X" style="width: 60%; height: 60%;" />`;
            newBoard[num] = "X";
            setCount(count + 1);
        } 

        else {
            e.target.innerHTML = `<img src="${circleIcon}" alt="O" style="width: 60%; height: 60%;" />`;
            newBoard[num] = "O";
            setCount(count + 1);
        }

        setBoardData(newBoard);
        checkWin(newBoard);
    };

    const checkWin = (currentBoard) => {

        if (currentBoard[0] === currentBoard[1] && currentBoard[1] === currentBoard[2] && currentBoard[2] !== "") 
            won(currentBoard[0]);

        else if (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5] && currentBoard[5] !== "") 
            won(currentBoard[3]);

        else if (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8] && currentBoard[8] !== "") 
            won(currentBoard[6]);

        else if (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6] && currentBoard[6] !== "") 
            won(currentBoard[0]);

        else if (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7] && currentBoard[7] !== "") 
            won(currentBoard[1]);

        else if (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8] && currentBoard[8] !== "") 
            won(currentBoard[2]);

        else if (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8] && currentBoard[8] !== "") 
            won(currentBoard[0]);

        else if (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6] && currentBoard[6] !== "") 
            won(currentBoard[2]);

        else if (count === 8) {
            setLock(true);
            setTimeout(() => {
                alert("It's a draw! Well played.");
            }, 600);
        }
    };

    const won = (winner) => {
        setLock(true);
        setTimeout(() => {
            alert(`${winner} wins!`);
        }, 600);
    };

    const reset = () => {
        setLock(false);
        setBoardData(Array(9).fill(""));
        setCount(0);
        document.querySelectorAll(".box").forEach((box) => {
            box.innerHTML = "";
        });
        
        setRefresh(refresh + 1);
    };

    return (
        <div className="game-container">
            <h1 className="title">Tic Tac Toe</h1>
            
            <div className="board">
                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 0)}></div>
                    <div className="box" onClick={(e) => toggle(e, 1)}></div>
                    <div className="box" onClick={(e) => toggle(e, 2)}></div>
                </div>

                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 3)}></div>
                    <div className="box" onClick={(e) => toggle(e, 4)}></div>
                    <div className="box" onClick={(e) => toggle(e, 5)}></div>
                </div>

                <div className="row">
                    <div className="box" onClick={(e) => toggle(e, 6)}></div>
                    <div className="box" onClick={(e) => toggle(e, 7)}></div>
                    <div className="box" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>

            <button className="reset-btn" onClick={reset}>Reset Game</button>
        </div>
    );
};

export default Game;
