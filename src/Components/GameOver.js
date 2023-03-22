const GameOver = ({time}) => {

    <div style={{
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

export default GameOver