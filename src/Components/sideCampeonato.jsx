import Link from 'next/link'
import './styleSideCam.css'
export default function SideCampeonato() {
    const path= '/inicioSesion/organizador/campeonatos'
  return (
    <aside className="barraLateral">
    <ul className="lista">
      <Link href={`${path}/estadisticas`}>Estadisticas</Link>
      <Link href={`${path}/agregarCronograma`}>agregar Cronograma</Link>
      <Link href={`${path}/verParticipantes`}>Ver participantes</Link>
      <Link href={`${path}/derrotero`}>derrotero</Link>
      <Link href={`${path}`}>Campeonatos</Link>
    </ul>
  </aside>
  )
}
