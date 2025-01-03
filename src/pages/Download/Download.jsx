import React from 'react'
import { Downloads } from '../Data/Data'

const Download = () => {
  return (
    <section className='text-color-white py-12'>
      {/* <h2 className='text-center'>Faca o Download de seus Pacotes</h2> */}

      <div className='flex flex-col flex-wrap justify-center items-center'>

        {
            Downloads.map(download=>(
                <div key={download.id} className=' md:w-2/3'>
                    <img src={download.img} alt="carregando imagem" />
                    <h3 className='text-2xl text-center'>{download.descricao}</h3>
                    <div className='flex flex-wrap md:flex-row flex-col justify-around items-center py-2 gap-4'>
                    <button className='flex flex-wrap gap-1 justify-center items-center font-light md:px-4 px-10 py-2 rounded-md md:rounded-full bg-color-red'><span>{download.button1}</span> <span>{download.icon1}</span></button>
                    <button className='flex flex-wrap gap-1 justify-center items-center font-light md:px-4 px-10 py-2 rounded-md md:rounded-full bg-color-red'><span>{download.button2}</span> <span>{download.icon2}</span></button>
                    </div>
        
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Download
