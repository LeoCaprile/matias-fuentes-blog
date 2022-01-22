import React from 'react'
import Posts from '../components/Posts'
import Recomended from '../components/Recomended'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 md:mx-80 md:py-10'>
        <Posts></Posts>
        <Recomended></Recomended>
    </div>
  )
}

export default Home
