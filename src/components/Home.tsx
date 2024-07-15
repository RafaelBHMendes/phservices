import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import ServiceCard from './ServiceCard'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'

const services = [
  {
    name: 'Computadores',
    link: 'https://computadores.seudominio.com',
    image: 'https://via.placeholder.com/400x200', // Substitua por uma URL real
    description: 'Serviços de venda e manutenção de computadores.'
  },
  {
    name: 'Táxi',
    link: 'https://taxi.seudominio.com',
    image: 'https://via.placeholder.com/400x200', // Substitua por uma URL real
    description: 'Serviço de táxi disponível 24 horas.'
  },
  {
    name: 'Jóias (alquimia Brazil)',
    link: 'https://joias.seudominio.com',
    image: 'https://via.placeholder.com/400x200', // Substitua por uma URL real
    description: 'Jóias exclusivas e personalizadas.'
  },
  {
    name: 'Veículos e serviços',
    link: 'https://veiculos.seudominio.com',
    image: 'https://via.placeholder.com/400x200', // Substitua por uma URL real
    description: 'Compra e venda de veículos novos e usados.'
  },
  {
    name: 'Caixa aqui',
    link: 'https://caixaaqui.seudominio.com',
    image: 'https://via.placeholder.com/400x200', // Substitua por uma URL real
    description: 'Serviços bancários rápidos e práticos.'
  },
  {
    name: 'IPTV (Top TV)',
    link: 'https://iptv.seudominio.com',
    image: 'https://via.placeholder.com/400x200', // Substitua por uma URL real
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
