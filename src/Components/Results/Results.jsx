import React from "react";
import "./Results.css"
const Results = ({winner,setWinner,setCells}) => {
    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(""))
    }
    return (
        <div className="position">
            <h2>Congratulations the winner is <span>{winner}</span></h2>
            <button onClick={()=>{handleRestart()}}>Play Again</button>
        </div>
    )
}

export default Results