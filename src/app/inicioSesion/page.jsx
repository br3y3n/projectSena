import Link from 'next/link'
import './style.css'
export default function InicioSesion() {
  return (
    <div>
        page inicio sesion
        <br></br>
        <section className='inicioSesion'>
        <Link href={'/inicioSesion/organizador/campeonatos'}>Organizador</Link><br></br>
        <Link href={'/inicioSesion/jugador'}>Jugador</Link>
      </section>
    </div>
  )
}
