
import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
// import './styleIntegrantes.css'
import Listado from '@/Components/ListadoIntegrantes'
import Integrantes from '@/Components/cardIntegrantes'

export default function Participantes() {
  return (

    <RootLayout>
    <SideCampeonato></SideCampeonato>
      <section>
        <Integrantes></Integrantes>
        <Listado></Listado>
      </section>
     
    </RootLayout>
  
    
  )
}
