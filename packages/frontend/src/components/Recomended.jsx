import React from 'react'

const Recomended = () => {
  return (
        <aside className='flex flex-col md:items-center p-5 md:p-0 gap-5 w-fit'>

            <h1 className='text-3xl font-bold'>Videos recomendados</h1>

            <iframe className='w-full md:w-80 h-48' src="https://www.youtube.com/embed/T_j60n1zgu0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className='w-full md:w-80 h-48' src="https://www.youtube.com/embed/DHjqpvDnNGE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
        </aside>)
}

export default Recomended
