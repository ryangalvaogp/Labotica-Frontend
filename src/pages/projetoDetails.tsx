import { useContext } from 'react';
import DescriptionProjeto from '../components/DescriptionProjeto';
import ImagesOfProjetosCarrousel from '../components/ImagesOfProjetos';
import Navbar from "../components/Navbar";
import Rodape from '../components/Rodape';

import { ProjetosContext } from '../contexts/projetosContext';

export default function ProjetoDetails() {
    const { projeto } = useContext(ProjetosContext);

    return (
        <body className="text-center">
            <Navbar />
            {projeto.map(projeto => (
                <>
                    <ImagesOfProjetosCarrousel
                        tituloProjeto={projeto.titulo}
                       />
                    <DescriptionProjeto
                        description={projeto.descricao}
                        participantes={'Ryan'} />
                </>
            ))}
            <Rodape />
        </body >
    )
}
