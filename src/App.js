import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Info from './Pages/Info';
import Game from './Pages/Game';
import Leaderboard from './Pages/Leaderboard';
import './App.css';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route element= {<Layout />}>
          <Route path ="/" index element= {<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="game" element={<Game />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
