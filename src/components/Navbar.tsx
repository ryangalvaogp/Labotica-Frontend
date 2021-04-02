import { useContext } from "react";
import { Pages } from "../config/Types/TypesPageCurrent";
import { PageCurrentContext } from "../contexts/pageCurrentContext";
import BarPages from "./BarPages";

export default function Navbar() {

  const { setCurrentPage } = useContext(PageCurrentContext);

  function handleOnClick(pagina: Pages) {
    setCurrentPage(pagina);
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbar2SupportedContent"
          aria-controls="navbar2SupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbar2SupportedContent"
        >
          <ul className="navbar-nav">
            <BarPages
              onClick={() => handleOnClick('feed')}
              name="feed"
              to="/feed">Feed</BarPages>

            <BarPages
              name="projetosDetails"
              to="#">Projeto</BarPages>

            <BarPages
              onClick={() => handleOnClick('home')}
              name="home"
              to="/">Página Principal</BarPages>

            <BarPages
              onClick={() => handleOnClick('contato')}
              name="contato"
              to="#">Contato</BarPages>

            <BarPages
              onClick={() => handleOnClick('download')}
              name="download"
              to="#">Download</BarPages>
          </ul>
        </div>
      </div>
    </nav>
  );
};