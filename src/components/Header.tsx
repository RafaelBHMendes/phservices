import React from 'react'
import { Link } from 'react-scroll'
import ThemeController from '../controllers/ThemeController'
import PHLogo from '../../public/PHLogo.png'

const Header: React.FC = () => {
  return (
    <header className='bg-base-100 shadow py-6 px-4 flex justify-between items-center transition-colors duration-300'>
      <div className='flex items-center space-x-1 gap-4'>
        <div className='ml-4'>
          <img src={PHLogo} alt='logo' height={80} width={80} className='rounded-badge' />
        </div>
        <div className='flex items-baseline space-x-1 text-center'>
          <Link to='home' smooth={true} duration={500} className='text-2xl font-bold header-logo text-primary cursor-pointer'>
            PH Serviços
          </Link>
        </div>
      </div>
      <nav className='flex items-center space-x-8'>
        <ul className='flex space-x-8'>
          <li>
            <Link to='home' smooth={true} duration={500} className='text-base-content hover:text-primary cursor-pointer'>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500} className='text-base-content hover:text-primary cursor-pointer'>
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link to='services' smooth={true} duration={500} className='text-base-content hover:text-primary cursor-pointer'>
              Serviços
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} className='text-base-content hover:text-primary cursor-pointer'>
              Contato
            </Link>
          </li>
        </ul>
        <ThemeController />
      </nav>
    </header>
  )
}

export default Header
