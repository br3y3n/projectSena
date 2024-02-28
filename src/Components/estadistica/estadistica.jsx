import '@/Components/estadistica/styleEstadistica.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Boton from '@/app/inicioSesion/organizador/crearCampeonato/Boton'

const path = '/inicioSesion/organizador/campeonatos/estadisticas/'
export const Estadistica = () => {
  return (
    <>
     
      <div className='contenedorPartido ' > 
      <div className=' contenedorImagen'>
          <Image src="/image/imageEstadistica/MILONARIOS.png" width={40} height={40} className='imagen ' />
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
      <div className=' contenedorImagen'>
          <Image src="/image/imageEstadistica/NACIONAL.png" width={40} height={40} className='imagen '/>
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
          <button className='botonDetalle'><Link href={`${path}/verDetalle`}>ver detalle</Link></button>
        </div>
    </div>
    </>
  )
}
