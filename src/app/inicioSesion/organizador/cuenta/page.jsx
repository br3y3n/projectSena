import AsideBar from "@/Components/sideBar";
import RootLayout from "@/app/layout";
import './style.css'
export default function Cuenta() {
  return (
    <RootLayout>

      <AsideBar></AsideBar>

      <section className="section">
        <h1 className="text-2xl font-bold">Editar Cuenta</h1>
        <hr />
        <form action="" className="formulario">
          <label htmlFor="">Foto de Perfil
            <div className="h-20 w-20 bg-white"></div>
            <p>cambiar foto</p>
          </label>
          <div className="">
            <label htmlFor="" className="pr-5">Nombre</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="" className="pr-3">Apellidos
            </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="" className="pr-4">Telefono
            </label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="" className="pr-10">Email
            </label>
            <input type="email" />
          </div>
          <label htmlFor="">Password
            <h1 className="text-white">Cambiar password</h1>
          </label>
          <button className="guardar">Guardar cambios</button>
        </form>
      </section>
    </RootLayout>
  )
}
