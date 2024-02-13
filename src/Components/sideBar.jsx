import Link from 'next/link'
import './style.css'
export default function AsideBar() {
  const path= '/inicioSesion/organizador'
    return(
        <aside className="barraLateral">
          <ul className="lista">
            <Link href={`${path}/campeonatos`}>Campeonatos</Link>
            <Link href={`${path}/crearCampeonato`}>Crear Campeonatos</Link>
            <Link href={`${path}/fotos`}>Fotos</Link>
            <Link href={`${path}/cuenta`}>Cuenta</Link>
            <Link href={`${path}/salir`}>Salir</Link>
          </ul>
        </aside>
    )
}
