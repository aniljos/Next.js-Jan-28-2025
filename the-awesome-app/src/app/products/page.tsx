'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from './page.module.css';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {  AppState } from "@/redux/store";

//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";

export default function ListProductsPage(){

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    const auth = useSelector((state: AppState) => state.auth)

    useEffect(() => {

        fetchProducts();

        return () => {
            //cancelling the call
        }

    }, [])

    async function fetchProducts(){

        try {

            if(!auth.isAuthenticated){
                router.push("/login");
                return;
            }
            

            const headers = {"Authorization": `Bearer ${auth.accessToken}`}
            const response = await axios.get<Product []>(baseUrl, {headers});
            console.log("success", response);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    const conatinerStyles = {display: "flex", flexFlow: "row wrap", justifyContent: "center", };

    async function deleteProduct(product:Product){

        const url = baseUrl + "/" + product.id;
        const headers = {"Authorization": `Bearer ${auth.accessToken}`}
        try {
            
            await axios.delete(url, {headers});
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