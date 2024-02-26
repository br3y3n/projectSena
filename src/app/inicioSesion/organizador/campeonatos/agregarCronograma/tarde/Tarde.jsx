import ComponenteCronograma from "../EditorCronograma"

export default function tarde() {
    return (
        <>
            <div class="contendorEquipos">
                <ComponenteCronograma
                    TituloJornada={'Tarde'} imagen1={''}
                    texto1={'Cali'} texto2={'Nacional'}></ComponenteCronograma>
                <ComponenteCronograma
                    imagen1={''}
                    imagen2={'/public/image/Cronogramas/EscudoNacional.png'}
                    texto1={'Pasto'} texto2={'Bogota'}></ComponenteCronograma>
                <ComponenteCronograma
                    imagen1={''}
                    imagen2={'/public/image/Cronograma/EscudoNacional.png '}
                    texto1={'Colombia'} texto2={'Puerto Rico'}></ComponenteCronograma>
                <ComponenteCronograma
                    imagen1={''}
                    imagen2={'/public/image/Cronograma/EscudoNacional.png '}
                    texto1={'Millnarios'} texto2={'Nacional'}></ComponenteCronograma>
                <ComponenteCronograma
                    imagen1={''}
                    imagen2={'/public/image/Cronograma/EscudoNacional.png '}
                    texto1={'Argentina'} texto2={'Peru'}></ComponenteCronograma>
            </div>
        </>
    )
}