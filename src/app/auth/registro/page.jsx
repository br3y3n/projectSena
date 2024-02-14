import React from 'react';
import '../registro/styles.css';

export default function Registro() {
  return (
    <>
      <div className='mayor'>
        <h1 className='registro'>Registrate en GoSport</h1>
        
        <div className='divdatos'>
        <form action="datos">
          <label htmlFor="nombre">Nombres :</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombres" required />
          
          <label htmlFor="apellidos">Apellidos :</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese sus apellidos" required />

          <label htmlFor="telefono">Telefono :</label>
          <input type="number" id="telefono" name="telefono" placeholder="ej:3163221523" required />

          <label htmlFor="Genero">Genero :</label>
          <select name="ciudad" id="ciudad">
                    <option value="selecciona" disabled selected>selecciona</option>
                    <option value="Femenino" >Femenino</option>
                    <option value="medellin">Masculino</option>
                    <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                </select> 
          
          <br /> <br />
          <label for="">email: </label>
          <input type="email" name="email" id="email" placeholder="ej:pepito@gmail.com" />

          <label for="">contraseña</label>
          <input type="password" placeholder="***********" name="password" id="password"/>

          <label for="">Confirmar Contraseña</label>
          <input type="password" placeholder="***********" name="password" id="password"/>
            
        </form>
        </div>
      </div>
    </>
  );
}
