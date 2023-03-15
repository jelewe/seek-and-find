import img from '../Components/imgs/img.jpg'
import { useState, useEffect } from 'react';


const Game = () => {

    //add sticky header to show characters to find
    //add timer
    //add popovers 

    const [boxCoords, setBoxCoords] = useState({ x: null, y: null });

    const handleClick = (e) => {
        console.log(e)
        drawBox(e)
    }

    const drawBox = (e) => {
        const rect = e.target.getBoundingClientRect(); 
        console.log(rect)
        console.log(window.innerWidth)
        if (window.innerWidth > 1432) { //this is when center align kicks in and rect no longer applies, i think
            const x = e.clientX
            const y = e.clientY - rect.top;
        const boxSize = 60; 
        const boxX = x - boxSize / 2;
        const boxY = y - boxSize / 2;
        setBoxCoords({ x: boxX, y: boxY });
        } else {
            const x = e.clientX - rect.left;  //calculates horizontal offset since image is center aligned
            const y = e.clientY - rect.top;
        const boxSize = 60; 
        const boxX = x - boxSize / 2;
        const boxY = y - boxSize / 2;
        setBoxCoords({ x: boxX, y: boxY });
        }
    }

    return (
        <div  style={{ position: "relative" }} className="gameImg">
            <img src= {img} 
                alt ="hundreds of cartoon characters" 
                onClick= {(e) => handleClick(e)} 
            />
            {boxCoords.x !== null && (
                <div
                    style={{
                    position: "absolute",
                    left: boxCoords.x + "px",
                    top: boxCoords.y + "px",
                    width: "60px",
                    height: "60px",
                    border: "1px dashed white",
                    borderRadius: "50px",
                   boxShadow: "0 0 20px 15px #000000"
                    }}
                />
                )}
            <br />
            <span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/91619724@N04/40490647930">"George Orwell would love it"</a> by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/wendelinjacober/">Wendelin Jacober </a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC BY-NC-ND 2.0.</a>
            </span>
        </div>
    )
}

export default Game

/*     const drawBox = (e) => {
        //starts to fail around 1500 vw -- likely due to imgRect width
        const img = e.target;
        const imgRect = img.getBoundingClientRect();
        console.log(imgRect)
        const imgWidth = img.naturalWidth || img.width; // get the image's natural width or fallback to the rendered width
        const imgHeight = img.naturalHeight || img.height; // get the image's natural height or fallback to the rendered height
        const x = e.clientX - imgRect.left;
        const y = e.clientY - imgRect.top;
        const boxSize = 50; // Change the box size as needed
        const boxX = x / imgRect.width * imgWidth - boxSize / 2;
        const boxY = y / imgRect.height * imgHeight - boxSize / 2;
        setBoxCoords({ x: boxX, y: boxY });
    }
    */