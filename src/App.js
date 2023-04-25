import './App.css';
import FetchQuote from './api/Quote';
import Calculator from './components/Calculator';

const App = () => (
  <div className="app">
    <FetchQuote />
    <Calculator />
  </div>
);

export default App;
