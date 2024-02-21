import Link from 'next/link'
import './style.css'
export default function InicioSesion() {
  return (
    <div>
    

      <div className="contenedor-login">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="campo">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="campo">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>



    </div>
  )
}
{/* <br></br>
        <section className='inicioSesion'>
        <Link href={'/inicioSesion/organizador/campeonatos'}>Organizador</Link><br></br>
        <Link href={'/inicioSesion/jugador'}>Jugador</Link> */}
