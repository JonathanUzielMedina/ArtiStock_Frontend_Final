import { useParams } from "react-router-dom"
import { User } from "my-types";
import { useState, useEffect } from "react";
import { getUserById, updateUser } from "../api/UserAPI";
import "../style_ap.css"

interface Props {}

const ModifyUserPage = (_props: Props) => {
    const {id} = useParams();

    // Estado del componente.
    const [user, setUser] = useState<User>();

    // Eventos del componente
    useEffect(() => {
        getUserById(parseInt(id!.toString())).then((data:any) => setUser(data));
    }, []);

    const updateSubmit = async() => {
        updateUser(parseInt(id!.toString()), user)
   }

    return (
        <div className="container pb-3 pt-5">
            <h1 className="text-center mb-3 title">Modificar Perfil del Usuario</h1>
            
            <form id="formProducto" onSubmit={updateSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Nombre del Usuario</label>
                            <input type="text" name="nombre"
                            value={user?.name || ""}
                            className="form-control" placeholder="Nombre"
                            onChange={(e) => setUser({...user!, name: e.target.value})}/>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Correo Electrónico</label>
                            <input type="text" name="email" step={0.01}
                            value={user?.email || ""}
                            className="form-control" placeholder="Ejemplo: 'usuario@email.com'"
                            onChange={(e) => setUser({...user!, email: e.target.value})}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="text" name="password"
                            value={user?.password || ""}
                            className="form-control" placeholder="0"
                            onChange={(e) => setUser({...user!, password: e.target.value})}/>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <label className="form-label">Insertar Imagen</label>
                        <input type="file" value={""} name="profilePicSRC"
                        className="form-control mb-3" onChange={(e) => setUser({...user!, profilePic: e.target.value})}/>
                    </div>
                </div>
                
                <div className="row-auto d-flex justify-content-center gap-3 mt-4 mb-1">
                    {/* reset es para que no envie los datos, sino que regrese a los valores iniciales */}
                    <button className="btn btn-secondary" type="reset" 
                    onClick={() => window.location.reload()}>
                        Cancelar
                    </button>
                    <button type="submit" className="b_custom px-3">
                        Actualizar Perfil
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ModifyUserPage