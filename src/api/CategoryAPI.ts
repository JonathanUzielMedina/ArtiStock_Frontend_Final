import api from "./index";
import { Tag } from "my-types";

// Obtener todos los tags.
export const getAllTags = async() => {
    try {
        const res = await api.get("/category");
        const tags: Tag[] = await res.data.payload;
        return tags;
    } catch(e) {
        console.log("Error al obtener los tags: ", e);
        return [];
    }
}

// Obtener un tag por su ID.
export const getTagById = async(id: number) => {
    try {
        const res = await api.get(`/category/${id}`);
        const product: Tag[] = await res.data.payload;
        return product;
    } catch(e) {
        console.log("Error al obtener la información del tag:", e);
        return [];
    }
}

// Actualizar el tag por su ID.
export const updateTag = async(id: number, _prop: Tag | undefined): Promise<void> => {
    try {
        await api.patch(`/category/${id}`, _prop);
    } catch(e) {
        console.log("Error al actualizar el tag: ", e);
    }
}

// Borrar un tag por su ID.
export const deleteTag = async (id: number): Promise<void> => {
    try {
        await api.delete(`/category/${id}`);
    } catch(e) {
        console.log("Error al eliminar el tag:", e);
    }
}

// Crear un tag.
export const createTag = async (tag: Partial<Tag>) => {
    try {
        await api.post("/category", tag);
    } catch (e) {
        console.log("Error al crear el tag: ", e);
        throw e;
    }
};