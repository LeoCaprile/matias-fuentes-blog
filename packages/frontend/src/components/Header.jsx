import React from 'react'
import { FiSearch, FiInstagram, FiGithub } from 'react-icons/fi'

const Header = () => {
  return (
    <div className=' border-b-2 shadow-md px-5 md:px-80 w-full flex md:justify-center justify-between items-center h-32 mt-0 '>
      <div className='flex items-center md:hover:scale-105 transition-all duration-200 cursor-pointer'>
      <figure className='flex items-center w-16 h-16 border-8 rounded-full border-green-500 justify-center'>
      <span className='block h-10 w-2 rounded-lg rotate-12 bg-green-800'></span>
      <span className='block h-10 w-2 rounded-lg -rotate-12 bg-green-500'></span>
      <span className='block h-10 w-2 rounded-lg rotate-12 bg-green-800'></span>
      <span className='block h-10 w-2 rounded-lg -rotate-12 bg-green-500'></span>
      </figure>
      <h1 className='text-3xl font-bold ml-2'>Matias Fuentes</h1>
      </div>

      <div className='md:flex hidden items-center ml-auto'>
      <FiSearch className='absolute top-14 ml-3'></FiSearch>
      <input className='h-10 pl-8 w-54 border-2 rounded-3xl outline-green-300' maxLength='50' type="text"/>
      </div>

      <div className='flex'>
      <FiInstagram className='ml-4 scale-150 cursor-pointer'></FiInstagram>
      <FiGithub className='ml-4 scale-150 cursor-pointer'></FiGithub>
      </div>

    </div>
  )
}

export default Header
