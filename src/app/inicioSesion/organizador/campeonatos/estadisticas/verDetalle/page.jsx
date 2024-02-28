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

            <Image src="/image/imageEstadistica/nacional.png" width={500} height={500} className='imageEquipo' />
            <h1 className='nombreEquipo'>Nacional</h1>
            <div className='contenedorFaltas'>
              <table>
                <tr className='columnas'>
                  <th><div className='falta amarilla'> </div></th>
                  <th><div className='falta roja'> </div></th>
                  <th><Image src='/image/imageEstadistica/balon.png' width={55} height={55} /></th>
                </tr>
              </table>
            </div>
          </div>
          <div className='marcador'>
            <h1 className='numeroMarcador'>2</h1>
            <h3 className='numeroMarcador'>-</h3>
            <h1 className='numeroMarcador'>1</h1>
          </div>
          <div className='contenedorEquipo'>

            <Image src="/image/imageEstadistica/MILONARIOS.png" width={500} height={500} className='imageEquipo' />
            <h1 className='nombreEquipo'>Millonarios</h1>
            <div className='contenedorFaltas'>
              <table>
                <tr className='columnas'>
                  <th><div className='falta amarilla'> </div></th>
                  <th><div className='falta roja'> </div></th>
                  <th><Image src='/image/imageEstadistica/balon.png' width={55} height={50} /></th>
                </tr>
</table>


            </div>
          </div>

       </section>
    </RootLayout >
    </>
  )
}
