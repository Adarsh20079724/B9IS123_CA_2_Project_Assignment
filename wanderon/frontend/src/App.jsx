import { useState } from "react"

const App = () => {
  const [message, setMessage] = useState("Message from frontend")
 
  // Fetching Data from Server
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

  //Fetching DB Data
  const fetchDB_Data = async () => {
    try {
    const response  = await fetch("http://localhost:3000/api/hello_db");
    const data = await response.json()
    console.log("Data fron DB API: ", data)
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
        <button className= "bg-amber-300" onClick={fetchData}> Fetch Server Message</button>
        <br/>
        <button className= "bg-amber-300" onClick={fetchDB_Data}>Fetch DB Message</button>
        <div>Message: {message}</div>
      </div>
  )
}

export default App
