import React, { useState } from "react";
import Results from "../Results/Results";
import "./Triquis.css"
const Triquis = () => {
    const [turn,setTurn] = useState("x");
    const [cells,setCells] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState();
    const CheckForWinner = (squares) => {
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagnol: [
                [0,4,8],
                [2,4,6]
            ]
        }

        for (let combo in combos) {
            combos[combo].forEach(e => {
                if (squares[e[0]] === "" ||
                    squares[e[1]] === "" ||
                    squares[e[2]] === "" 
                ) {
                    
                } else if (
                    squares[e[0]] === squares[e[1]] &&
					squares[e[1]] === squares[e[2]]  
                ){
                    setWinner(squares[e[0]]);
                } 
            })
        }
    }

    const handleClick = (num) => {
        let squares = [...cells];
        if (cells[num] !== "") {
            return;
        }
        if(turn === "x") {
            squares[num] = "x"
            setTurn("o")
        } else {
            squares[num] = "o"
            setTurn("x")
        }
        CheckForWinner(squares)
        setCells(squares)
    }

    const Cell = ({ num }) => {
		return <td  onClick={() => handleClick(num)}>{cells[num]}</td>;
	};
    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(""))
    }
    return (
        <>
            <h1>Turn of {turn}</h1>
            
            <div className="Table-Flex">
                <button onClick={()=>{handleRestart()}}>Reset</button>
                <table>
                    <tbody>
                        <tr>
                            <Cell num={0} />
                            <Cell num={1} />
                            <Cell num={2} />
                        </tr>
                        <tr>
                            <Cell num={3} />
                            <Cell num={4} />
                            <Cell num={5} />
                        </tr>
                        <tr>
                            <Cell num={6} />
                            <Cell num={7} />
                            <Cell num={8} />
                        </tr>
                    </tbody>
                </table>
                    { winner && (
                        <Results 
                            winner = {winner}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                    )}
            </div>
        </>
		
    ) 
}

export default Triquis