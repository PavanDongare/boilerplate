const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());



const data = new Array(20).fill(0).map((x,index)=>{ return {'name':'product '+index}})
//console.log(data);

//'/api/products?page=2&&limit=2'
app.get('/api/products',(req,res)=>{
    
    const  page=  Number(req.query.page);
    const  limit= Number(req.query.limit);
    const totalPages = Math.ceil(data.length/limit)

    const startIndex = (page-1)*limit
    const endIndex = (page-1)*limit+limit
    
    const respData = data.slice(startIndex,endIndex)
    console.log(respData);
    res.status(200).json({
      respData,
      meta:{
        page, limit , totalPages
      }
    })
})

app.use((req,res)=>{
  return res.status(404).json('API endpoint not found')
})

app.use((err,req,res,next)=>{
  res.status(500).json(`global error catchall ${err}`)
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});