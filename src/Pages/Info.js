import gh from '../Components/imgs/github.svg'

const Info = () => {

    return (
        <div id="info">
            <h1>This project was built by <a href="https://github.com/jelewe"><img src={gh} alt="github icon" height="30px" /> jelewe </a> for The Odin Project.</h1>
            <span>Image finder games involve finding a specific object or character hidden within a larger image, often with a lot of visual clutter. The objective of these games is to challenge your visual perception and attention to detail. </span>
            <span>This project was built using:</span>
            <ul>
                <li>Reactjs and React-Bootstrap for the frontend UI and game logic</li>
                <li>React Router for pagination</li>
                <li>Firebase Firestore for the backend database</li>
                <li>Firestore Auth for user authentication</li>
                <li>Game image <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/91619724@N04/40490647930">"George Orwell would love it"</a> by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/wendelinjacober/">Wendelin Jacober </a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC BY-NC-ND 2.0.</a></li>

            </ul>
        </div>
    )
}

export default Info