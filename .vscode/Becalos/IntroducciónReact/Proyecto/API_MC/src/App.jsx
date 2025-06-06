import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(0)

  use(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <>

    <h2>Lista de Peliculas</h2>

    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>

    </>
  )
}

export default App
