import '@/Components/styleEstadistica.css'
import React from 'react'
import Image from 'next/image'



export const Estadistica = () => {
  return (
    <>
    <div className='contenedorPartido ' > 
      <div className='imagen contenedor'>
        <Image src="/millonarios.png" width={50} height={50}  className='imagen'/>
        <p className='nombreEquipo'>Millonarios</p>
        </div>
          <div className='faltas'>

          </div>

    </div>
    <div className='contenedorPartido' >
      <div className='imagen contenedor'>
        <Image src="/nacional.png" width={50} height={50}  className='imagen'/>
        <p className='nombreEquipo'>Nacional</p>
        </div>

    </div>
    </>
  )
}
