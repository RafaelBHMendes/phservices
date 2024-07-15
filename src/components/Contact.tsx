import React from 'react'

const Contact: React.FC = () => {
  return (
    <div>
      <main className='container mx-auto p-4'>
        <h2 className='text-4xl font-bold text-center my-8'>Contato</h2>
        <form className='max-w-lg mx-auto'>
          <div className='form-control mb-4'>
            <label className='label'>
              <span className='label-text'>Nome</span>
            </label>
            <input type='text' placeholder='Seu nome' className='input input-bordered w-full' />
          </div>
          <div className='form-control mb-4'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input type='email' placeholder='Seu email' className='input input-bordered w-full' />
          </div>
          <div className='form-control mb-4'>
            <label className='label'>
              <span className='label-text'>Mensagem</span>
            </label>
            <textarea placeholder='Sua mensagem' className='textarea textarea-bordered w-full' />
          </div>
          <div className='form-control'>
            <button type='submit' className='btn btn-primary w-full'>
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Contact
