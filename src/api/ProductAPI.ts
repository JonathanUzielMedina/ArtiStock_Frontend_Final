import api from "./index";
import { Product } from "my-types";

// Obtener todos los productos.
export const getAllProducts = async() => {
    try {
        const res = await api.get("/product");
        const products: Product[] = await res.data.payload;
        return products;
    } catch(e) {
        console.log("Error al obtener todos los productos:", e);
        return [];
    }
}

// Obtener el producto por ID.
export const getProductById = async(id: number) => {
    try {
        const res = await api.get(`/product/${id}`);
        const product: Product = await res.data.payload;
        return product;
    } catch(e) {
        console.log("Error al obtener la información del producto:", e);
        return null;
    }
}

// Actualizar el producto por su ID.
export const updateProduct = async(id: number, _prop: Product | undefined): Promise<void> => {
    try {
        await api.patch(`/product/${id}`, _prop);
    } catch(e) {
        console.log("Error al actualizar el producto:", e);
    }
}

// Crear un producto.
export const createProduct = async (product: any) => {
    try {
        await api.post("/product", product);
    } catch (e) {
        console.log("Error al crear el producto:", e);
        throw e;
    }
};

// Borrar un producto.
export const deleteProduct = async (id: number): Promise<void> => {
    try {
        await api.delete(`/product/${id}`);
    } catch (e) {
        console.log("Error al eliminar el producto:", e);
    }
};

// Obtener datos para las gráficas.
export const getAllProductsGraph = async () => {
    try {
      const res = await api.get("/product/graph");
      const products: Product[] = await res.data.payload;
      return products;
    } catch (err) {
      console.log(err);
    }
  };


  // Obtener datos de productos de un solo usuario.
export const getProductsByUserId = async (userId:number) => {
    try {
      const res = await api.get(`/product/userId/${userId}`);
      const products: Product[] = await res.data.payload;
      return products;
    } catch (err) {
      console.log(err);
    }
  };