import { DescriptionProjetoProps } from '../config/Types/TypesProjetos';
import { FaCircle } from "react-icons/fa";

export default function DescriptionProjeto(
    { 
        description, 
        participantes 
    }: DescriptionProjetoProps) {
    return (
        <>
            {/* Descrição */}
            <div className="py-5 text-center oOne" >
                <div className="container">
                    <div className="row">
                        <div className="px-md-5 p-3 d-flex flex-column justify-content-center col-lg-12 order-1 order-lg-3">
                            <i className="d-block fa fa-circle fa-3x mb-2 text-muted">
                                <FaCircle size={40} />
                            </i>
                            <h1>Descrição</h1>
                            <p className="lead">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Participantes */}
            <div className="py-5 text-center oOne">
                <div className="container">
                    <div className="row">
                        <div className="px-md-5 p-3 d-flex flex-column justify-content-center col-lg-12 order-1 order-lg-3">
                            <i className="d-block fa fa-circle fa-3x mb-2 text-muted">
                                <FaCircle size={40} />
                            </i>
                            <h1>Participantes</h1>
                            <p className="lead">
                                I hear the buzz of the little world among the stalks, 
                                and grow familiar with the countless indescribable forms 
                                of the insects and flies</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};