import { useState } from 'react';
import calculate from '../logic/calculate';

const Buttons = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const answer = calculate({ total, next, operation }, e.target.textContent);
    setTotal(answer.total);
    setNext(answer.next);
    setOperation(answer.operation);
  };

  return (
    <>
      <div className="button output">
        {total}
        {operation}
        {next}
      </div>
      <button onClick={handleClick} type="button" className="button">AC</button>
      <button onClick={handleClick} type="button" className="button">+/-</button>
      <button onClick={handleClick} type="button" className="button">%</button>
      <button onClick={handleClick} type="button" className="button orange">÷</button>
      <button onClick={handleClick} type="button" className="button">7</button>
      <button onClick={handleClick} type="button" className="button">8</button>
      <button onClick={handleClick} type="button" className="button">9</button>
      <button onClick={handleClick} type="button" className="button orange">x</button>
      <button onClick={handleClick} type="button" className="button">4</button>
      <button onClick={handleClick} type="button" className="button">5</button>
      <button onClick={handleClick} type="button" className="button">6</button>
      <button onClick={handleClick} type="button" className="button orange">-</button>
      <button onClick={handleClick} type="button" className="button">1</button>
      <button onClick={handleClick} type="button" className="button">2</button>
      <button onClick={handleClick} type="button" className="button">3</button>
      <button onClick={handleClick} type="button" className="button orange">+</button>
      <button onClick={handleClick} type="button" className="button zero">0</button>
      <button onClick={handleClick} type="button" className="button">.</button>
      <button onClick={handleClick} type="button" className="button orange">=</button>
    </>
  );
};

const Calculator = () => (
  <div className="cal">
    <div className="math">
      <h2 className="math-text">Let&apos;s do some math</h2>
    </div>
    <div className="calculator">
      <Buttons />
    </div>
  </div>
);

export default Calculator;
