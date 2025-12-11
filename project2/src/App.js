import { useEffect, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) =>{
    setCount(count+ value);
  }

  const handleChangeText = (e) =>{
    setText(e.target.value);
  }

  /* 
  [] : App.js 컴포런트가 로딩(mount)될 때 1회 실행
  [count] : count값이 변경되면 useEffect구문 실행
  */

useEffect(()=>{
  console.log("count update : " + count);
}, [count]);


  return (
    <div className="App">
      <h1>Simple Counter</h1>
      
      <section>
      <input value={text} onChange={handleChangeText} />
       </section>
      <input count>] 
      </input>  
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>

    </div>
  );
}

export default App;
