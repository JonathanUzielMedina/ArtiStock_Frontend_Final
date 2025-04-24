import React, { useState } from 'react';
import { createProduct } from '../api/ProductAPI';
import { createTag } from '../api/CategoryAPI';
import { Product, Tag } from 'my-types';

const AddProductPage = () => {
    const [product, setProduct] = useState<Product>({
        id: 0,
        title: '',
        description: '',
        price: 0,
        stock: 0,
        image: '',
        userId: 1,
        tags: [],
        user: {} as any,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            for (let i = 0; i < product!.tags.length; i++) {
                try {
                    await createTag({ name: product!.tags[i].name });
                } catch (error) {
                    console.warn(`Error creando tag: ${product?.tags[i].name}`, error);
                }
            }
            console.log("Producto a enviar:", product);
            await createProduct(product);
            alert("Producto agregado con éxito.");
        } catch (error) {
            console.error("Error al crear el producto:", error);
            alert("No se pudo agregar el producto.");
        }
    };

    return (
        <div className="container pt-2 pb-3 mt-5">
            <h1 className="text-center mt-2 mb-3 title">Agregar Producto</h1>

            <form id="formProducto" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Nombre del Producto</label>
                            <input
                                type="text"
                                name="nombre"
                                value={product?.title}
                                onChange={(e) => setProduct({ ...product!, title: e.target.value })}
                                className="form-control"
                                placeholder="Nombre"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input
                                type="number"
                                step={0.01}
                                name="precio"
                                value={product?.price}
                                onChange={(e) => setProduct({ ...product!, price: parseFloat(e.target.value) })}
                                className="form-control"
                                placeholder="$ 0.00"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Cantidad en Stock</label>
                            <input
                                type="number"
                                name="stock"
                                value={product?.stock}
                                onChange={(e) => setProduct({ ...product!, stock: parseInt(e.target.value) })}
                                className="form-control"
                                placeholder="0"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Etiquetas</label>
                            <input
                                type="text"
                                name="tag"
                                value={(product?.tags?.map(tag => tag.name).join(', ')) || ''}
                                onChange={(e) => {
                                    let userTags = e.target.value.split(", ").map(t => t.trim());
                                    let newTags: Tag[] = [];
                                    for (let i = 0; i < userTags.length; i++) {
                                        newTags.push({ id: 0, name: userTags[i] });
                                    }
                                    setProduct({ ...product!, tags: newTags });
                                }
                                }
                                className="form-control"
                                placeholder="Ej: medicina, salud"
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Imagen</label>
                        <input
                            type="file"
                            name="imgSRC"
                            onChange={(e) => {
                                const imageName = e.target.value.replace("C:\\fakepath\\", "../../public/media/");
                                setProduct({ ...product!, image: imageName });
                            }}
                            className="form-control mb-3"
                        />

                        <label className="form-label">Descripción</label>
                        <textarea
                            name="desc"
                            value={product?.description}
                            onChange={(e) => setProduct({ ...product!, description: e.target.value })}
                            className="form-control"
                            rows={3}
                            placeholder="Detalles del producto"
                        ></textarea>
                    </div>
                </div>

                <div className="row-auto d-flex justify-content-center gap-3 mt-4 mb-1">
                    <button className="btn btn-secondary" type="reset">Cancelar</button>
                    <button type="submit" className="b_custom">Agregar Producto</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductPage;