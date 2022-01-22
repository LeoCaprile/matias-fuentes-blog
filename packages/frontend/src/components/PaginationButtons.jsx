import React from 'react'
import PropTypes from 'prop-types'

const PaginationButtons = ({ setCurrentPage, currentPage, totalPosts, postPerPage }) => {
  const pagelimit = totalPosts / postPerPage
  return <div className='flex gap-5'>
        {currentPage > 1 ? <a className='font-bold text-blue-500 cursor-pointer' onClick={() => { setCurrentPage(currentPage - 1) }}>← Posts más recientes</a> : ''}
        {pagelimit > currentPage ? <a className='font-bold text-blue-500 cursor-pointer' onClick={() => { setCurrentPage(currentPage + 1) }} >Posts anteriores →</a> : ''}
        </div>
}

PaginationButtons.propTypes = {

  currentPage: PropTypes.number,
  totalPosts: PropTypes.number,
  postPerPage: PropTypes.number,
  setCurrentPage: PropTypes.func
}

export default PaginationButtons
