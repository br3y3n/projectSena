import PageEstadisticas from '@/Components/estadistica/pageEstadistica'
import React from 'react'
import '@/app/inicioSesion/organizador/campeonatos/estadisticas/manana/style.css'
import RootLayout from '@/app/layout'
import SideCampeonato from '@/Components/sideCampeonato'

export default function Manana() {
  return (
    <>
      <RootLayout>

        <SideCampeonato></SideCampeonato>
        <div className=''>
          <h1 className='jornada'>Mañana</h1>
          <PageEstadisticas />
        </div>
      </RootLayout>
    </>
  )
}
