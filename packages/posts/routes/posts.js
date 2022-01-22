const router = require('express').Router();
const {getFileBySlug, getPostMetaData, getFiles}  = require('../lib/mdx');

router.get('/',async (req,res)=>{

 const posts = await getPostMetaData();
 if(posts.length === 0) return res.status(200).json({error:'Aun no se han creado posts'});
  
 res.status(200).json(posts)
 console.log('Se han requerido los posts')
})

router.get('/:id', async (req,res)=>{

  const [data,error] = await getFileBySlug(req.params.id)

  if(error){return res.status(404).json({error:'404. No se ha encontrado el post'})}
  
  console.log('Se ha encontrado el post ' + data.data.title)
  res.status(200).json(data);
  
})

module.exports = router;