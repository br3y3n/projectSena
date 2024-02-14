import AsideBar from "@/Components/sideBar";
import RootLayout from "@/app/layout";
import PaginaCampeonato from "./PaginaCampeonato";
import "./crearcampeonato.css"
import Navbar from "./Navbar";

export default function CrearCampeonato() {
  return (
    <RootLayout>

      <AsideBar>
        
      </AsideBar>

      <h1>Content page crear campeonatos</h1>
      <div class="contenedor2">
        <PaginaCampeonato />
      </div>
     
    </RootLayout>
  )
}
     