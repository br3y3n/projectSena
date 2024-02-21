import React from 'react';
import '../registro/styles.css';

export default function Registro() {
  return (
    <div className='mayor'>
      <h1 className='registro'>Registrate en GoSport</h1>
        
      <div className='divdatos'>
        <form action="datos">
          <label htmlFor="nombre">Nombres :</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required />
          
          <label htmlFor="apellidos">Apellidos :</label>
          <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos" required />

          <label htmlFor="telefono">Telefono :</label>
          <input className='la' type="tel" id="telefono" name="telefono" placeholder="ej:3163221523" required />

          <label htmlFor="genero">Genero :</label>
          <select name="genero" id="genero">
            <option value="selecciona" disabled defaultValue>selecciona</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
          </select>
          
          <br />
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" placeholder="ej:pepito@gmail.com" required />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="***********" required />

          <label htmlFor="confirmar-password">Confirmar Contraseña</label>
          <input type="password" id="confirmar-password" name="confirmar-password" placeholder="***********" required />

          <div className='divre'>
            <button   type="submit" className='registros'>Registrarse</button>

            
          </div>
          <h1 className='cuenta'>¿Ya tienes cuenta? <a href="https://www.youtube.com/watch?v=-5r7yM3VdS0&ab_channel=EVANGOA%E2%84%A2">Inicia sesion</a>
          </h1> 
  
          

         
        </form>
      </div>
    </div>
  );
}