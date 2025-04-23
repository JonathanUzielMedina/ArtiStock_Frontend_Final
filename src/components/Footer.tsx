import { Link } from "react-router";

function Footer(){
    return (
        <>
            <footer className="py-3 d-flex justify-content-between align-items-center px-4">
                <div className="container text-center text-md-start">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 mb-2 mb-md-0 text-center text-md-start">
                            <p className="mb-0">Contáctanos: +6622825673</p>
                        </div>
                        <div className="col-6 col-md-4 mb-2 mb-md-0 text-center">
                            <p className="mb-0">Negocio@mail.com</p>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-end">
                            <Link to="#" id="polit">Políticas de la Tienda</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;