import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
type OrderItemProps = {
    order : OrderItem[]
}

export default function OrderItemsComponent({order}:OrderItemProps) {
  return (
    <div>
        <h1 className="font-black text-4xl">Consumo</h1>
        <div className="space-y-5 mt-10">
          {order.length === 0 
          ? <p className="text-center">No hay ordenes</p>
          : (
              order.map(item => (
                <div 
                key={item.id}
                className="flex justify-between border-t border-gray-200 p-5 last-of-type:border-b items-center"
                >
                  <div>
                    <p>{item.name} - {formatCurrency(item.price)}</p>
                    <p className="font-black ">Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)} </p>
                  </div>
                  <button 
                  className="bg-red-600 text-white rounded-full h-8 w-8"
                  >
                    X
                  </button>
                </div>
              ))
          )}
        </div>
    </div>
  )
}
