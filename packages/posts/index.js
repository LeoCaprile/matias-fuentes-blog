const express = require("express");
const cors = require('cors');
const {getFiles, getFileBySlug}  = require("./lib/mdx");
const { send, status } = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 5050


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hola')
  console.log(getFiles())
})

app.get('/:id', async (req,res)=>{

  const [data,error] = await getFileBySlug(req.params.id)

  if(error){return res.status(404).send('<h1>404. No se ha encontrado el post<h1>')}
  
  console.log('Se ha encontrado el post ' + data.data.title)
  res.status(200).json(data);
  
})


app.listen(PORT, ()=>{
  console.log('Listening on',PORT)
})
