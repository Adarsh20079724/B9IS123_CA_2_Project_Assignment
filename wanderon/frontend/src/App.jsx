import { useState } from "react"

const App = () => {
  const [message, setMessage] = useState("Message from frontend")
 
  const fetchData = async () => {
    try {
    const response  = await fetch("http://localhost:3000/api/hello");
    const data = await response.json()

    setMessage(data)
    }
    catch(err) {
      setMessage(`Error is: ${err}`)
    }
  }
  return (
      <div>
        <div>Welcome to Wander On</div>
        <br/>
        <button className= "bg-amber-300" onClick={fetchData}> Check Backend</button>
        <div>Message: {message}</div>
      </div>
  )
}

export default App
