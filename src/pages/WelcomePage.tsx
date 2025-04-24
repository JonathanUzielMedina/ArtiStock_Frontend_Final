import React, { useState } from 'react';
import { createUser } from '../api/UserAPI';
import { User } from 'my-types';

function WelcomePage() {

    const [user, setUser] = useState<User>({
        id: 0,
        name: "",
        email: "",
        password: "",
        profilePic: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUser(user);
            alert("Usuario creado con éxito");
            window.location.href = '/products';
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            alert("Error al crear usuario");
        }
    };

    return (
        <div className="text-center container" style={{ color: "white", marginTop: 70 }}>
            <h1>¡Bienvenido(a) a ArtiStock!</h1>

            <div className="row d-flex justify-content-center">
                <div className="inline-flex justify-content-center my-5 producto rounded p-md-4 p-sm-3 w-75">
                    <h1 className="text-center mb-3 title">Crear Usuario</h1>

                    <form id="formUsuario" onSubmit={handleSubmit}>
                        <label className="form-label">Nombre del Usuario</label>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="nombre"
                                value={user?.name}
                                onChange={(e) => setUser({ ...user!, name: e.target.value })}
                                className="form-control"
                                placeholder="Nombre del Usuario"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="Correo"
                                value={user?.email}
                                onChange={(e) => setUser({ ...user!, email: e.target.value })}
                                className="form-control"
                                placeholder="Correo del usuario"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="contraseña"
                                value={user?.password}
                                onChange={(e) => setUser({ ...user!, password: e.target.value })}
                                className="form-control"
                                placeholder="Contraseña del Usuario"
                                required
                            />
                        </div>
                        <button id="button" type="submit" className="btn mt-3 ms-md-3">
                            Confirmar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;