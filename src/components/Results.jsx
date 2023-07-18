import React from 'react'

const Results = ({ questionFiltered, score, onReset }) => {
  return (
        <div className='flex flex-col justify-evenly items-center shadow-x1 rounded-lg w-[600px] h-[600px] gap-5'>
            <h1 className='text-4xl font-bold'>Resultados</h1>

            <div className='flex flex-col gap-5 text-center text-lg font-bold'>
                <span>Acertaste</span>
                <span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>
                    {((score / questionFiltered.length) * 100).toFixed(0)}%
                </span>
                de las preguntas ({score} de {questionFiltered.length})
            </div>

            <button style={{padding: '5px 10px'}} className='text-white bg-gray-900 py-2 rounded-1g font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900' onClick={onReset}>
                Volver a jugar
            </button>
        </div>
  )
}

export default Results