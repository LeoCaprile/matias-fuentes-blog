import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../constants'
import axios from 'axios'
import Post from './Post'
import PaginationButtons from './PaginationButtons'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  const getPosts = async () => {
    try {
      const fetchedData = await axios.get(fetchPosts())
      const { data } = fetchedData
      setPosts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      return [null, error]
    }
  }

  const getCurrentPosts = () => {
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    return currentPosts
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
      <section className='flex flex-col p-5 md:p-0 w-full'>

        <h1 className='font-bold text-3xl'>Ultimos posts</h1>
        <Post posts={getCurrentPosts()} loading={loading}></Post>
        <PaginationButtons setCurrentPage={setCurrentPage} postPerPage={postPerPage} totalPosts={posts.length} currentPage={currentPage}></PaginationButtons>
      </section>
  )
}

export default Posts
