import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('http://localhost:5001/api/hello')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('Error fetching from backend'));
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-blue-600 mb-4'>Hello World</h1>
      <p className='text-xl text-gray-700'>{message}</p>
    </div>
  );
}

export default App;
