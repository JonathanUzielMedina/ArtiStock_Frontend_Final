import { useParams } from "react-router-dom";
import { Product } from "my-types";
import { useState, useEffect } from "react";
import { getProductById } from "../api/ProductAPI";

const OneProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(parseInt(id))
        .then((data) => {
          if (data) {
            setProduct(data);
          } else {
            setProduct(null);
          }
        })
        .catch(console.error);
    }
  }, [id]);

  if (!product) return;

  return (
    <div className="container p-5 mt-5 mb-4 rounded bg-light">
      <div className="row">
          <div className="col-sm-6 d-flex img-fluid">
              <img src={product!.image} alt={product.title} width="400px" />
          </div>
          <div className="col-sm-6 flex-box">
              <h1>{product.title || "Sin título"}</h1>
              <h4>Por {product.user?.name || "Sin usuario"}</h4>
              <p>
                <strong>Precio:</strong> $ {product.price} MXN
              </p>
              <p>
                <strong>Cantidad de Artículos en Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Descripción:</strong> {product.description}
              </p>
              <p>
                <strong>Tags:</strong>{" "}
                {product.tags.map((tag) => tag.name).join(", ")}
              </p>
          </div>
      </div>
    </div>
  );
};

export default OneProduct;
