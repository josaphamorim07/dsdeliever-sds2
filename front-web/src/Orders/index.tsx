import { useEffect, useState } from "react";
import { fechProducts } from "../api";
import Footer from "../Footer";
import { chechIsSelected } from "./helpes";
import OrderLocation from "./OrderLocation";
import OrderSummay from "./OrderSummary";
import ProductsList from "./ProductsList";
import StepsHeader from "./SteapsHeader";
import './styles.css'
import { Product } from "./types";

function Orders() {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const totalPrice =  selectedProducts.reduce((sum, item)=>{
     return sum+item.price;
  }, 0);


  useEffect(() => {

    fechProducts()
      .then(Response => setProducts(Response.data))
      .catch(error => console.log(error))

  }, [])

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = chechIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  return (
    <>

      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation />
        <OrderSummay  amount={selectedProducts.length}  totalPrice={totalPrice}/>
      </div>
      <Footer />

    </>

  )
}

export default Orders;