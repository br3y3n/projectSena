import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
import Image from "next/image";
import './style.css'
import Fases from '@/Components/Fases';


export default function Derrotero() {
  return (
    <RootLayout>
     

        <SideCampeonato></SideCampeonato>
        <div class="container">
          <div class="header">
            <div class="centered">
              <h2>Fase 1</h2>
              <div class="fecha">Fecha: 21/02/2024</div>
              <div class="hora">Hora: 15:00</div>
            </div>
          </div>

          <div class="fases-container">
            <div class="fase">
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>
            </div>

            <div class="fase">
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 3</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 4</p>
                </div>
              </div>
            </div>

            <div class="additional-info">

            </div>
          </div>
        </div>

        <div class="container">
          <div class="header">
            <div class="centered">
              <h2>Fase 1</h2>
              <div class="fecha">Fecha: 21/02/2024</div>
              <div class="hora">Hora: 15:00</div>
            </div>
          </div>

          <div class="fases-container">
            <div class="fase">
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>
            </div>

            <div class="fase">
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 3</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/img/millonarios.png" width={50} height={50} />
                  <p>Equipo 4</p>
                </div>
              </div>
            </div>


          </div>
      </div>
    <Fases></Fases>
    </RootLayout>
  )
}
