const fs = require('fs');
const path = require('path');
const matter =  require('gray-matter');
const root = process.cwd();

const getFiles = () => {
 const posts = fs.readdirSync(path.join(root, 'posts'));
 //leer solo los archivos con extension .mdx
 return posts.filter(file => path.extname(file) === '.mdx');
}

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

const getPostMetaData =  () => {
    const postsNames = getFiles();
    return postsNames.reduce( (allPosts, postSlug)=>{
      const post = fs.readFileSync(path.join(root,'posts',postSlug),'utf-8')
      const {data} = matter(post);
      allPosts.push(data);
      return allPosts
    },[]);
}

module.exports = {getFiles, getFileBySlug, getPostMetaData}; 