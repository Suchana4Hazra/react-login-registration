import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginRegistration from './Components/Assets/LoginRegistration/LoginRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <LoginRegistration/>
   </>    
  )
}

export default App
