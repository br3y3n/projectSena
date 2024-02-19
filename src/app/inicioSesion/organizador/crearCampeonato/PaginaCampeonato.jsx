//  import Select from "./MySelect"
import Calendarioo from "./Calendario"
export default function PaginaCampeonato() {
    return (
        <>
            <div class="contendorPrincipalFormulario">
                <div class="contenedorCrearCampeonato">
                    <section class="seccionText">
                        <div class="div">
                            <h1 class="h1">
                                <span class="spanText">CREA TU CAMPEONATO</span>
                            </h1>
                        </div>
                    </section>
                    <div class="Formulario">
                        <fieldset class="fieldset">
                            <legend class="legend" >GENERAL </legend>
                            <div class="form-group">
                                <input type="text" placeholder="Nombre del campeonato" />
                                <label className="form-label">Ingrese nombre del campeonato</label>
                            </div>
        
                            <div class="form-group">
                                <input type="text" placeholder="Descripcion del campeonato" />
                                <label className="form-label">Descripcion del campeonato</label>
                            </div>
                            <div>
                                {/* <Select />  */}
                               
                                <div className="selectores">
                                    <p>Disciplina</p>
                                    <select>
                                        <option class="opcionesSelector" selected disabled hidden value="">Seleccione</option>
                                        <option>Futbol</option>
                                        <option>Futbol sala</option>
                                        <option>Microfutbol</option>
                                    </select>
                                </div>
                                <div className="selectores">
                                    <p>Categoria</p>
                                    <select>
                                    <option class="opcionesSelector" selected disabled hidden value="">Seleccione</option>
                                    <option>Femenino</option>
                                    <option>Masculino</option>
                                    <option>Mixto</option>
                                    </select>
                                </div>
                                <div className="selectoresFinal">
                                    <p>Modalidad</p>
                                    <select>
                                        <option class="opcionesSelector" selected disabled hidden value="">Seleccione</option>
                                        <option>Interfichas</option>
                                        <option>Relampago</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="fieldset">
                            <legend class="legend">FECHAS DE INSCRIPCIONES</legend>
                           
                                <Calendarioo />
                           
                        </fieldset>

                    </div>
                </div>

            </div>
        </>
    )

}