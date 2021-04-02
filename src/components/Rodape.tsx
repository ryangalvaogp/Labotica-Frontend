import { Link } from "react-router-dom";
import { DateTime } from 'luxon'
import { FaGithub } from 'react-icons/fa'

export default function Rodape() {

  function dateNow() {
    const dt = DateTime.now();
    return dt.toLocaleString();
  };

  const style = {
    link: {
      cursor: 'pointer',
      textDecoration: 'none',
    },
    iconGit: {
      marginRight: 6,
    }
  };

  return (
    <footer className="text-md-left text-center p-4 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="my-3 col-lg-4 col-md-4">
            <h4>LABÓTICA&nbsp;<br />IFPA Paragominas</h4>
            <p className="text-muted">{dateNow()}</p>
            <span className="my-3">Paragominas, PA, Brasil</span>
          </div>
          <div className="col-lg-4"> </div>
          <div className="col-lg-4 my-5">
            <Link
              to="https://www.github.com/ryangalvaogp"
              style={style.link}
              target="blank"
            >
              <FaGithub style={style.iconGit} />
              Repositório no GitHub
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};