"use client"
import "../Cronograma.css"
import ComponenteCronograma from '../EditorCronograma'
import Image from 'next/image'
import React from 'react'
export default function Manana() {
    return (
        <>
        <section>
                <h1 class="texto">Mañana</h1>
            </section>
            <div class="contendorEquipos">

                <ComponenteCronograma texto2={"Cali"} texto1={"Once Caldas"}
                    imagen1={<Image src={'/image/Cronogramas/EscudoNacional.png'} />}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Nacional"} texto1={"America"}
                    imagen1={""}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Alemania"} texto1={"Francia"}
                    imagen1={""}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Millonarios"} texto1={"Pasto"}
                    imagen1={""}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Colombia"} texto1={"Venezuela"}
                    imagen1={""}
                    imagen2={""}
                />
                <ComponenteCronograma texto2={"Argetnina"} texto1={"Peru"}
                    imagen1={""}
                    imagen2={""}
                />
            </div>
        </>
    )
}