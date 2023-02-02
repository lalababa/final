import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'


function App() {
  const [message, setMessage] = useState("")
  useEffect (()=>{
    axios.get('/greeting').then( res => {
      console.log(res.data)
      setMessage(res.data.greetings)
    })
  },[])
  
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
