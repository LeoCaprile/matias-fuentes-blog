const express = require("express");
const cors = require('cors');
const app = express();
const posts = require('./routes/posts');
const PORT = process.env.PORT || 5050


app.use(cors());
app.use(express.json());
app.use('/posts',posts)


app.all('*', (req,res)=>{
  res.status(404).send('<h1>404. Ruta no encontrada.</h1>')
})

app.listen(PORT, ()=>{
  console.log('Listening on',PORT)
})
