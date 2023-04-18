import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const linkList = [
  {
      name: 'Intro',
      link: "/"
  },
  {
      name: "About",
      link: "about"
  },
  {
      name: "Photography",
      link: "photography"
  },
  {
      name: "Contact",
      link: "contact"
  }
];

function App() {
  return (
    <Router>
      <Sidebar links={linkList} />
      <Body />
      <Routes>
        <Route path="/" exact/>
      </Routes>
    </Router>
  );
}

export default App;
