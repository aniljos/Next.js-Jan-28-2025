'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from './page.module.css';
import { useRouter } from "next/navigation";

const baseUrl = "http://localhost:9000/products";

export default function ListProductsPage(){

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {

        fetchProducts();

        return () => {
            //cancelling the call
        }

    }, [])

    async function fetchProducts(){

        try {
            
            const response = await axios.get<Product []>(baseUrl);
            console.log("success", response);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    const conatinerStyles = {display: "flex", flexFlow: "row wrap", justifyContent: "center", };

    async function deleteProduct(product:Product){

        const url = baseUrl + "/" + product.id;
        try {
            
            await axios.delete(url);
            //await fetchProducts();

            const copy_of_products = [...products]; // ES6 spread operator
            const index = copy_of_products.findIndex(item => item.id === product.id);
            copy_of_products.splice(index, 1);
            setProducts(copy_of_products);

            alert("Product deleted: " + product.id);

        } catch {
            
            alert("Failed to delete product: " + product.id)
        }

    }
    function editProduct(product: Product){

        router.push("/products/" + product.id);
    }
    return (
        <div>
            <h3>List Products</h3>
            <div style={conatinerStyles}>
                {products.map(product => {

                    return (
                        <div key={product.id} className={classes.product}>
                           <p>Id: {product.id}</p>
                           <p>{product.name}</p>
                           <p>{product.description}</p>
                           <p>Price: {product.price}</p>     
                           <div>
                                <button className="btn btn-warning" onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                                <button className="btn btn-secondary" onClick={() => editProduct(product)}>Edit</button>
                           </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}