import Image from "next/image"
import Link from "next/link"
import './style.css'
export default function SideBarJugador() {
  return (
    <main className="content">
      <section className="sideBar">
        <Image src='/image/iconosSide/campeonatos.png' className="img" width={35} height={50}></Image>
        <Link href='/' className="text">Campeonatos Disponibles</Link>
        <Image src='/image/iconosSide/salir.png' className="img2" width={35} height={50}></Image>
        <Link href='/inicioSesion'>Salir</Link>
      </section>
      <article className="body">
        <section className="contentdiv">

      <div  className="div1 div"></div>
      <div className="div2 div"></div>
      <div className="div3 div"></div>
        </section>
        <section className="flex gap-10 border w-max h-max p-10">
        <div className="w-80 ">
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
          <h1 className="mt-5">Maximo de integrantes: 15</h1>
          <p className="">Fecha de inicio:   15/01/2024</p>
          <p className="mb-7">Fecha de finalizacion:   12/02/2024</p>

          <Link href='/inicioSesion/organizador/campeonatos/estadisticas'
            className="text-white text-2xl bg-red-500 p-2 rounded-md ">Incribirme</Link>
        </div>
        </section>
      </article>
   </main>
  )
}
