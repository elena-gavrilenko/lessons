import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [notes,setNotes]=useState([])

const URL='http://localhost:8000/notes'
 useEffect(() =>{
   fetch(URL)
   .then((resp)=>{
    return resp.json()
   })
   .then((data)=>{
    console.log(data);
    setNotes(data)
   })
  },[])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {notes.map((note)=>{
          return <li key={note.id}>{note.title}</li>
        })}
      </ul>
    </>
  )
}

export default App

// mern  почитать
// nest фрейморк для node