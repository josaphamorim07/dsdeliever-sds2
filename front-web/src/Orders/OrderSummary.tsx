import { formatPrice } from "./helpes"

type Number={

     amount:number;
     totalPrice:number;
}


export default function OrderSummay({amount,totalPrice}:Number) {


    return (

        <div className="order-summary-container">

            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                  PEDIDOS SELECIONADO
              </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
                  VALOR  TOTAL
              </span>
                </div>

                <button className="order-summary-make-order">Salvar pedido</button>
            </div>

        </div>

    )


}