import { Outlet } from "react-router-dom";
import Cabecalho from "./routes/components/Cabecalho/Cabecalho";
import Rodape from "./routes/components/Rodape/Rodape";

export default function App() {
  return (

    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>

  );
}
