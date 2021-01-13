import { chechIsSelected } from "./helpes";
import ProducstCard from "./ProductsCard";
import { Product } from "./types";


type Props = {

    products: Product[];
    selectedProducts: Product[]
    onSelectProduct: (product: Product) => void;

}

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {

    return (

        <div className="orders-list-container">

            <div className="orders-list-items">

                {products.map(product => (

                    <ProducstCard

                        key={product.id}

                        product={product}

                        onSelectProduct={onSelectProduct}

                        isSelected={chechIsSelected(selectedProducts, product)}
                    />

                ))}

            </div>

        </div>

    )



}

export default ProductsList;