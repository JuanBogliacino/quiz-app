import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imgs, questions } from '../../data'
import Question from '../components/Question'
import icono from '../assets/icono.png'

// Funcion para barajar las preguntas de cada categoria y también reducirla al numero de 5
const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5)
  return newArray.slice(0, 5)
}

const CategoryPage = () => {

  // Leer el parametro de la  URL
  const { category } = useParams()

  // const imgCategory = imgs.filter(img => img === `/src/assets/${category.toLocaleLowerCase()}.png`)
  
  const [questionFiltered, setQuestionFiltered] = useState(questions.filter(question => question.category === category))
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [activeQuiz, setActiveQuiz] = useState(false)

  useEffect(() => {
    const newQuestions = shuffleArray(questionFiltered)
    setQuestionFiltered(newQuestions)
  }, [])

  return (
    <div className='container flex flex-col items-center justify-center gap-10' style={{height: 'calc(100vh - 5rem)'}}>
      {activeQuiz ? (<Question
       filteredQuestion={questionFiltered[indexQuestion]} 
       setIndexQuestion={setIndexQuestion} 
       indexQuestion={indexQuestion} 
       questionFiltered={questionFiltered}
       setActiveQuiz={setActiveQuiz} />)
      : (
        <>
         <div className="flex flex-col gap-5">
          <h1 className='text-4xl text-gray-100 text-center font-bold py-4'>
            {category}
          </h1>

          <div className="flex justify-center items-center">
            <img src={icono} alt={category} className='w-72' />
          </div>
         </div>

         <button className="text-white bg-gray-900 py-2 rounded-1g font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900" onClick={() => setActiveQuiz(true)}>
          Iniciar Quiz
         </button>
        </>
      )}
    </div>
  )
}

export default CategoryPage