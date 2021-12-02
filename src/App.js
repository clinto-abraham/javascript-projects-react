import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Counter } from './features/counter/Counter';
import ReactQueryApp from './components/reactQuery';
import Input from '@mui/material/Input';
import './styles/App.css';
const ariaLabel = { 'aria-label': 'description' };





function App() {
  return (
    <div className="App">
      <header className="App-header">
      <span className="tile">
        <div className="unit-tile"> <Counter  /> </div>
       <div className="unit-tile"> <ReactQueryApp /> </div>
       <div className="unit-tile" > <Input placeholder="Placeholder" inputProps={ariaLabel} /></div>
        </span>
        
      </header>
      
    </div>
  );
}

export default hot(App);

