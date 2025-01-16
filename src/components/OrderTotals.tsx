import { useMemo } from "react"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order : OrderItem[]
}
export default function OrderTotals({order} : OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce((total,item) =>total + (item.price * item.quantity),0),[order])
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas:</h2>
            <p>Subtotal a pagar {""}
                <span className="font-black">${subtotalAmount}</span>
            </p>
            <p>Propina {""}
                <span className="font-black">$0</span>
            </p>
            <p>Total a pagar {""}
                <span className="font-black">$0</span>
            </p>
        </div>
    </>
  )
}
