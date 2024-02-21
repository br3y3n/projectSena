import Image from "next/image";
import './styleListado.css';

export default function Listado() {
    return (
        <div className="General">
            <span className="close-btn">✖</span>
            <div className="team-list">
                <div className="team-member captain card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Luis Villa</h3>
                            <p>Contacto: 3123344789</p>
                            <p>Capitán</p>
                        </div>
                    </div>
                </div>
                <div className="team-member card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Alejandro Lara Sanchez</h3>
                        </div>
                    </div>
                </div>
                <div className="team-member card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Alejandro Lara Sanchez</h3>
                        </div>
                    </div>
                </div>
                <div className="team-member card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Alejandro Lara Sanchez</h3>
                        </div>
                    </div>
                </div>
                <div className="team-member card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Alejandro Lara Sanchez</h3>
                        </div>
                    </div>
                </div>
                <div className="team-member card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Alejandro Lara Sanchez</h3>
                        </div>
                    </div>
                </div>
                <div className="team-member card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Alejandro Lara Sanchez</h3>
                        </div>
                    </div>
                </div>
                <div className="team-member card">
                    <div className="member-info">
                        <div className="avatar">
                            <Image src="/image/imgParticipantes/millonarios.png" width={50} height={50} />
                        </div>
                        <div className="details">
                            <h3>Alejandro Lara Sanchez</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
