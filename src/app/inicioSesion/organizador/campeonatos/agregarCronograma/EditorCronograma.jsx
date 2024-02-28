import Image from 'next/image'
import "./Cronograma.css"
import React from 'react'
export default function ComponenteCronograma({  imagen2, texto1, texto2 }) {
    return (
        <>
        
            
            <div class="principalEquipos">
                
                <div class="contenedorCard">
                    <section class="seccion1">
                        <span class="equipos">
                            <Image src="/image/Cronogramas/EscudoNacional.png" width={40} height={50} />
                            <p>{texto1}</p>
                        </span>
                        <span class="equipos">
                            <Image src={imagen2} width={40} height={50} />
                            <p>{texto2}</p>
                        </span>
                    </section>
                    <section class="seccion2">
                        <p >Detalles</p>
                        <span>
                            <label>Hora:</label>
                            <input type="text" />
                        </span>
                        <span>
                            <label>Fecha:</label>
                            <input type="text" />
                        </span>
                    </section>
                </div>
            </div>
        </>
    )
}