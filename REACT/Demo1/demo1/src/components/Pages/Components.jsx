import { useState } from 'react'
import List from '../List'
import Button from '../Button'
import Card from '../card'

export default function Components() {
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

