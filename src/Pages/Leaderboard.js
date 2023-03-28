import { Spinner } from "react-bootstrap";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { firestore } from "../Firebase";
import { useEffect, useState } from "react";


const Leaderboard = () => {
    const [downloading, setDownloading] = useState(false)
    const [board, setBoard] = useState([])

    

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return (
            <div className ="time">
                {minutes}:{seconds < 10 ? "0" : ""}{seconds}
            </div>
        )
    }



    const getNames =  async () => {
        try {
            setDownloading(true);
            const q = query(collection(firestore, 'leaderboard'), orderBy('time', 'asc'));
            const qSnap = await getDocs(q);
                qSnap.forEach((doc) => {
                    setBoard((prev) => [...prev, doc.data()])
                });
              } catch (error) {
                console.log(error);
              }  finally {
                setDownloading(false)
              }
        }

        useEffect(() =>{
            getNames()
        }, [])

    return (
        <div className="board">
            <div style= {{ textAlign: "end" }}><b>Name</b></div>
            <div><b>Time</b></div>

            { downloading ? 
                <div>
                    <Spinner animation="border" variant="light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                :
                <div className="user">
                   { 
                        board.map((i) => <div key = {i.index} className="name"> {i.name} {formatTime(i.time)} </div>)
                   }
                </div>

            }
        </div>
    )
}

export default Leaderboard