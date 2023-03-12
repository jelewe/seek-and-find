import img from '../Components/imgs/img.jpg'


const Game = () => {

    //add sticky header to show characters to find
    //add timer
    //add popovers 

    return (
        <div>
            <img src= {img} alt ="hundreds of cartoon characters"></img>
            <br />
            <span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/91619724@N04/40490647930">"George Orwell would love it"</a> by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/wendelinjacober/">Wendelin Jacober </a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC BY-NC-ND 2.0.</a>
            </span>
        </div>
    )
}

export default Game