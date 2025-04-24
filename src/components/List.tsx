import { Product } from "my-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface ListProps {
  products: Array<Product>;
  onDelete: (id: number, title: string) => void;
}

export default function List({ products, onDelete }: ListProps) {
  const { userId } = useParams();

  return (
    <>
      {products.map((producto, index) => (
        <div key={index} className="d-flex producto mx-4 mb-4 p-3 rounded">
          <img src={producto.image}
            alt={producto.title}
            className="img-fluid" width="400px" />
          <div className="flex-grow-1 d-flex flex-column justify-content-between ps-3">
            <h2 className="mt-3">
              <Link to ={`/product/${producto.id}`} className="link">
              {producto.title}
              </Link>
            </h2>
            <p>{producto.price} MXN</p>
            <p>{producto.description}</p>
            {producto.tags && producto.tags.length > 0 && (
              <ul className="tags list-unstyled d-flex flex-wrap gap-2">
                {producto.tags.map((tag, i) => (
                  <li key={i} className="text-white p-2 rounded">
                    {tag.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="d-flex flex-column align-items-center">
            <button
              className="btn mb-5 mt-5"
              onClick={() => {
                console.log(window.location.pathname);

                if (window.location.pathname == "/products"){
                  window.location.href = `/modify-product/${producto.id}`;
                }
                else if (window.location.pathname == `/artists/productByAuthor/${userId}`){
                  window.location.href = `/modify-product/${producto.id}`;
                }
                
                }}>
              Modificar
            </button>
            <button className="btn" onClick={() => onDelete(producto.id, producto.title)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </>
  );
}