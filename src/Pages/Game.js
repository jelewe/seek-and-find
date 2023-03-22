import img from '../Components/imgs/img.jpg'
import bart from '../Components/imgs/bart.png'
import mario from '../Components/imgs/mario.png'
import winnie from '../Components/imgs/winnie.png'
import GameOver from '../Components/GameOver'
import { useEffect, useState } from 'react';
import { firestore } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';




const Game = () => {

    //add sticky header to show characters to find
    //add timer


    const [circCoords, setCircCoords] = useState({ x: null, y: null });
    const [boxCoords, setBoxCoords] = useState({  x: null, y: null });
    const [charCoords, setCharCoords] = useState({ x: null, y: null });
    const [selectedChar, setSelectedChar] = useState(null)
    const [targetCoords, setTargetCoords] = useState({ x: null, y: null })
    const [charList, setCharList] = useState([ {name: 'bart', found: null}, {name: 'mario', found: null}, {name: 'winnie', found: null} ])
    const [gameOver, setGameOver] = useState(null)
    const [time, setTime] = useState(0)


    const drawCircle = (e) => {
        const boxSize = 60; 
        const boxY = e.pageY - boxSize / 2;
        const boxX = e.pageX - boxSize / 2;
        setCircCoords({ x: boxX, y: boxY });
        setBoxCoords({ x: boxX + 60, y: boxY + 60 })
        setCharCoords({ x: e.pageX, y: e.pageY })
    }

    const compareCoords = (targetCoords) => {
        const ratio = document.body.scrollWidth / 1432 //original img width
        const newX = targetCoords.x * ratio
        const newY = targetCoords.y * ratio

            //using 30 to accomodate for circumference of circle, character will be within circle
            if ((charCoords.x > newX - 30 && charCoords.x  < newX + 30) && (charCoords.y> newY - 30 && charCoords.y < newY + 30)) {
            console.log("good job")
            updateCharList();
            } else {
                console.log('error')
            }
    }

    const updateCharList = () => {
        const updatedList = charList.map(
            char => char.name === selectedChar ? { ...char, found: true } : char
        )
        setCharList(updatedList)
        console.log(charList)
    }

    

    const getCoords =  async (id) => {
        const q = doc(firestore, 'coordinates', id)
        const docSnap = await getDoc(q);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                console.log(docSnap.data().x)
                setTargetCoords({ x: docSnap.data().x, y: docSnap.data().y})
              } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
              }  
    }

/*    const scroll = () => {
        if (ref && ref.current)
        ref.current.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'})
    }*/

//when user selects character from box, fetch character coords from firebase
    useEffect(() => {
        if (selectedChar) 
        getCoords(selectedChar);
    }, [selectedChar]);

//when firebase sets target coordinates, compare coordinates
    useEffect(() => {
        if (targetCoords.x)
        compareCoords(targetCoords);
    }, [targetCoords]);

    //every time character list updates 'found', check to see if all characters have been found
    useEffect(() => {
        if (charList[0].found === true && charList[1].found === true && charList[2].found === true)
        setGameOver(true);
        console.log({gameOver})
    }, [charList])

    useEffect(() => {
        const timer = setInterval(() => {
          if (!gameOver) {
            setTime((prevTime) => prevTime + 1);
          }
        }, 1000);

        return () => clearInterval(timer);
      }, [gameOver]);


    useEffect(() => {
        if (gameOver) 
        setCircCoords({ x: null, y: null })
        setBoxCoords({ x: null, y: null })
    }, [gameOver])



    return (
        <div  style={{ position: "relative" }} className="gameImg">
            { gameOver && <div style={{
                        position: "absolute",
                        left: "300px",
                        top: "300px",
                        width: "200px",
                        height: "200px",
                        color: "white",
                        backgroundColor: "black",
                        borderRadius: "10px",
                        }} id="congrats">
                            <p>Congratulations! You found all the characters!</p><br />
                            <p>Your time was {time} </p>
                        </div> 

            }


            
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
                                onClick= {(e) => setSelectedChar(e.target.id)}>
                            <img src={mario} alt="Super Mario" /> Super Mario
                        </div>
                        <div id="bart"
                                onClick= {(e) => setSelectedChar(e.target.id)}>
                            <img src={bart} alt="Bart Simpson" />Bart Simpson
                        </div>
                        <div id="winnie"
                                onClick= {(e) => setSelectedChar(e.target.id)}>
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
