import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Sidebar from "./components/Sidebar";

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
      name: "Skills",
      link: "skills"
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

export default function App() {
  return (
    <Router>
      <Sidebar links={linkList} />
      <Body />
      <Routes>
        <Route path="/"/>
      </Routes>
    </Router>
  );
}
