// IMPORT CSS
import './styles/App.css';

// IMPORT COMPONENTS
import Home from './components/Home';
import Agents from './components/Agents';
import Maps from './components/Maps';
import Weapons from './components/Weapons';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  const URL = 'https://localhost:3000/';

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/agents' element={<Agents URL={URL}/>} />
        <Route path='/maps' element={<Maps URL={URL}/>} />
        <Route path='/weapons' element={<Weapons URL={URL}/>} />
      </Routes>
    </div>
  );
}

export default App;
