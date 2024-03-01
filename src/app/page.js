import Cards from "@/Components/cards/cards";
import Header from "@/Components/header";
import './styleLanding.css'
import Subcard from "@/Components/cards/subcard";





export default function LandingPage() {
  return (
    <>

      <div class="Conten">
        <Header />

        <div class="Sub-cont">
          <p class="cont-p">Crea campeonatos inolvidables. ¡Dale vida a la competencia
            y eleva el espíritu deportivo! ¿Estás listo para ser parte
            de la experiencia? </p>
          <button class="cont-boton"
            type="submit">¡Unete ahora!</button>
        </div>
        <div class="photo">
          <img class="photo-1"
            src="\image\imgLanding\futbol-sala.png" alt="" />
          <img class="photo-2"
            src="\image\imgLanding\section1.png" alt="" />
        </div>
      </div>


      <section class="section-2">
        <h2 class="title">PARA ORGANIZADORES</h2>

        <p class="title-2">Domina la organización de tus torneos como  nunca antes</p>

        <p class="title-3">¡Bienvenido a nuestro exclusivo espacio para organizadores de campeonatos!
          En nuestro software, te ofrecemos la plataforma perfecta para dar vida a
          tus ideas y convertir tus campeonatos en experiencias inolvidables.
          ¿Por qué unirte a nosotros? Aquí tienes algunas razones irresistibles:
        </p>
      </section >
      <Cards />


      <div class="boton-footer" >
        <p>¡Inicia sesión ahora y sé parte de la revolución en la organización de campeonatos!</p>
        <div>
          <button type="submit">Iniciar Secion</button>
        </div>
      </div>

      <section class="section-player">
        <h2 class="title">PARA JUGADORES</h2>

        <p class="title-2">Conviértete en campeón: Regístrate para participar de campeonatos exclusivos.</p>

        <p class="title-3">¡Sumérgete en la acción y vive la pasión de cada campeonato en nuestra
          plataforma diseñada para verdaderos amantes del juego! ¿Por qué deberías unirte a nosotros?
          Aquí tienes razones irresistibles:
        </p>
      </section>
      <Subcard />
      <section class="section-3">
        <div class="flex flex-col Bienestar">
          <h1 class="section-3-h1">Equipo Bienestar al Aprendiz</h1>
          <h5 class="section-3-h5"> ¿Quiénes somos?</h5>
          <p class="section-3-p">Equipo encargado de gestionar y realizar acciones para el bienestar
            de sus aprendices en el marco de los planes, politicas y normativas
            institucionales.
          </p>

          <div class="flex flex-row gap-10 mt-10">
            <div className="w-1/2 text-center">
              <img className="h-98 rounded"
                src="\image\BienesApren\TeamAp.jpg" alt="" />
            </div>

            <div className="flex gap-6 w-2/5 flex-col section-3-p3">
              <h4 class="section-3-p2 flex ">Nuestro propósito</h4>
              <p class="">"Promover la inclusión y la diversidad a través del deporte, creando espacios donde
                todas las personas, independientemente de sus capacidades físicas o condiciones socioeconómicas, puedan participar
                y disfrutar de los beneficios del ejercicio físico, fortaleciendo así la cohesión social y el respeto mutuo."</p>
            </div>
          </div>

          <div className="flex flex-row mt-10 gap-6 section-3-p4">
            <div className=" w-1/2">
              <h4 class="section-3-p2 flex ">GoSport DG</h4>
              <p class="section-3-pp ">Uno de nuestros propósitos es fomentar la practica del deporte y la actividad
                fisica para el desarrollo de habitos de vida saludable, el adecuado uso del tiempo
                libre y el desarrollo de habilidades socioemocionales apoyando al proceso de formacion
                integral.</p>

              <div class="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
              </div>
            </div>

            <div className="w-1/2">
              <img className="rounded"
                src="\image\BienesApren\Colombia.jpg" alt="" />
            </div>

          </div>
        </div>
      </section>


      <section class="section-4">

        <div className="section-4-h3">
          <h3>Contactanos</h3>
        </div>

        <div className="flex">

          <div className="flex flex-col w-1/2">
            <div className="flex flex-row mb-6">
              <img className="w-10 h-10"
                src="https://icon-library.com/images/message-icon-png/message-icon-png-1.jpg" alt="img" />
              <p className="pl-8">ServicioCliente@gmail.com</p>
            </div>
            <div className="flex flex-row mb-6">
              <img className="w-10 h-10"
                src="https://policiadesantacruz.gob.ar/images/Contenido/ico-direccion.png" alt="img" />
              <p className="pl-8">CTPI Nte</p>
            </div>
            <div className="flex flex-rowm mb-6">
              <img className="w-10 h-10"
                src="https://image.pngaaa.com/87/1359087-middle.png" alt="img" />
              <p className="pl-8">0180004578</p>
            </div>
          </div>


          <div class="w-96 max-w-[300px] bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Contactanos</h2>

            <form class="flex flex-col">
              <input type="text" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Nombre" />
              <input type="email" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Correo" />


              <textarea name="message" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Mensage"></textarea>

              <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Enviar</button>
            </form>

          </div>
        </div>

      </section >





    </>


  );
}



































