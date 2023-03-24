import bart from '../Components/imgs/bart.png'
import mario from '../Components/imgs/mario.png'
import winnie from '../Components/imgs/winnie.png'
import { Spinner } from 'react-bootstrap'
import './CharSelectTab.css'

const CharSelectTab = ({handleCharSelect, loading, charList}) => {
    //charList: [ {name: 'bart', found: null}, {name: 'mario', found: null}, {name: 'winnie', found: null} ]

    //passUp bc if user clicks on img, handleCharSelect wont work due to no id arg
    const passUp = (e) => {
        e.stopPropagation();
        let div = (e.target.closest('div'))
        handleCharSelect(div.id)
    }

    return (
        <div >
        {
            loading ? 
            <div>
                <Spinner animation="border" variant="light">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            :
            <div className='charSelectTab'>
                <div id="mario"
                    style={{display: charList[1].found ? 'none' : 'block'}}
                    onClick= {(e) => handleCharSelect(e.target.id)}>
                        <img 
                        src={mario} 
                        alt="Super Mario" 
                        className= "mario"
                        onClick={(e) => passUp(e)}
                        /> 
                    Super Mario
                </div>

                <div id="bart"
                    style={{display: charList[0].found ? 'none' : 'block'}}
                    onClick= {(e) => handleCharSelect(e.target.id)}>
                        <img 
                            src={bart} 
                            alt="Bart Simpson" 
                            onClick={(e) => passUp(e)}
                            />
                        Bart Simpson
                </div>

                <div id="winnie"
                    style={{display: charList[2].found ? 'none' : 'block'}}
                    onClick= {(e) => handleCharSelect(e.target.id)}>
                        <img 
                        src={winnie} 
                        alt="Winnie the Pooh" 
                        onClick={(e) => passUp(e)}
                        />
                    Winnie the Pooh
                </div> 
        </div>
        }
</div>
    )
}

export default CharSelectTab