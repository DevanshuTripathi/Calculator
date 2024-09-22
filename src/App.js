import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import React, { useState } from 'react';

function App() {

  const [display, setDisplay] = useState('');

  const handleClick = (e) => {
    const value = e.target.dataset.value;
    const type = e.target.dataset.type;

    if (type === 'clear') {
      setDisplay('');
    } else if (type === 'back') {
      setDisplay(display.substring(0, display.length - 1));
    } else if (type === 'number' || type === 'operator') {
      setDisplay(display + value)
    } else if (type === 'equal') {
      try {
        setDisplay(eval(display));
      }
      catch{
        setDisplay('Error');
      }
    }

  }


  return (
    <div className="calculator">
    <Screen value={display} />
    <div className="button-container">
    <ul>
      <li><Button value="C" dataValue="C" dataType="clear" onClick={handleClick} /></li>
      <li><Button value="<-" dataValue="<-" dataType="back" onClick={handleClick} /></li>
      <li><Button value="/" dataValue="/" dataType="operator" onClick={handleClick} /></li>
      <li><Button value="*" dataValue="*" dataType="operator" onClick={handleClick} /></li>
    </ul>

    <ul>
      <li><Button value="7" dataValue="7" dataType="number" onClick={handleClick} /></li>
      <li><Button value="8" dataValue="8" dataType="number" onClick={handleClick} /></li>
      <li><Button value="9" dataValue="9" dataType="number" onClick={handleClick} /></li>
      <li><Button value="-" dataValue="-" dataType="operator" onClick={handleClick} /></li>
    </ul>

    <ul>
      <li><Button value="4" dataValue="4" dataType="number" onClick={handleClick} /></li>
      <li><Button value="5" dataValue="5" dataType="number" onClick={handleClick} /></li>
      <li><Button value="6" dataValue="6" dataType="number" onClick={handleClick} /></li>
      <li><Button value="+" dataValue="+" dataType="operator" onClick={handleClick} /></li>
    </ul>

    <ul>
      <li><Button value="1" dataValue="1" dataType="number" onClick={handleClick} /></li>
      <li><Button value="2" dataValue="2" dataType="number" onClick={handleClick} /></li>
      <li><Button value="3" dataValue="3" dataType="number" onClick={handleClick} /></li>
      <li><Button value="=" dataValue="=" dataType="equal" onClick={handleClick} /></li>
    </ul>
    </div>

    </div>
  );
}

export default App;
