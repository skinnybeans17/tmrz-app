import React from 'react';
import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
  return (
    <div className="App">
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;