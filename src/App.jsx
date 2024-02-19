import Navigation from './components/Navigation';
import Jamboton from './components/Jamboton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contacts from './components/Contacts';
import Skills from './components/Skills';

// import * as bootstrap from 'bootstrap'
// import * as styles from './css/styles.css'

export default function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="work" element={<Works />} />
        <Route path="skills" element={<Skills/>} />
        {/* Define a route that will have descendant routes */}
        <Route path="contacts/*" element={<Contacts/>} />
      </Routes>
      </Router>
    </>
  );
}

