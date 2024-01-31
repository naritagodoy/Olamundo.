import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";

import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Sobremim from "paginas/Sobremim";
import Post from "paginas/Post";
import NaoEncontrada from "componentes/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
    
    <Routes>
      <Route path="/" element = {<PaginaPadrao/>}>
      <Route index element = {<Inicio/>}/>
      <Route path="Sobremim" element = {<Sobremim/>} />
    </Route>

      <Route path="posts/:id/*" element = {<Post/>}/>
      <Route path="*" element = {<NaoEncontrada/>}/>

       {/* 
       Na rota "/" a estrutura a ser renderizada é 
       <PaginaPadrão/> é o pai, e 
       <Inicio/> é a componente filha. 

       Na rota "/sobremim" a estrutura a ser renderizada é 
       <PaginaPadrao /> é o pai, e 
       <Sobremim /> é a componente filho. 

       */}

    </Routes>
    <Rodape />
    
    </BrowserRouter>
  )
}

export default AppRoutes;
