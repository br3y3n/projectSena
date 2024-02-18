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
                  <legend class="general" >General  </legend>
                    
                <div class="form-group"> 
                   <input className="input" type="text" placeholder="Nombre del campeonato"/> 
                   <label className="form-label">Ingrese nombre del campeonato</label>
                    
                </div>
                      
                <div class="form-group"> 
                   <input className="input" type="text" placeholder="Descripcion del campeonato"/> 
                   <label className="form-label">Descripcion del campeonato</label>
                    
                </div>
                <div class="selectores">
                    <p>Discipla</p>
                <ol>
                        <li>Futbol</li>
                        <li>Microfutbol</li>
                        <li>Futbol Sala</li>
                        <li></li>
                    </ol>     
                    </div>                    
                        </fieldset>
               
               
                        </div>
                          </div>

            </div>
        </>
    )

}