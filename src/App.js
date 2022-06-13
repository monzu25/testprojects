import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';




function App() {




  const [tags, setTags] = useState([]);
  console.log("This is Value",tags);
 
  const handleKeyUp = (e) => {
    if (e.keyCode === 32) {
      setTags([...tags, e.target.value]);
      e.target.value = '';

    }
  };


  // useEffect(() => {
  // }, [tags]);





  return (
    <div className="App">

      <input onKeyDown={handleKeyUp} />
      <input onKeyDown={handleKeyUp}/>
      <input onKeyDown={handleKeyUp} />

    </div>
  );
}

export default App;
