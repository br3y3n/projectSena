"use client"
import React from 'react'
import { useState } from 'react';
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
  
      <section className='section' >
      <select  className='btnJornada' onChange={handleChange} >Jornada
        <option value={`${path}/manana`} className='btnJornada' >Mañana</option>
        <option value={`${path}/tarde`} className='btnJornada' >Tarde</option>
        </select>
        <p className='tituloFase'>FASE 1</p>
     
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />
          <Estadistica />

     


     </section>
   
  )
}
