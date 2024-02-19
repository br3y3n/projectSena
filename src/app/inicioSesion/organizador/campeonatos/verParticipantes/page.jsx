import Integrantes from '@/Components/Integrantes'
import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'

export default function Participantes() {
  return (

   
    <RootLayout>
    <SideCampeonato></SideCampeonato>
      <section>
        <Integrantes />
      </section>
     
    </RootLayout>
  
    
  )
}
