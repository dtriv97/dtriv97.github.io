import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Body />
      <Routes>
        <Route path="/" exact/>
      </Routes>
    </Router>
  );
}

export default App;
