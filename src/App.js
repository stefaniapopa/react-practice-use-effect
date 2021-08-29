import React, {useState, useEffect} from 'react';
import './App.css';

let born = false;

function App() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect (()=>{
    if(born){
      document.title= 'nirvana attained';
    }
  },[nirvana]);

  useEffect(()=>{
    console.log('im born')
  },[]);

  useEffect(()=>{
    if(born){
      console.log('make mistake and learn');
    }else {
      born = true
    }

    if(growth > 70){
      setNirvana(true);
    }
    
    return function cleanup(){
      console.log('clean up after mistakes')
    }
  });

  function growHandle(){
    setGrowth(growth + 10)
  }

  return (
   <div>
     <header className='App-header'>
       <h2>Use Effect</h2>
       <h3>growth:{growth}</h3>
       <button onClick={growHandle}>learn and grow</button>
     </header>
   </div>
  );
}

export default App;
