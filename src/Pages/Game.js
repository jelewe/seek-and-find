import img from '../Components/imgs/img.jpg'
import { useState, useEffect } from 'react';



const Game = () => {

    //add sticky header to show characters to find
    //add timer
    //add popovers 

    const [circCoords, setCircCoords] = useState({ x: null, y: null });
    const [boxCoords, setBoxCoords] = useState({  x: null, y: null });

    const handleClick = (e) => {
        console.log(e)
        drawCircle(e)
    }

    const drawCircle = (e) => {
        const rect = e.target.getBoundingClientRect(); 
        const boxSize = 60; 
        const y = e.clientY - rect.top;
        const boxY = y - boxSize / 2;
        let x = e.clientX
        const boxX = x - boxSize / 2;
        if (window.innerWidth > 1432) { //this is when center align kicks in and rect no longer applies, i think
            setCircCoords({ x: boxX, y: boxY });
            setBoxCoords({ x: boxX + 60, y: boxY + 60 })
        } else {
            x = x - rect.left;  //calculates horizontal offset since image is center aligned
            setCircCoords({ x: boxX, y: boxY });
            setBoxCoords({ x: boxX + 60, y: boxY + 60})
        }
        console.log(boxX)
    }



    return (
        <div  style={{ position: "relative" }} className="gameImg">
            
                <img src= {img} 
                    alt ="hundreds of cartoon characters" 
                    onClick= {(e) => handleClick(e)} 
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
                    width: "150px",
                    height: "180px",
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "4px",
                    }} className="popUp">
                        <div id="SM">Super Mario</div>
                        <div id="BS">Bart Simpson</div>
                        <div id="WP">Winnie the Pooh</div>
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
