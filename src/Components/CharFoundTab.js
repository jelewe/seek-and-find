import './CharFoundTab.css'

const CharFoundTab = ({selectedChar, found, boxCoords}) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (

   

        <div id="confirmCharFound"
                style={{left: boxCoords.x + "px",
                top: boxCoords.y + "px"}}>
            {
                found ? 
                <div className= "found">
                    <b>You found {capitalize(selectedChar)}! </b>
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