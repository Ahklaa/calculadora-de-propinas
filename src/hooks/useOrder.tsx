import { useState } from "react"
import { OrderItem } from "../types"
export default function useOrder(){
    const[order,setOrder] = useState<OrderItem[]>([])
    const[total,setTotal] = useState(0)

    const addOrder = () => {
        console.log("Agregando..");
    }
    return {
        addOrder
    }
}