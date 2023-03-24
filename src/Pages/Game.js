import img from '../Components/imgs/img.jpg'
import { Timer } from '../Components/Timer'
import { useEffect, useState } from 'react';
import { firestore } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';
import CharSelectTab from '../Components/CharSelectTab';
import CharFoundTab from '../Components/CharFoundTab';




const Game = () => {
    //add sticky header to show characters to find


    const [circCoords, setCircCoords] = useState({ x: null, y: null });
    const [boxCoords, setBoxCoords] = useState({  x: null, y: null });
    const [charCoords, setCharCoords] = useState({ x: null, y: null });
    const [selectedChar, setSelectedChar] = useState(null)
    const [targetCoords, setTargetCoords] = useState({ x: null, y: null })
    const [charList, setCharList] = useState([ {name: 'bart', found: null}, {name: 'mario', found: null}, {name: 'winnie', found: null} ])
    const [gameOver, setGameOver] = useState(null)
    const [time, setTime] = useState(null)
    const [loading, setLoading] = useState(false)
    const [found, setFound] = useState(false)
    const [foundTab, setFoundTab] = useState(false)


    const drawCircle = (e) => {
        const boxSize = 60; 
        const boxY = e.pageY - boxSize / 2;
        const boxX = e.pageX - boxSize / 2;
        setCircCoords({ x: boxX, y: boxY });
        setBoxCoords({ x: boxX + 60, y: boxY + 60 })
        setCharCoords({ x: e.pageX, y: e.pageY })
    }

    const handleCharSelect = (id) => {
        setSelectedChar(id);
        getCoords(id);
    }

    const compareCoords = (targetCoords) => {
        const ratio = document.body.scrollWidth / 1432 //original img width
        const newX = targetCoords.x * ratio
        const newY = targetCoords.y * ratio

            //using 30 to accomodate for circumference of circle, character will be within circle
            if ((charCoords.x > newX - 30 && charCoords.x  < newX + 30) && (charCoords.y> newY - 30 && charCoords.y < newY + 30)) {
                console.log("good job")
                updateCharList();
                confirmFind(true);
            } else {
                console.log('error');
                confirmFind(false)
            }
    }

    const confirmFind = (bool) => {
        if ( bool === true) {
            setFound(true);
            setFoundTab(true);
        } else if ( bool === false) {
            setFoundTab(true);
        }
        setCircCoords({ x: null, y: null })
    }

    const resetFoundTab = () => {
        setFoundTab(false);
        setFound(false)
    }

    const updateCharList = () => {
        const updatedList = charList.map
        (
            char => char.name === selectedChar ? { ...char, found: true } : char
        )
        setCharList(updatedList)
    }


    const getCoords =  async (id) => {
        try {
            setLoading(true);
            const q = doc(firestore, 'coordinates', id)
            //const d = doc(q, id)
            const docSnap = await getDoc(q);
            //if (docSnap.exists()) {
               // console.log("Document data:", docSnap.data());
               // console.log(docSnap.data().x)
                setTargetCoords({ x: docSnap.data().x, y: docSnap.data().y})
              } catch (error) {
                // docSnap.data() will be undefined in this case
                console.log(error);
              }  finally {
                setLoading(false)
              }
        }
    


    const resetGame = () => {
        setCircCoords({ x: null, y: null })
        setBoxCoords({ x: null, y: null })
        setCharCoords({ x: null, y: null });
        setSelectedChar(null)
        setTargetCoords({ x: null, y: null })
        setCharList([ {name: 'bart', found: null}, {name: 'mario', found: null}, {name: 'winnie', found: null} ])
        setGameOver(null)
        setTime(0)
        resetFoundTab();
    }


/*
//when user selects character from box, fetch character coords from firebase
    useEffect(() => {
        if (selectedChar) 
        getCoords(selectedChar);
    }, [selectedChar]);
    */

//when firebase sets target coordinates, compare coordinates
    useEffect(() => {
        if (targetCoords.x)
        compareCoords(targetCoords);
    }, [targetCoords]);

    //every time character list updates 'found', check to see if all characters have been found
    useEffect(() => {
        if (charList[0].found === true && charList[1].found === true && charList[2].found === true)
        setGameOver(true);
    }, [charList])

    useEffect(() => {
        if (gameOver)
        resetFoundTab();
        setBoxCoords({ x: null, y: null })
    }, [gameOver])

    useEffect(() => {
        const timer = setInterval(() => {
          if (!gameOver) {
            setTime((prevTime) => prevTime + 1);
          }
        }, 1000);
        return () => clearInterval(timer);
      }, [gameOver]);

 useEffect(() => {
        let timeOut;
        if (foundTab) {
            timeOut = setTimeout(() => {
                    resetFoundTab();
                    setBoxCoords({ x: null, y: null })
                }, 1000);
            }
        return () => {
            clearTimeout(timeOut);
        }
    }, [foundTab]);




    return (
        <div  style={{ position: "relative" }} className="gameImg">

        { foundTab ? 
            <CharFoundTab selectedChar= { selectedChar } found= { found } boxCoords= { boxCoords } /> 
            : null }
            
        { gameOver && <div style={{
                        position: "absolute",
                        width: "100vw",
                        height: "100vh",
                        paddingTop: "10rem",
                        color: "white",
                        backgroundColor: "black",
                        }} id="congrats">
                            <p><b>Congratulations! You found all the characters!</b></p>
                                <br />
                            <Timer time= {time} reset= { resetGame } />
                        </div> 
        }


            { !gameOver && 
                <img src= {img} 
                    alt ="hundreds of cartoon characters" 
                    onClick= {(e) => drawCircle(e)} 
                />
            }

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
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "4px",
                    }} className="popUp">

                    <CharSelectTab loading= { loading } handleCharSelect= { handleCharSelect } charList= { charList } />

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
