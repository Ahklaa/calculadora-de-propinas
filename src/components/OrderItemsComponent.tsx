import type { OrderItem } from "../types"

type OrderItemProps = {
    order : OrderItem[]
}

export default function OrderItemsComponent({order}:OrderItemProps) {
  return (
    <div>
        <h1 className="font-black text-4xl">Consumo</h1>
        <div className="space-y-5 mt-5">
          {order.length === 0 
          ? <p>No hay ordenes</p>
          : (
              order.map(item => (
                <div key={item.id}>
                  <p>{item.name}</p>
                </div>
              ))
          )}
        </div>
    </div>
  )
}
