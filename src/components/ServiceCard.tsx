import React from 'react'

interface ServiceCardProps {
  name: string
  link: string
  image: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, link, image, description }) => {
  return (
    <div className='card bg-white shadow-xl transition transform hover:scale-105 w-80 h-96 mb-6 ml-20'>
      <figure className='h-1/2'>
        <img src={image} alt={name} className='w-full h-full object-cover' />
      </figure>
      <div className='card-body p-4 flex flex-col justify-between h-1/2'>
        <h2 className='card-title text-xl font-bold'>{name}</h2>
        <p className='text-gray-700 mb-4 flex-grow'>{description}</p>
        <div className='card-actions justify-end'>
          <a href={link} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            Visitar
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
