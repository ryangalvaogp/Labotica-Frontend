import { useContext } from "react";
import { PageCurrentContext } from "../contexts/pageCurrentContext";
import { ProjetosContext } from "../contexts/projetosContext";
import Link from "next/link";

export default function ListProjetos() {
  const {
    projetos,
    setProjetctSelectedToViewImages
  } = useContext(ProjetosContext);
  const { setCurrentPage } = useContext(PageCurrentContext);

  function handleSelectProjeto(id: string) {
    setProjetctSelectedToViewImages(id);
    setCurrentPage('projetosDetails');
  }
  return (
    <>
      <div className="pt-5 pThere"  >
        {projetos.map(projeto => (
          <>
            <div className="py-5 text-center text-white listP"  >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <h1 className="mb-3">
                      {projeto.projeto.titulo}
                    </h1>
                    <p className="lead mb-0">
                      {projeto.projeto.descricao}
                    </p>
                    <Link
                      scroll={true}
                      href="projetoDetails">
                      <a
                        onClick={() => handleSelectProjeto(projeto.projeto.projeto_id)}
                        className="btn btn-primary m-3">
                        Ver mais!
                  </a>
                    </Link>
                    <img
                      className="img-fluid d-block mx-auto rounded"
                      src={`${projeto.url}`}
                      width="750" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};