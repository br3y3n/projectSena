import React from 'react'
import RootLayout from '@/app/layout'
import '@/app/inicioSesion/organizador/campeonatos/estadisticas/verDetalle/style.css'
import Image from 'next/image'
export default function VerDetalle() {
  
  return (
    <>
      <RootLayout>
        <section className='contenedorDetalle'>
          <div className='contenedorEquipo'>

            <Image src="/image/imageEstadistica/nacional.png" width={1000} height={1000} className='imageEquipo' />
            <h1 className='nombreEquipo'>Nacional</h1>
            <div className='contenedorFaltas'>
          <p className='nombreFalta'> Cristian Castro</p>
         <div className='falta'> </div>
            </div>
          </div>
          <div className='marcador'>
            <h1 className='numeroMarcador'>2</h1>
            <h3 className='numeroMarcador'>-</h3>
            <h1 className='numeroMarcador'>1</h1>
          </div>
          <div className='contenedorEquipo'>

            <Image src="/image/imageEstadistica/millonarios.png" width={1000} height={1000} className='imageEquipo' />
            <h1 className='nombreEquipo'>Nacional</h1>
            <div className='contenedorFaltas'>


              <p className='nombreFalta'> Cristian Castro</p>
              <div className='falta'> </div>
            </div>
          </div>

       </section>
    </RootLayout >
    </>
  )
}
