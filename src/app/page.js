import Cards from "@/Components/cards";
import Header from "@/Components/header";
import './styleLanding.css'
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Landing Page</h1>
      <Link href={'/inicioSesion'}>Inicio Sesion</Link><br></br>
      <Link href={'/recuperarPassoword'}>Recuperar Contraeña</Link> 
    </main>
  );
}




export default function LandingPage() {
  return (
    <>

      <Header></Header>

      <section className='contenedorPage'>
        <h1>Crea campeonatos inolvidables. Dale vida a la competencia y eleva el espíritu deportivo.</h1>
        <h2>¿Estás listo para ser parte de la experiencia?</h2>


      </section>
      <button>¡Únete ahora!</button>

      <Cards></Cards>

    </>

  )
}




































/* <Link href={'/inicioSesion'}>Inicio Sesion</Link><br></br>
      <Link href={'/recuperarPassoword'}>Recuperar Contraeña</Link> */

/* 
        <main>
          <section>
            <h1>Crea campeonatos inolvidables. Dale vida a la competencia y eleva el espíritu deportivo.</h1>
            <h2>¿Estás listo para ser parte de la experiencia?</h2>
            <button>¡Únete ahora!</button>

          </section>

          <section>
            <h2>Domina la organización de tus torneos como nunca antes.</h2>
            <p>
              Bienvenido a nuestro exclusivo espacio para organizadores de campeonatos. En nuestro software, te ofrecemos la plataforma perfecta para dar vida a tus ideas y convertir tus campeonatos en experiencias inolvidables.
            </p>
            <ul>
              <li>
                <span></span>
                <h3>Facilidad de creación</h3>
                <p>Crea tu campeonato en minutos, sin necesidad de conocimientos técnicos.</p>
                
              </li>
              <li>
                <span></span>
                <h3>Personalización</h3>
                <p>Personaliza tu torneo con diferentes opciones de configuración.</p>
              </li>
              <li>
                <span></span>
                <h3>Promoción</h3>
                <p>Promociona tu campeonato a través de nuestras herramientas de marketing.</p>
              </li>
              <li>
                <span></span>
                <h3>Gestión</h3>
                <p>Gestiona todos los aspectos de tu torneo de forma sencilla y eficiente.</p>
              </li>
            </ul>
            <img src="/trophy.png" alt="Trofeo de fútbol" />
          </section>
        </main>

        <footer>
          <p>Copyright © 2023 GO SPORT</p>
        </footer>


        <div>
          <div>
            <button>X</button>
            <h1>¡Únete a GO SPORT!</h1>
            <p>
              Crea tu cuenta y comienza a organizar campeonatos increíbles. Disfruta de todas las ventajas que te ofrece nuestra plataforma.
            </p>
            <form>
              <input type="text" placeholder="Nombre completo" />
              <input type="email" placeholder="Correo electrónico" />
              <input type="password" placeholder="Contraseña" />
              <button type="submit">Registrarse</button>
            </form>
          </div>*/
>>>>>>> 9a8bebca56d6aef94fda9e4b90488997de92f2f2
