import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const response = await axios.get('/api/test');
    setMessage(response.data.message);
  };

  return (
    <div className="App">
      <p>{message}</p>
      <button onClick={handleClick}>Api Message Test</button>
    </div>
  );
}

export default App;
