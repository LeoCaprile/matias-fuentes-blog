const fs = require('fs');
const path = require('path');
const matter =  require('gray-matter');

const root = process.cwd();

const getFiles = () => fs.readdirSync(path.join(root, 'posts'));

const getFileBySlug = async (slug) => {

  try{
  const  post = fs.readFileSync(path.join(root,'posts',`${slug}.mdx`),'utf-8');
  const  postObj = await matter(post)
  return [postObj,null];
  }
  catch (error){
    console.log(error)
    return[null,error]
  }
  
} 

module.exports = {getFiles, getFileBySlug}; 