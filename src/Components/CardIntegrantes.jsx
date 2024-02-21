import './styleCardIntegrantes.css'
import Image from "next/image"
export default function Integrantes() {
    return (
        <div className="container">

            <div className="card">
                <h2 className="teamName">Equipo Millonarios</h2>
                <div className="teamImage">
                    <Image src="/image/imgParticipantes/millonarios.png" width={200} height={100} />
                </div>
                <button className="btn">Ver Participantes</button>
            </div>

        </div>
    );
}

