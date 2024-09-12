import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import ServiceCard from './ServiceCard'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'

import alquimia from '../../public/alquimia.png'
import taxi from '../../public/taxi.jpeg'
import pc from '../../public/pc.png'
import iptv from '../../public/iptv.png'

const services = [
  {
    name: 'Computadores',
    link: 'https://api.whatsapp.com/send?phone=558896700101',
    image: pc,
    description: 'Serviços de venda e manutenção de computadores.'
  },
  {
    name: 'Táxi',
    link: 'https://api.whatsapp.com/send?phone=558892676242',
    image: taxi,
    description: 'Serviço de táxi disponível 24 horas.'
  },
  {
    name: 'Jóias (alquimia sobral)',
    link: 'https://www.instagram.com/alquimiasobral/',
    image: alquimia,
    description: 'Jóias exclusivas e personalizadas.'
  },
  {
    name: 'IPTV (Top TV)',
    link: 'https://sites.google.com/view/toptvdigital/p%C3%A1gina-inicial',
    image: iptv,
    description: 'Os melhores canais de TV via internet.'
  }
]

const Home: React.FC = () => {
  return (
    <div id='home'>
      <Header />
      <HeroSection />
      <main className='container mx-auto p-4'>
        <section id='about' className='my-8'>
          <About />
        </section>
        <h2 className='text-4xl font-bold text-center my-8' id='services'>
          Serviços
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map(service => (
            <ServiceCard key={service.name} name={service.name} link={service.link} image={service.image} description={service.description} />
          ))}
        </div>
        <section id='contact' className='my-8'>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
