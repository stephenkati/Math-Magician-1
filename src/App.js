import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import FetchQuote from './api/Quote';

const App = () => (
  <>
    <Navbar />
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<FetchQuote />} />
      </Routes>
    </div>
  </>
);

export default App;
