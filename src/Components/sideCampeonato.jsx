import Link from 'next/link'
import './styleSideCam.css'
import Image from 'next/image'
export default function SideCampeonato() {
  const path = '/inicioSesion/organizador/campeonatos'
  const pathImg = '/image/IconosSide'
  return (
    <aside className="barraLateral">
    <ul className="lista">
        <div className={`contenedor `}>
          <Image src={`${pathImg}/estadistica.png`} className='img' width={35} height={35}></Image>
          <Link href={`${path}/estadisticas/tarde`} >Estadisticas</Link>
        </div>
        <div className='contenedor'>
          <Image src={`${pathImg}/cronograma.png`} className='img2' width={35} height={35}></Image>
          <Link href={`${path}/agregarCronograma`}>Agregar Cronograma</Link>
        </div>
        <div className='contenedor'>
          <Image src={`${pathImg}/verParticipantes.png`}className='img3' width={35} height={35}></Image>
          <Link href={`${path}/verParticipantes`}>Ver Participantes</Link>
        </div>
        <div className='contenedor'>
          <Image src={`${pathImg}/derrotero.png`}className='img4' width={35} height={35}></Image>
          <Link href={`${path}/derrotero`}>Derrotero</Link>
        </div>
        <div className='contenedor'>
          <Image src={`${pathImg}/campeonatos.png`}className='img5' width={35} height={35}></Image>
          <Link href={`${path}`}>Campeonatos</Link>
        </div >
    </ul>
  </aside>
  )
}
