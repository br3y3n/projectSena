import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
import "./Cronograma.css"
import JornadaTarde from './tarde/Tarde'
import JornadaMañana from './manana/Mañana'
import { useRouter } from 'next/navigation';
const path = "/inicioSecion/organizador/campeonatos/agregarCronogramas/"
export default function Cronograma() {
  const router = useRouter();
  const handleChange = (event) => {
    rutas = event.target.value;
    if (rutas)
      router.push(rutas)
  }
  return (
    <RootLayout>

      <SideCampeonato />
      <div class="ContainerPrincipal">
        <div class="contenedorCronograma">
          <select name="" id="" onChange={handleChange}>
            <option value={`${path}/manana`}>Jornada Mañana
            </option>
            <option value={`${path}/tarde`}>Jornada Tarde</option>
          </select>
        </div>
        <JornadaTarde />
        <JornadaMañana />
      </div>

    </RootLayout>
  )
}


