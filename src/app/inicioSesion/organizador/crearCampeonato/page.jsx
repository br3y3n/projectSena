import AsideBar from "@/Components/sideBar";
import RootLayout from "@/app/layout";
import PaginaCampeonato from "./PaginaCampeonato";
import "./crearcampeonato.css"
import Navbar from "./Navbar";

export default function CrearCampeonato() {
  return (
    <RootLayout>

      <AsideBar/>
      <div class="contenedor2">
        <PaginaCampeonato />
      </div>
      
     
    </RootLayout>
  )
}
     