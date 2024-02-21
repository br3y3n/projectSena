import Link from 'next/link'
import './style.css'
export default function InicioSesion() {
  return (
    <div className='mayor'>
      <h1>Inicio se sesion</h1>
      <br /> <br />


      <div className='datos'>
        <form action="datos">
          <label htmlFor="email">correo electronico</label>
          <input type="email" id="email" name="email" placeholder="ej:pepito@gmail.com" required/>

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="***********" required />


          <br />
          <button>Inicio de sesion</button>

          <h1> ¿No tienes cuenta? <Link href="/auth/registro">Registrate</Link></h1>
        </form>

      </div>

    </div>
  )
}
{/* <br></br>
        <section className='inicioSesion'>
        <Link href={'/inicioSesion/organizador/campeonatos'}>Organizador</Link><br></br>
        <Link href={'/inicioSesion/jugador'}>Jugador</Link> */}
