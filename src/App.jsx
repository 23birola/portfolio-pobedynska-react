import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Projects';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Header from './components/Header';
import NotFound from './components/NotFound'

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="work" element={<Works />} />
          <Route path="skills" element={<Skills/>} />
          <Route path="contacts/*" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </>
  );
}

