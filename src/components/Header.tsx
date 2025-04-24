import { Link } from "react-router";
import logo from "../media/logo_ph.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircleUser,faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return (
        <header className="sticky-top">
            <div className="container-fluid">
                <div id="header_bar" className="row d-flex align-items-center justify-content-between w-100 top-0 start-0 gx-0">
                    <div id="logo" className="col-md-2 d-flex justify-content-center"> 
                        <img src={logo} alt="Logo" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-12 header_center d-flex justify-content-center w-100">
                                <div className="searchbar d-flex rounded-pill w-50 mt-3">
                                    <input type="text" placeholder="Buscar Productos" className="text-white form-control bg-transparent border-0" />
                                    <button type="submit" className="btn btn-link">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" style={{color:"white"}} />
                                    </button>
                                </div>
                            </div>  
                        </div>
                        <div className="row">
                            <nav className="navbar navbar-expand col-12">
                                <div className="container justify-content-center">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active mx-3">
                                            <Link to="/artists" className="nav-link text-dark"> Artistas</Link>
                                        </li>
                                        <li className="nav-item active mx-3">
                                            <Link to="/products" className="nav-link text-dark text-center">Productos</Link>
                                        </li>
                                        <li className="nav-item active mx-3">
                                            <Link to="/graph" className="nav-link text-dark">Gráficas</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="header_right col-md-2 d-flex justify-content-center">
                        <Link to="#" id="Lista de Compras" className="p-2 mx-1"><FontAwesomeIcon icon={faBagShopping} size="4x" style={{color:"#137A7F"}} /></Link>
                        <Link to="#" id="perfil" className="p-2 mx-1"><FontAwesomeIcon icon={faCircleUser} size="4x" style={{color:"#137A7F"}} /></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;