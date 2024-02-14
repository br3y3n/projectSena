import AsideBar from "@/Components/sideBar";
import RootLayout from "@/app/layout";
import Link from "next/link";


export default function principal() {
  return (

    <RootLayout>

      <AsideBar></AsideBar>

      <section className="text-3xl">
        <h1>campeonatos disponibles ingresa para ver el resultado</h1>
        
        <Link href='/inicioSesion/organizador/campeonatos/estadisticas' className="text-red-600 text-2xl">ver progreso</Link> 

      </section>
    </RootLayout>


  )
}
