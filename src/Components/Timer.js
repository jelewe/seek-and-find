import { getUserName, signOutUser, firestore,signIn, saveScore } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
export const Timer = ({time, reset}) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;



    return (
        <div className="Timer">
          <p>Time elapsed: {minutes}:{seconds < 10 ? "0" : ""}{seconds}</p>
            <button type="button" onClick={(e) => reset()}>Play again</button>
            <button type="button" onClick= {(e) => saveScore(time)}>Save Score</button>
        </div>
      );
}