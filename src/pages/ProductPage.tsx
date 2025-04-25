
import { Product } from "my-types";
import { useState, useEffect } from "react";
import { getAllProducts, deleteProduct } from "../api/ProductAPI";
import Filter from "../components/Filter";
import List from "../components/List";
import "../style_ap.css";

interface Props {}

const ProductPage = (_props: Props) => {
  //Filtro
  const [name, setName] = useState<string>("");

  // Estado del componente.
  const [products, setProducts] = useState<Product[]>([]);

  const filteredProducts = products.filter((product)=>{
    return (
        product.title &&
        product.title.toLowerCase().includes(name.toLowerCase())
        //man de manzana
    );
   });

  // Eventos del componente
  useEffect(() => {
    getAllProducts().then((data: any) => setProducts(data));
  }, []);

  //Borrar producto
  const handleDelete = async (id: number, title:string) => {
    const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar el producto "${title}"?`);
    if (!confirmDelete) return;

    await deleteProduct(id);
    const updatedProducts = await getAllProducts();
    setProducts(updatedProducts ?? []);
  };

  return (
    <div className="pt-5">
      
        <div className="px-4 py-2 border-b-slate-400 border-b-2">
          <div className="d-flex justify-content-center align-content-center">
          <h1 className="text-lg font-medium title">Productos</h1>
          </div>
          <div className="d-flex justify-content-end pt-2">
            <button id="button" className="btn " onClick={() => (window.location.href = "/add-product/")}>
              Agregar Producto
            </button>
          </div>
        </div>

        <Filter filterby="Título" name={name} setName={setName} />

        <List products={filteredProducts} onDelete={handleDelete}/>
    </div>
  );
};

export default ProductPage;