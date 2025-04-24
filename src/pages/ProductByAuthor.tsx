import { Product, User } from "my-types";
import { getProductsByUserId, deleteProduct } from "../api/ProductAPI";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import List from "../components/List";
import { useParams } from "react-router-dom";

interface Props {}

const ProductByAuthor = (_props: Props) => {
  const { userId } = useParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    return (
      product.title && product.title.toLowerCase().includes(name.toLowerCase())
      //man de manzana
    );
  });

  useEffect(() => {
    if (userId) {
      getProductsByUserId(parseInt(userId))
        .then((data) => {
          if (data) {
            setProducts(data);
          } else {
            setProducts([]);
          }
        })
        .catch(console.error);
    }
  }, [userId]);

   //Borrar producto
    const handleDelete = async (id: number, title:string) => {
      const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar el producto "${title}"?`);
      if (!confirmDelete || !userId) return;
  
      await deleteProduct(id);
      const updatedProducts = await getProductsByUserId(parseInt(userId));
      setProducts(updatedProducts ?? []);
    };

  return (
    <div className="pt-5">
          
            <div className="px-4 py-2 border-b-slate-400 border-b-2">
              <div className="d-flex justify-content-center align-content-center">
              <h1 className="text-lg font-medium title">Productos de alguien</h1>
              </div>
              <div className="d-flex justify-content-end pt-2">
              <button id="button" className="btn " onClick={() => (window.location.href = "/add-product/")}>
                Agregar Producto
                </button>
              </div>
            </div>
    
            <Filter filterby="title" name={name} setName={setName} />
    
            <List products={filteredProducts} onDelete={handleDelete}/>
        </div>

  );
};

export default ProductByAuthor;
