import './CharFoundTab.css'

const CharFoundTab = ({selectedChar, found, boxCoords}) => {
    return (

        <div id="confirmCharFound"
                style={{left: boxCoords.x + "px",
                top: boxCoords.y + "px"}}>
            {
                found ? 
                <div className= "found">
                    <b>You found {selectedChar}! </b>
                </div>
                :
                <div className='nope'>
                    <b>Sorry, try again!</b>
                </div>
            }
        </div> 
    )
}

export default CharFoundTab