import React from 'react'
import '../index.css'

const HeroSection: React.FC = () => {
  return (
    <section className='bg-hero-pattern bg-cover bg-center h-96 flex items-center justify-center text-white'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-4'>
          <span className='header-logo'>PHD</span>
          <span className='header-tagline'>esenrola</span>
        </h1>
        <p className='text-xl mb-8'>Encontre os melhores serviços em um só lugar</p>
        <a href='#services' className='btn btn-primary'>
          Veja nossos serviços
        </a>
      </div>
    </section>
  )
}

export default HeroSection
