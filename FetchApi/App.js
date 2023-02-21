import {useState, useEffect} from "react"
import './App.css';
import Axios from "axios"


function App() {

  const [excuse, setExcuse] = useState(null)
  useEffect(() => {
    fetchData()
  })

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setExcuse(res.data[0].excuse)
    })
  }

  return (
    <div className="App">
     <h1>Generate an Excuse</h1>
     <button onClick={() => fetchData("party")}>Party</button>
     <button onClick={() => fetchData("family")}>Family</button>
     <button onClick={() => fetchData("office")}>Office</button>

     <p>{excuse}</p>
    </div>
  );
}


export default App;
