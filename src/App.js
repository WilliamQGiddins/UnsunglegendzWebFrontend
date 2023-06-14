import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Basketball from './pages/Basketball';
import Baseball from './pages/Baseball';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBasketballAthlete from './athletes/AddBasketballAthlete';
import AddBaseballAthlete from './athletes/AddBaseballAthlete';
import ViewBasketballAthlete from './athletes/ViewBasketballAthlete'
import ViewBaseballAthlete from './athletes/ViewBaseballAthlete';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addbasketballathlete" element={<AddBasketballAthlete />} />
          <Route exact path="/addbaseballathlete" element={<AddBaseballAthlete />} />
          <Route exact path="/basketball" element={<Basketball />} />
          <Route exact path="/baseball" element={<Baseball />} />
          <Route exact path="/viewbasketballathlete/:id" element={<ViewBasketballAthlete />} />
          <Route exact path="/viewbaseballathlete/:id" element={<ViewBaseballAthlete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
