import Navigation from './components/Navigation';
import Jamboton from './components/Jamboton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import * as bootstrap from 'bootstrap'
// import * as styles from './css/styles.css'

export default function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="about" element={<Navigation />} />
        <Route path="work" element={<Navigation />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Navigation />} />
      </Routes>
      </Router>
    </>
  );
}

