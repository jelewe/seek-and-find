import { useNavigate } from "react-router-dom";
import { saveScore } from "../Firebase";


export const Timer = ({time, reset}) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const navigate= useNavigate()
    const saveAndGo = (time) => {
        saveScore(time);
        navigate("/leaderboard")
    }



    return (
        <div className="Timer">
          <p>Time elapsed: {minutes}:{seconds < 10 ? "0" : ""}{seconds}</p>
            <button type="button" onClick={(e) => reset()}>Play again</button>
            <button type="button" onClick= {(e) => saveAndGo(time)}>Save Score</button>
            <button type="button" onClick={(e) =>navigate("/")}>Home</button>
        </div>
      );
}