import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Button from './components/Button'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="">Coole Freundes Liste</h1>
      <div className>
      <List name={"Damien"}  />
      <List name={"David"}/>
      <List name={"Simon"} />
      <Button name={"Click me!"} onClick={() => setCount(count + 1)}>  </Button>
      <p> Count: {count}</p>
      <Card image={"/./public/img_avatar.png"} name={"Damien Rollis"} jobtitle={"Der Knaller"}></Card>
      
      </div>
      
     
    </>
  )
}

export default App
