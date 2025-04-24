import { useParams } from "react-router-dom"
import { Product } from "my-types";
import { useState, useEffect } from "react";
import { getProductById, updateProduct } from "../api/ProductAPI";
import "../style_ap.css"
import { updateTag } from "../api/CategoryAPI";

interface Props {}

const ModifyProductPage = (_props: Props) => {
    const {id} = useParams();

    // Estado del componente.
    const [product, setProduct] = useState<Product>();

    let userTagsString = "";

    // Eventos del componente
    useEffect(() => {
        getProductById(parseInt(id!.toString())).then((data:any) => setProduct(data));
    }, []);

    if (!product) return;

    const updateSubmit = async() => {
        try{
            if (product?.tags !== undefined){
                product!.tags.map((t) => {
                    updateTag(t.id, {id: t.id, name: t.name});
                });
            }
            updateProduct(parseInt(id!.toString()), product)
            alert("El producto se ha actualizado con éxito.");
        }catch{
            alert("No se logró actualizar el producto.");
        }
    }

    return (
        <div className="container pb-3 pt-5">
            <h1 className="text-center mb-3 title">Modificar Producto</h1>
            
            <form id="formProducto" onSubmit={updateSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Nombre del Producto</label>
                            <input type="text" name="nombre"
                            value={product?.title || ""}
                            className="form-control" placeholder="Nombre"
                            onChange={(e) => {setProduct({...product!, title: e.target.value})}}/>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="number" name="precio" step={0.01}
                            value={product?.price || ""}
                            className="form-control" placeholder="$ 0.00 MXN"
                            onChange={(e) => setProduct({...product!, price: parseFloat(e.target.value)})}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Cantidad de Artículos en Stock</label>
                            <input type="number" name="stock"
                            value={product?.stock || ""}
                            className="form-control" placeholder="0"
                            onChange={(e) => setProduct({...product!, stock: parseInt(e.target.value)})}/>
                        </div>
                        
                        <div>
                            <label className="form-label">Descripción</label>
                            <textarea name="desc" value={product?.description || ""}
                            className="form-control" rows={3} placeholder="Detalles del producto"
                            onChange={(e) => setProduct({...product!, description: e.target.value})}> 
                            </textarea>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <label className="form-label">Insertar Imagen</label>
                        <input type="file" value={""} name="imgSRC"
                        className="form-control mb-3" onChange={(e) =>{
                            const imageName = e.target.value.replace("C:\\fakepath\\", "../../public/media/");
                            setProduct({...product!, image: imageName})
                            }}/>

                        
                        <div className="mb-3">
                            <label className="form-label">Agregar Etiquetas</label>
                            <input type="text" name="tags"
                            value={(product?.tags && (product?.tags.length > 0))? (product?.tags.map((tag) => {return tag.name}).join(", ")) : ""}
                            onChange={(e) =>{
                                    if (product?.tags !== undefined){
                                        userTagsString = e.target.value;
                                        let tagsArray = product!.tags || [];
                                        let userTags = userTagsString.split(", ").map(t => t.trim());
                                        const updatedTags = tagsArray.map((t, i) => {
                                            return {...t, id: t.id, name: userTags[i]};
                                        });
                                        setProduct({...product!, tags: updatedTags});
                                    }
                                }
                            }
                            className="form-control" placeholder="Separar con ', ' en caso de ingresar más de una."
                            />
                        </div>
                    </div>
                </div>
                
                <div className="row-auto d-flex justify-content-center gap-3 mt-4 mb-1">
                    {/* reset es para que no envie los datos, sino que regrese a los valores iniciales */}
                    <button className="btn btn-secondary" type="reset" onClick={() => window.location.href = `/products/${product?.id}`}>
                        Cancelar
                    </button>
                    <button type="submit" className="b_custom px-3">
                        Actualizar Producto
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ModifyProductPage