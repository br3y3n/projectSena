"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Estadistica } from '@/Components/estadistica/estadistica.jsx'

import '@/Components/estadistica/stylePageEstadistica.css'

const path ='/inicioSesion/organizador/campeonatos/estadisticas'


export default function PageEstadisticas() {
  const router = useRouter()
  const handleChange = (event) => {
    const ruta = event.target.value;
    if (ruta) {
      router.push(ruta);
    }
  }
  return (
  
    <section className='contenedorEstadistica' >
      <select  className='btnJornada' onChange={handleChange} >Jornada
        <option value={`${path}/manana`} className='btnJornada' >Mañana</option>
        <option value={`${path}/tarde`} className='btnJornada' >Tarde</option>
        </select>
      <p className='tituloFase'>FASE 1</p>
      <div className='contenedorTitulos'>
        <h1 className='titulo tiEquipo'>Equipos</h1>
        <h1 className='titulo tiFalta'>Faltas</h1>
        <h1 className='titulo tiMarcador'>Marcador</h1>
        <h1 className='titulo tiEstado'>Estado partido</h1>
      </div>
     <div >
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />

     
      </div>
      <section>
        <div className='numeroFases'>
          FASE 2
        </div>
        <div className='numeroFases'>
          FASE 3
        </div>
        <div className='numeroFases'>
       FINAL
        </div>
      </section>

     </section>
   
  )
}
