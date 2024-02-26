import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
import "./Cronograma.css"
import ComponenteCronograma from './EditorCronograma'
// import Image from 'next/image'
export default function Cronograma() {
  return (
    <RootLayout>
        <SideCampeonato/>
      <div class="ContainerPrincipal">
        <header class="contenedorCronograma">
          <section class="Seccion">
            <select name="" id="">
              <option value="">Jornada Mañana</option>
              <option value="">Jornada Tarde</option>
            </select>
            </section>
            <section>
            <h1 class="texto">MAÑANA</h1>
            </section>
         
        </header>
        
        <div class="contendorEquipos">
        <ComponenteCronograma texto2={"Cali"} texto1={"Once Caldas"}
        imagen1={"./Image/descarga.svg"}
        imagen2={"/src/app/inicioSesion/organizador/campeonatos/agregarCronograma/Image/nacional.png"}
        />
        <ComponenteCronograma texto2={"Nacional"} texto1={"America"}
        imagen1={"./Image/descarga.svg"}
        imagen2={"/src/app/inicioSesion/organizador/campeonatos/agregarCronograma/Image/nacional.png"}
        />
          <ComponenteCronograma texto2={"Alemania"} texto1={"Francia"}
        imagen1={"./Image/descarga.svg"}
        imagen2={"/src/app/inicioSesion/organizador/campeonatos/agregarCronograma/Image/nacional.png"}
        />
          <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
        imagen1={"./Image/descarga.svg"}
        imagen2={"/src/app/inicioSesion/organizador/campeonatos/agregarCronograma/Image/nacional.png"}
        />
          <ComponenteCronograma texto2={"Colombia"} texto1={"Venezuela"}
        imagen1={"./Image/descarga.svg"}
        imagen2={"/src/app/inicioSesion/organizador/campeonatos/agregarCronograma/Image/nacional.png"}
        />

        </div>
        
      </div>

    </RootLayout>
  )
}
