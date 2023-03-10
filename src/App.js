import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element= { <App/> } />
        <Route index element= {<Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
