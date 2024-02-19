import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
import '../../campeonatos/estadisticas/style.css'
import{Estadistica} from '@/Components/estadistica.jsx'
import React from 'react'


export default function Estadisticas() {
  return (
    <RootLayout>
        <SideCampeonato></SideCampeonato>
      <section className='section'>
        <select name="" id="" className='btnJornada'>Jornada
          <option value="">Mañana</option>
          <option value="">Tarde</option>
        </select>
        <Estadistica/>

     </section>
    </RootLayout>
  )
}
