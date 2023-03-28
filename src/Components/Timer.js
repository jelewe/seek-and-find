import { useNavigate } from "react-router-dom";
import { saveScore } from "../Firebase";
import { Button } from "react-bootstrap";
import './Timer.css'



export const Timer = ({time, reset}) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const navigate= useNavigate();


    const saveAndGo = (time) => {
        saveScore(time)
        setTimeout(() => {
          navigate("/leaderboard")
        }, 3000);
    }



    return (
      <div className="Timer">
        <p><b>Congratulations! You found all the characters!</b></p>
                                <br />
        
          <p>Time elapsed: {minutes}:{seconds < 10 ? "0" : ""}{seconds}</p>
            <Button variant="light" onClick={(e) => reset()}>Play Again</Button>
            <Button variant="light" onClick= {(e) => saveAndGo(time)}>Save Score</Button>
            <Button variant="light" onClick={(e) => navigate("/")}>Go Home</Button>
        </div>
      
      );
}