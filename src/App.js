import { useSelector } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { getAllCharactersAsync } from './redux/charactersSlice';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';

function App() {


  return (
    <Router>
    <div style={{padding:"30px"}}>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/char/:char_id" element={<Detail/>}/>
        <Route path='/quotes' element={<Quotes/>}/>
        <Route path='/quotes/:quote_id' element={<QuoteDetail/>}/>


      </Routes>
    </div>
  </Router>
  );
}


export default App;
