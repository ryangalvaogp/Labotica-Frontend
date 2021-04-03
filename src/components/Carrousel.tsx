import { useContext } from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import { ProjetosContext } from "../contexts/projetosContext";

export default function Carrousel() {
  const { imagesProjetosToCarrousel } = useContext(ProjetosContext);

  return (
    <div id="carousel" className={`py-5 pTwo `}  >
      <div className="container">
        <div className="row">
          <div className={`col-md-12 `} >
            <div className="carousel slide" data-ride="carousel" >
              <Container >
                <Carousel pause='hover'>
                  {imagesProjetosToCarrousel.map(img => (
                    <Carousel.Item key={img.id} interval={5000}>
                      <Image
                        width={530}
                        style={{ minWidth: 300 }}
                        src={`https://backendlabotica.herokuapp.com/files/projetos/${img.caminho}`}
                        alt={`Imagens do projeto: ${img.titulo}`}
                        rounded
                      />
                      <Carousel.Caption>
                        <h3>{img.titulo}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                  )
                  }
                </Carousel>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};