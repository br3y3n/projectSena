import AsideBar from "@/Components/sideBar";
import RootLayout from "@/app/layout";
import Link from "next/link";
import './style.css'


export default function principal() {
  return (

    <RootLayout>

      <AsideBar></AsideBar>

      <section className="body">
        <article className="flex gap-20 ">
          <div className="h-40 w-40 bg-white rounded-lg"></div>
          <h1 className="w-96 text-2xl">¡Bienvenido a <p className="text-4xl font-bold">GoSport</p>
            lugar para crear y gestionar tus
            campeonatos de fútbol!</h1>
        </article>

        <article className="flex gap-10 border m-10 p-4 rounded-lg w-max">
          <div className="w-80">
            <h1 className="font-bold">Torneo del Ascenso Dorado</h1>
            <p className="text-xl">El torneo del Ascenso Dorado
              no es solo un torneo;es una
              oportunidad para elevarse
              por encima de las adversidades,
              ¿Tienes lo necesario para
              enfrentarte y emerger
              como un campeón?
              Inscríbete y prepárate</p>
          </div>

          <div className="">
            <h1 className="font-bold">Progreso</h1>
            <section className="bg-white rounded-lg text-end mt-7">
              <h1>0%</h1>
            </section>
            <p className="mt-7">Fecha de inicio:   15/01/2024</p>
            <p className="mb-7">Fecha de finalizacion:   12/02/2024</p>

            <Link href='/inicioSesion/organizador/campeonatos/estadisticas/tarde'
              className="text-white text-2xl bg-red-500 p-2 rounded-md ">Editar</Link>
          </div>
        </article>
        
      </section>
    </RootLayout>


  )
}
