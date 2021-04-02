import { useContext } from "react";
import { PageCurrentContext } from "../contexts/pageCurrentContext";

export default function Team() {
  const { allUsuarios } = useContext(PageCurrentContext);

  return (
    <div className="py-5 bg-light" id="speakers">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>EQUIPE LABÓTICA</h1>
          </div>
        </div>
        <div className="row">
          {allUsuarios.map((user) => (
            <div className="col-6 col-lg-4 animate-in-left">
              <a href="#">
                <img
                  src="assets/conference/people_1.jpg"
                  className="center-block img-fluid my-3 rounded-circle"
                  width="300"
                />
                <h3 className="mb-0">{user.name}</h3>
                <p className="text-muted">{user.funcao}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};