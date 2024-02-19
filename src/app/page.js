import Cards from "@/Components/cards";
import Header from "@/Components/header";
import './styleLanding.css'
import Link from "next/link";
import PLanilla from "@/Components/planilla/page";
export default function Home() {
  return (
    <main>
      {/* <h1>Landing Page</h1>
      <Link href={'/inicioSesion'}>Inicio Sesion</Link><br></br>
      <Link href={'/recuperarPassoword'}>Recuperar Contraeña</Link> */}
      <PLanilla  />
    </main>
  );
}

