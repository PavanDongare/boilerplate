import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [product,setProduct]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5001/api/products').then(
      (resp)=> {
        return setProduct(resp.data.respData);
      }
    )
  },[])
  return (
    <div>
      <pre>
        {JSON.stringify(product,null,2)}
      </pre>
    </div>
    )
}

export default App;