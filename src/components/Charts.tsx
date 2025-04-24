import { Product } from "my-types";
import { useState, useEffect } from "react";
import { getAllProductsGraph } from "../api/ProductAPI";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, PieChart, Pie } from "recharts";

interface ProductAreaChartParams{
    key1: string,
    key2: string
}

interface ProductPieChartParams{
    _key: string
}

export function ProductAreaChart({key1, key2 }: ProductAreaChartParams) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProductsGraph().then((data:any) => setProducts(data));
    }, []);

    return(
        <div className="inline-flex justify-center mt-4">
            <h2 className="subtitle">
                Product {key1[0].toUpperCase() + key1.slice(1)} VS&nbsp; {key2[0].toUpperCase() + key2.slice(1)}
            </h2>
            <AreaChart width={750} height={350} data={products}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#3d86fc" stopOpacity={0.9}/>
                        <stop offset="90%" stopColor="#3d86fc" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#fc3d3d" stopOpacity={0.9}/>
                        <stop offset="90%" stopColor="#fc3d3d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="title" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip />
                <Legend verticalAlign="top" height={28}/>
                <Area type="monotone" dataKey={key1} stroke="#3d86fc" fillOpacity={1} fill="url(#color1)" />
                <Area type="monotone" dataKey={key2} stroke="#fc3d3d" fillOpacity={1} fill="url(#color2)" />
            </AreaChart>
        </div>
    );
}

export function ProductPieChart({_key}: ProductPieChartParams) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProductsGraph().then((data:any) => setProducts(data));
    }, []);

    return(
        <div className="inline-flex justify-center mt-4">
            <h2 className="subtitle">Product {_key[0].toUpperCase() + _key.slice(1)}</h2>
            <PieChart width={400} height={400}>
                <Pie
                dataKey={_key}
                nameKey="title"
                isAnimationActive={true}
                data={products}
                cx="50%"
                cy="50%"
                outerRadius={140}
                fill="#8884d8"
                label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
}