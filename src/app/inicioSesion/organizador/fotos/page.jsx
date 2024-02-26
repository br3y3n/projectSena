import AsideBar from "@/Components/sideBar";
import RootLayout from "@/app/layout";
import Image from "next/image";
import './styleFotos.css'
export default function Fotos() {
  return (
    <RootLayout>
      <body className="principalFotos bg-gray-700">

    <AsideBar></AsideBar>

    <section className="body">
        <h1 className="textI">Comparte tus mejores momentos deportivos</h1>
      <article className="contenedorF">
        <div className="column1">
            <Image src={'/image/imgFotos/liverpool.png'} width={100} height={100}></Image>
           <figure className="text">Equipo ganador del campeonato interfichas <p className="textE">ADSO</p></figure> 
           
        </div>
        <div className="column2">
          <Image src={'/image/iconosSide/fotos.png'} width={50} height={50}></Image>
        </div>
      </article>
      <button className="boton">Publicar</button>
    </section>
      </body>
  </RootLayout>
  )
}
