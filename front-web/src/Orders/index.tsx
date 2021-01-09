import { useEffect, useState } from "react";
import { fechProducts } from "../api";
import ProductsList from "./ProductsList";
import StepsHeader from "./SteapsHeader";
import './styles.css'
import { Product } from "./types";

function Orders() {

    const [products,setProducts] = useState<Product[]>([]);


    useEffect(()=>{

        fechProducts()
        .then( Response => setProducts(Response.data ))
        .catch(error=>console.log(error))

    },[])

    return (

        <div className="orders-container">
        <StepsHeader/>
        <ProductsList products ={products}/>
        </div>
        
    )
}

export default Orders;