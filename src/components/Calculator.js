import React from 'react';
import '../App.css';

const Buttons = () => (
  <div className="calculator">
    <div className="button output">0</div>
    <span className="button">AC</span>
    <span className="button">+/-</span>
    <span className="button">%</span>
    <span className="button orange">&divide;</span>
    <span className="button">7</span>
    <span className="button">8</span>
    <span className="button">9</span>
    <span className="button orange">&times;</span>
    <span className="button">4</span>
    <span className="button">5</span>
    <span className="button">6</span>
    <span className="button orange">&minus;</span>
    <span className="button">1</span>
    <span className="button">2</span>
    <span className="button">3</span>
    <span className="button orange">+</span>
    <span className="button zero">0</span>
    <span className="button">.</span>
    <span className="button orange">=</span>
  </div>
);

const Calculator = () => (
  <Buttons />
);

export default Calculator;
