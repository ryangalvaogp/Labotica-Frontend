import { useContext, useEffect } from "react";
import { ProjetosContext } from "../contexts/projetosContext";
import api from "../config/api";
import { ImagesOfProjetosCarrouselProps } from '../config/Types/TypesProjetos'
import { Carousel, Image, Container } from 'react-bootstrap/'

export default function ImagesOfProjetosCarrousel(
    {
        tituloProjeto
    }: ImagesOfProjetosCarrouselProps) {

    const {
        imgProjeto,
        setImgProjeto,
        projetctSelectedToViewImages,
    } = useContext(ProjetosContext);

    // O Effect a seguir precisa está nesse componente
    // pois se estiver no ProjetosContext,  ele irá  realizar 
    // a chamada api sem o id do projeto assim que a página
    // for carregada pelo browser;retornando um status code 404
    // pois não existirá a rota sem id no backend;
    useEffect(() => {
        api.post(`views/projeto/images/${projetctSelectedToViewImages}`)
            .then(res => {
                setImgProjeto(res.data);
            })
    }, [projetctSelectedToViewImages]);

    return (
        <>
            <div id="carousel" className="py-5 bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carousel slide" data-ride="carousel" >
                                <Container >
                                    <Carousel pause='hover'>
                                        {imgProjeto.map(img => (
                                            <Carousel.Item key={img.id} interval={5000}>
                                                <Image
                                                    width={530}
                                                    style={{ minWidth: 300 }}
                                                    src={`https://backendlabotica.herokuapp.com/files/projetos/${img.caminho}`}
                                                    alt={`Imagens do projeto: ${tituloProjeto}`}
                                                    rounded
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};