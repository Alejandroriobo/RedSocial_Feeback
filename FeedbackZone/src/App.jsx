import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Suspense } from 'react'
import { FetchData } from './FetchData' 
import './App.css'

const apiData = FetchData("https://jsonplaceholder.typicode.com/users")

function App() {
  const data = apiData.read();
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className='card'>
          {data?.map((user)=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  )
}

export default App
