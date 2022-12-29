import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/sobre" element = {<Sobre/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
