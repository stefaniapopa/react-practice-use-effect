import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [growth, setGrowth] = useState(0);

  return (
   <div>
     <header className='App-header'>
       <h2>Use Effect</h2>
       <h3>growth:{growth}</h3>
     </header>
   </div>
  );
}

export default App;
