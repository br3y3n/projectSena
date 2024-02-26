import PageEstadisticas from '@/Components/estadistica/pageEstadistica'
import React from 'react'
import RootLayout from '@/app/layout'
import SideCampeonato from '@/Components/sideCampeonato'
import '@/app/inicioSesion/organizador/campeonatos/estadisticas/tarde/style.css'

export default function Tarde() {
  return (
    <>
      <RootLayout>
    
        <SideCampeonato></SideCampeonato>
        <div>
          <h1 className='jornada'>Tarde</h1>
          <PageEstadisticas />
        </div>
      
      </RootLayout>
    </>
  )
}

