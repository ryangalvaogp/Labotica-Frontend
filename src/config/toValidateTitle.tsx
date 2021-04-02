import { useContext } from "react";
import { PageCurrentContext } from "../contexts/pageCurrentContext";

export default function toValidateTitle() {
  const { currentPage } = useContext(PageCurrentContext);
  let title: string;

  switch (currentPage) {
    case 'feed':
      title = 'Página Principal';
      break;

    case 'projetosDetails':
      title = 'Projeto';
      break;

    case 'home':
      title = 'Página Principal';
      break;

    case 'contato':
      title = 'Contato';
      break;
      
    case 'download':
      title = 'Download';
      break;
  }
  return title;
};