import { useState } from "react"
import { MenuItem, OrderItem } from "../types"
export default function useOrder(){
    const[order,setOrder] = useState<OrderItem[]>([])

    const addOrder = (item: MenuItem) => {
        console.log(item);
    }
    return {
        addOrder
    }
}