import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:5001/api/products?page=${currPage}&limit=${limit}`).then((res) => {
      res.data.respData && setProduct(res.data.respData);
    })
  }, [currPage, limit]); // [] 1st, ' ' every, var - var change


  const onChangePage = (e) => {
    setCurrPage(Number(e.target.value))
  }

  const onChangeLimit = (e) => {
    setLimit(Number(e.target.value))
  }

  const Prev = () => {
    if (currPage > 1) {
      setCurrPage((val) => val - 1)
    }

  }
  const Next = () => {
  
      setCurrPage((val) => val + 1)
 

  }


  return (
    <div>

      {JSON.stringify(product, null, 2)}
      {currPage}

      <div className="flex justify-center bg-red-300 ">
        <div className=" bg-gray-200 " >
          {product.map((x) => {
            return <div className=' bg-green-300 flex justify-center  m-5  w-20 rounded-full'>{x.name}</div>
          })}
        </div>

      </div>

      <div className="flex justify-center">
        <div className="">
          <div>
            <input className="border-2 rounded-lg "
              type='number'
              value={currPage}
              onChange={onChangePage}
            ></input>
          </div>

          <button className="m-4 p-2 rounded-2" onClick={Prev}>Prev</button>
        </div>



        <div className="flex justify-center ">
          <div className=" bg-green">
            <div>
              <input className="border-2 rounded-lg"
                type='number'
                value={limit}
                onChange={onChangeLimit}
              ></input>
            </div>

            <button className="m-4 p-2 rounded-2" onClick={Next}>next</button>
          </div>

        </div>




      </div>

    </div>
  )
}

export default App;