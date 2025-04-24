import api from "./index";
import { User } from "my-types";

//Crear un usuario
export const createUser = async (user: User) => {
    try {
        await api.post("/user", user);
    } catch (e) {
        console.log("Error al crear el usuario: ", e);
        throw e;
    }
};

// Obtener todos los usuarios.
export const getAllUsers = async() => {
    try {
        const res = await api.get("/user");
        const users: User[] = await res.data.payload;
        return users;
    } catch(e) {
        console.log("Error al obtener todos los usuarios: ", e);
        return [];
    }
}

// Obtener un usuario por su ID.
export const getUserById = async(id: number) => {
    try {
        const res = await api.get(`/user/${id}`);
        const user: User[] = await res.data.payload;
        return user;
    } catch(e) {
        console.log("Error al obtener información del usuario: ", e);
        return [];
    }
}

// Actualizar el usuario por su ID.
export const updateUser = async(id: number, _prop: User | undefined): Promise<void> => {
    try {
        await api.patch(`/user/${id}`, _prop);
    } catch(e) {
        console.log("Error al actualizar el usuario: ", e);
    }
}

// Borrar un usuario por su ID.
export const deleteUser = async (id: number) => {
    try {
        await api.delete(`/user/${id}`);
    } catch(e) {
        console.log("Error al eliminar el usuario: ", e);
    }
}

export const getAllUsersBasic = async() => {
    try {
        const res = await api.get("/user/basic");
        const users: User[] = await res.data.payload;
        return users;
    } catch(e) {
        console.log("Error al obtener todos los usuarios: ", e);
        return [];
    }
}