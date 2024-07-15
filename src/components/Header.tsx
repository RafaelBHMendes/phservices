import React from 'react'
import { Link } from 'react-scroll'
import ThemeController from '../controllers/ThemeController'

const Header: React.FC = () => {
  return (
    <header className='bg-base-100 shadow py-6 px-4 flex justify-between items-center transition-colors duration-300'>
      <div className='flex items-baseline space-x-1'>
        <Link to='home' smooth={true} duration={500} className='text-2xl font-bold header-logo text-primary cursor-pointer'>
          PHD
        </Link>
        <Link to='home' smooth={true} duration={500} className='text-2xl header-tagline text-primary cursor-pointer'>
          esenrola
        </Link>
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
              About
            </Link>
          </li>
          <li>
            <Link to='services' smooth={true} duration={500} className='text-base-content hover:text-primary cursor-pointer'>
              Services
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} className='text-base-content hover:text-primary cursor-pointer'>
              Contact
            </Link>
          </li>
        </ul>
        <ThemeController />
      </nav>
    </header>
  )
}

export default Header
