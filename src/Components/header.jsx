import Link from 'next/link'
import './styleHead.css'
export default function Header() {

    return (
        <>
            <header>
                <div className='containerPrincipal'>
                    <nav className='navLanding'>
                        <a href="">INICIAR SESIÓN</a>
                        <a href="">REGISTRARSE</a>
                        <a href="">EQUIPO BIENESTAR</a>
                        <a href="">CONTACTANOS</a>
                    </nav>
                </div>
               
            </header>
        
        </>

    )
}
