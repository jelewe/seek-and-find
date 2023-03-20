import img from '../Components/imgs/img.jpg'
import bart from '../Components/imgs/bart.png'
import mario from '../Components/imgs/mario.png'
import winnie from '../Components/imgs/winnie.png'
import { useState } from 'react';



const Game = () => {

    //add sticky header to show characters to find
    //add timer


    const [circCoords, setCircCoords] = useState({ x: null, y: null });
    const [boxCoords, setBoxCoords] = useState({  x: null, y: null });


    const drawCircle = (e) => {
        const boxSize = 60; 
        const boxY = e.pageY - boxSize / 2;
        const boxX = e.pageX - boxSize / 2;
        setCircCoords({ x: boxX, y: boxY });
        setBoxCoords({ x: boxX + 60, y: boxY + 60 })
    }

    function trackPixelCoordinates(e) {
        const ratio = document.body.scrollWidth / 1432 //original img width

        //X's
        let marioX = 520
        let newMarioX = marioX * ratio
        let winnieX = 941
        let newWinnieX = winnieX * ratio
        let bartX = 140
        let newBartX = bartX * ratio 

        //Y's
        let marioY = 433
        let newMarioY = marioY * ratio
        let winnieY = 678
        let newWinnieY = winnieY * ratio
        let bartY = 1970
        let newBartY = bartY * ratio

        if (e.target.id === "mario") {
            if ((e.pageX > newMarioX - 30 && e.pageX < newMarioX + 30) && (e.pageY > newMarioY - 30 && e.pageY < newMarioY + 30)) {
            console.log("good job")
            } else {
                console.log('error')
            }
        } 
        if (e.target.id === "bart") {

        }
    }
        


    return (
        <div  style={{ position: "relative" }} className="gameImg">
            
                <img src= {img} 
                    alt ="hundreds of cartoon characters" 
                    onClick= {(e) => drawCircle(e)} 
                />

            {circCoords.x !== null && (
                <div>
                    <div
                        style={{
                        position: "absolute",
                        left: circCoords.x + "px",
                        top: circCoords.y + "px",
                        width: "60px",
                        height: "60px",
                        border: "1px solid white",
                        borderRadius: "50px",
                        boxShadow: "0 0 20px 25px #000000"
                        }}
                    />
                    <div
                    style={{
                    position: "absolute",
                    left: boxCoords.x + "px",
                    top: boxCoords.y + "px",
                    width: "190px",
                    height: "180px",
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "4px",
                    }} className="popUp">
                        <div id="mario"
                                onClick= {(e) => trackPixelCoordinates(e)}>
                            <img src={mario} alt="Super Mario" /> Super Mario
                        </div>
                        <div id="bart"
                                onClick= {(e) => trackPixelCoordinates(e)}>
                            <img src={bart} alt="Bart Simpson" />Bart Simpson
                        </div>
                        <div id="winnie"
                                onClick= {(e) => trackPixelCoordinates(e)}>
                            <img src={winnie} alt="Winnie the Pooh" />Winnie the Pooh
                        </div>
                    </div>
                </div>
                )}
            <br />
            <span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/91619724@N04/40490647930">"George Orwell would love it"</a> by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/wendelinjacober/">Wendelin Jacober </a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC BY-NC-ND 2.0.</a>
            </span>
        </div>
    )
}

export default Game
