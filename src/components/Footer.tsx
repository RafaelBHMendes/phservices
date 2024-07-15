import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 mt-8'>
      <div className='container mx-auto text-center'>
        <p>&copy; 2024 PH Desenrola. Todos os direitos reservados.</p>
        <p>
          <a href='/privacy' className='text-gray-400 hover:text-white'>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href='/terms' className='text-gray-400 hover:text-white'>
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
