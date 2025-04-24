import { ProductAreaChart, ProductPieChart } from "../components/Charts";

const GraphPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-content-center mt-5 mb-2 py-2">
          <h1 className="text-lg font-medium title">Estadísticas de Productos</h1>
      </div>
      <div className="d-flex justify-content-center align-content-center my-1 mp-1">
          <ProductAreaChart key1="price" key2="id" />
          <ProductPieChart _key="stock" />
      </div>
    </>
  );
};

export default GraphPage;
