
import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
// import './styleIntegrantes.css'
import Listado from '@/Components/ListadoIntegrantes'
import Integrantes from '@/Components/cardIntegrantes'

export default function Participantes() {
  return (

    <RootLayout>
      
      <body className=" flex bg-gray-700 gap-16 ml-52">
    <SideCampeonato></SideCampeonato>
      <section>
        <Integrantes></Integrantes>
        <Listado></Listado>
      </section>
    </body>
    </RootLayout>
  
    
  )
}
