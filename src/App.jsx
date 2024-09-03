import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; // This should include Tailwind
import Hero from './components/hero/hero'
import Navbar from './components/navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return <div>
    {/* <section> */}
      <Hero/>
    {/* </section> */}
  </div>
}

export default App
