import '@/Components/styleEstadistica.css'
import React from 'react'
import Image from 'next/image'



export const Estadistica = () => {
  return (
    <>
      <div className='contenedorPartido ' > 
      <div className='imagen contenedor'>
          <Image src="/image/imageEstadistica/millonarios.png" width={60} height={100} className='imagen rounded-full' />
        <p className='nombreEquipo'>Millonarios</p>
        </div>
        <div className='faltas bg-yellow-500 '>
          <p>0</p>
        </div>
        <div className='faltas rojas bg-red-700 m-0'>
          <p>0</p>
        </div>
        <div className='marcador'>
        <p>2</p>
        </div>
        <div className='estadoPartido'>
          <p >terminado</p>
        </div>
        
    </div>
    <div className='contenedorPartido contepar' >
      <div className='imagen contenedor'>
          <Image src="/image/imageEstadistica/nacional.png" width={60} height={100} className='imagen rounded-full'/>
        <p className='nombreEquipo'>Nacional</p>
        </div>
        <div className='faltas bg-yellow-500 '>
          <p>0</p>
        </div>
        <div className='faltas rojas bg-red-700 m-0'>
          <p>0</p>
        </div>
        <div className='marcador'>
          <p>2</p>
        </div>
        <div className='estadoPartido contenedorBoton'>
          <button className='botonDetalle' >ver detalle</button>
        </div>
    </div>
    </>
  )
}
