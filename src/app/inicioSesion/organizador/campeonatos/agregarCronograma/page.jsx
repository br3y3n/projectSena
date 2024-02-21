import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'


export default function Cronograma() {
  return (
    <RootLayout>
        <SideCampeonato/>
      <div class="ContainerPrincipal">
        <header class="contenedor Cronograma">
          <section class="Seccion">
            <select name="" id="">
              <option value="">Jornada Mañana</option>
              <option value="">Jornada Tarde</option>
            </select>
            <h1>Mañana</h1>
         </section>
        </header>
        <div>

        </div>
        
      </div>

    </RootLayout>
  )
}
