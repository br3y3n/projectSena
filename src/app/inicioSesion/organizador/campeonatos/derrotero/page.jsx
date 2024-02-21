import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
import Image from "next/image";
import './style.css'

export default function Derrotero() {
  return (
    <RootLayout>
        <SideCampeonato></SideCampeonato>
     
        <>
          <div class="fases-container">
            <div class="fase">
              <h2>Fase 1</h2>
              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>

                </div>
                <hr className="separator" />
              </div>


              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
                <hr className="separator" />
              </div>


              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>

              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>

            </div>


            <div class="fase">
              <h2>Fase 2</h2>
              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>


              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>


              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>

              <div class="fecha-hora">Fecha: 21/02/2024 - Hora: 15:00</div>
              <div class="encuentro">
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 1</p>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                  <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                  <p>Equipo 2</p>
                </div>
              </div>

            </div>
          </div>

        </>
    
      
    </RootLayout>
  )
}
