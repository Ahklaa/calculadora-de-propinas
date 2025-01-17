import { useState } from "react"
import { MenuItem, OrderItem } from "../types"
export default function useOrder(){
    const[order,setOrder] = useState<OrderItem[]>([])
    const[tip,setTip] = useState(0)
    const addOrder = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist){
            const updateItem = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity+1 } : orderItem)
            setOrder(updateItem)
        }else{
            const newItem = {...item,quantity : 1}
            setOrder([...order,newItem])
        }
     
    }

    const deleteOrder = (id:MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }
    
    const placeOrder = ()=>{
        setOrder([])
        setTip(0)
    }
    return {
        order,
        tip,
        setTip,
        addOrder,
        deleteOrder,
        placeOrder
    }
}