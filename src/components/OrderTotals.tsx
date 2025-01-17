import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order : OrderItem[]
    tip: number,
    placeOrder: ()=> void
}
export default function OrderTotals({order,tip,placeOrder} : OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce((total,item) =>total + (item.price * item.quantity),0),[order])
    const tipAmount = useMemo(()=> subtotalAmount * tip ,[tip,order])
    const totalAmount = useMemo(()=> subtotalAmount + tipAmount,[order,tip])
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas:</h2>
            <p>Subtotal a pagar {""}
                <span className="font-black">${subtotalAmount}</span>
            </p>
            <p>Propina {""}
                <span className="font-black">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar {""}
                <span className="font-black">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button
         className="bg-black w-full text-center text-white p-2 uppercase"
         onClick={placeOrder}
         >Guardar Orden</button>
    </>
  )
}
