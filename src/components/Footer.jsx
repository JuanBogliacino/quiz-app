import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-2 footer'>
        <h1 className='text-white text-2x1 font-bold'>Quiz App</h1>
        <p>Juan Bogliacino</p>
        <ul>
            <a href="https://github.com/JuanBogliacino" target='_blank'><li>perfil de GitHub</li></a>
            <a href="https://www.linkedin.com/in/juan-bogliacino-369b3026a/" target='_blank'><li>perfil de Linkedin</li></a>
        </ul>
    </footer>
  )
}

export default Footer