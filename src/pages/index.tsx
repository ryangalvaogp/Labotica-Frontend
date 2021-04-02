import toValidateTitle from '../config/toValidateTitle';
import Navbar from '../components/Navbar'
import Cover from '../components/Cover';
import Carrousel from '../components/Carrousel';
import ListProjetos from '../components/ListProjetos';
import Team from '../components/Team';
import Rodape from '../components/Rodape';
import { useContext } from 'react';
import { ProjetosContext } from '../contexts/projetosContext';

export default function Home() {
  const { imagesProjetosToCarrousel } = useContext(ProjetosContext)

  let title = toValidateTitle();

  return (
    <>
      <title>{title} | Labótica | IFPA Paragominas - PA</title>
      <body
        style={{ overflow: 'auto' }}
        className="text-center"
      >
        <Navbar />
        <Cover />
        {!imagesProjetosToCarrousel[0] ? '' : <Carrousel />}
        <ListProjetos />
        <Team />
        <Rodape />
      </body>
    </>
  )
}


