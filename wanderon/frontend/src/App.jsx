import { useState } from "react"

const App = () => {
  const [message, setMessage] = useState("Message from frontend")

  const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'https://wanderon-project-backend.onrender.com'
  console.log('Backend API: ',API_URL)
  // Fetching Data from Server
  const fetchData = async () => {
    try {
    const response = await fetch(`${API_URL}/api/hello`);

    if (!response.ok) {
        throw new Error('Failed to fetch message');
      }

    const data = await response.json()
    console.log("ServerData: ", data);
    setMessage(data)
    }
    catch(err) {
      setMessage(`Error is: ${err}`)
    }
  }

  //Fetching DB Data
  const fetchDB_Data = async () => {
    try {
    const response  = await fetch(`${API_URL}/api/db`);

    if (!response.ok) {
        throw new Error('Failed to fetch message from DB');
      }

    const data = await response.json()
    console.log("Data fron DB API: ", data)
    setMessage(data.message)
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
