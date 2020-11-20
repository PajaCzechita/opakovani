import React, { useState } from 'react';
import { render } from 'react-dom';
import Digit from './Digit/index.jsx';

import './index.html';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isDigit = (vstup) => {
  return digits.includes(vstup);
};

const validujRodneCislo = (rodneCislo) => {
  return Array.from(rodneCislo).map((num) => {
    return {
      char: num,
      digit: isDigit(num),
    };
  });
};

const App = () => {
  const [input, setInput] = useState('');
  const [vysledek, setVysledek] = useState([]);
  const [timeStamp, setTimeStamp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setVysledek(validujRodneCislo(input));
    setInput('');

    fetch('http://worldtimeapi.org/api/timezone/Europe/Prague')
      .then((response) => response.json())
      .then((json) => setTimeStamp(json.datetime));
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Zkontrolovat</button>
      </form>
      <div id="zprava">Rodné číslo bylo zkontrolováno:{timeStamp}</div>
      <div id="rodneCislo">{vysledek.map((num) => Digit(num))}</div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
