// //  import Select from "./MySelect"
// import Calendarioo from "./Calendario"
import Boton from "./Boton"
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
                            <div class="contenedorFechas">
                                <Boton fechaText="Fecha de Inicio" />
                                <Boton fechaText="Fecha de finalizacion" />
                                </div>
                           
                        </fieldset>

                        <fieldset class="fieldset">
                            <legend class="legend">FECHAS CAMPEONATO</legend>
                            <div>
                                <Boton fechaText="Fecha de Inicio" />
                                <Boton fechaText="Fecha de Finalizacion" />
                                <div class="diasDefinidos">
                                    <p>Dias definidos</p>
                                    <button> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-cog" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg></button>
                                </div>
                            </div>

                        </fieldset>
                       
                        <fieldset class="fieldset">
                            <legend class="legend">LIMITE DE INTEGRANTES</legend>
                            <div class="selectores" >
                            <label>Cantidad minima</label>
                            <input class="minMax" type="number" name="cantidad" min= "0" max="20" step="1"/>
                            </div>
                            <div class="selectoresFinal" >
                            <label>Cantidad maxima</label>
                            <input class="minMax" type="number" name="cantidad" min= "0" max="20" step="1"/>
                            </div>
                        </fieldset>
                    </div>
                </div>

            </div>
        </>
    )

}