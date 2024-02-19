import React from 'react';
import './main.css'

export default function Planilla() {
    const filas = [];
    for (let i = 1; i <= 10; i++) {
        filas.push(
            <tr key={i}>
                <td className='bg-gray-700'>{i}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }

    return (
        <div>
            <div className='container'>

                <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm w-10/12">
                    <h2 className="text-black font-bold text-lg">Planilla Inscripcion Equipo</h2>

                    <div className="mt-4">
                        <label className="text-black" htmlFor="name">Nombre Equipo</label>
                        <input className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
                    </div>

                    <div className="mt-4">
                        <label className="text-black" htmlFor="address">Nombre Capitan</label>
                        <input className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="address" />
                    </div>

                    <div className="mt-4 flex flex-row space-x-2 ">
                        <div className="flex-1">
                            <label className="text-black" htmlFor="city">Contacto</label>
                            <input placeholder="Principal" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="city" type="text" />
                        </div>

                        <div className="flex-1">
                            <label className="text-black" htmlFor="state">ㅤ</label>
                            <input placeholder="Secundario" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="state" type="text" />
                        </div>
                    </div>

                </div>

                <div className="mt-4 table-container tabla w-10/12">
                    <table border="1">
                        <thead>
                            <tr>
                                <th className='bg-gray-700 w-10'>N°</th>
                                <th className='bg-gray-700'>Nombre</th>
                                <th className='bg-gray-700'>Apellido</th>
                                <th className='bg-gray-700'>Ficha</th>
                            </tr>

                        </thead>
                        <tbody>
                            {filas}
                        </tbody>

                    </table>

                </div>
                <div class='Button'>
                    <button> Inscribir </button>
                </div>
            </div>
        </div>
    );
}
