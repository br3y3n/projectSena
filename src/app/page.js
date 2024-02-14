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
