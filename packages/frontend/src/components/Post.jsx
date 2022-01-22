import React from 'react'
import PropTypes from 'prop-types'
import javascript from '../assets/img/javascript.svg'
import react from '../assets/img/react.svg'
import node from '../assets/img/node-js.svg'
import Loader from './Loader'

const Post = ({ posts, loading }) => {
  const getPostTypeImg = (type) => {
    switch (type) {
      case 'javascript':
        return javascript
      case 'react':
        return react
      case 'node':
        return node
      default:
        return ''
    }
  }

  if (loading) {
    return <Loader></Loader>
  }

  return (
    posts.map(({ title, type, date }) => {
      return (
      <article key={title} className='flex cursor-pointer p-5 w-full gap-2 md:hover:bg-slate-100 group'>
        <img className='group-hover:scale-110 transition-all duration-200 ease-in-out' width='75' src={getPostTypeImg(type)}></img>
        <section className='flex flex-col w-fit break-word justify-between'>
        <header className='font-medium text-3xl'>{title}</header>
        <p className=''>{date}</p>
        </section>
      </article>
      )
    })

  )
}

Post.propTypes = {

  posts: PropTypes.array,
  loading: PropTypes.bool
}

export default Post
