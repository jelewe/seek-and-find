import bart from '../Components/imgs/bart.png'
import mario from '../Components/imgs/mario.png'
import winnie from '../Components/imgs/winnie.png'
import { Link } from 'react-router-dom'

const Home = () => {



    return (
        <div className="Home" style={{textAlign: "center"}}>
            <h1 >Seek & Find</h1>
           
            <span>In <Link to="/game">this game,</Link> you'll be searching for Bart Simpson, Super Mario, and Winnie the Pooh. Use your mouse to click on each character and select the character you found. </span>
            <span>See how fast you can find all the characters!</span>
            <div className="imgDiv">
                <img src={mario} alt="Super Mario" height="240px" />
                <img src={bart} alt="Bart Simpson" height="240px" />
                <img src={winnie} alt="Winnie the Pooh" height="240px" />
            </div>
        </div>
    )


}

export default Home