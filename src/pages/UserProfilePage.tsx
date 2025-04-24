
import { User } from "my-types";
import { useState, useEffect } from "react";
import { getUserById } from "../api/UserAPI";
import "../style_ap.css";
import imgPerfil from "../../public/media/perfil.png"
import { useParams } from "react-router";

interface Props {}

const UserProfilePage = (_props: Props) => {
  const {id} = useParams();

  // Estado del componente.
  const [user, setUser] = useState<User | null>();

  // Eventos del componente
  useEffect(() => {
      if (id) {
        getUserById(parseInt(id))
          .then((data) => {
            if (data) {
              setUser(data);
            } else {
              setUser(null);
            }
          })
          .catch(console.error);
      }
    }, [id]);

    if (!user) return;

  return (
    <div className="pt-5 container-fluid">
        <div className="px-sm-4 px-md-5 mx-md-3 py-2">
          <div className="d-flex justify-content-center align-content-center">
              <h1 className="text-lg font-medium title">Perfil</h1>
          </div>
          <div className="inline-flex justify-content-center my-5 producto rounded p-md-4 p-sm-3">
            <div className="row">
                <div className="col-sm-6 col-md-5 text-center align-content-center">
                  <img src={imgPerfil} className="ps-lg-5 img-fluid" width="250px"
                      alt={`Foto de Perfil de ${user?.name}`}/>
                </div>
                <div className="col-sm-6 col-md-7">
                    <div className="flex-column text-sm-center text-md-start align-content-center ms-md-5 ps-md-5" style={{marginLeft: 10, fontSize: 19}}>
                        <p><strong>ID: </strong> {user?.id}</p>
                        <p><strong>Nombre: </strong> {user?.name}</p>
                        <p><strong>Correo Electrónico: </strong> {user?.email}</p>
                        <button id="button" className="btn mt-3" onClick={() => (window.location.href = `/modify-user/${user?.id}`)}>
                            Modificar Perfil
                        </button>
                        <button id="button" className="btn mt-3 ms-md-3" onClick={() => (window.location.href = `/`)}>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default UserProfilePage;
