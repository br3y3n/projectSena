import SideCampeonato from '@/Components/sideCampeonato'
import RootLayout from '@/app/layout'
import '../../campeonatos/estadisticas/style.css'

const handleClick = () => {
return <h1>hola</h1>
}

export default function Estadisticas() {
  return (
    <RootLayout>
        <SideCampeonato></SideCampeonato>
      <section className='section'>
        <button className='btnJornada' onClick={handleClick()} >
          Jornada
        </button>

     </section>
    </RootLayout>
  )
}
