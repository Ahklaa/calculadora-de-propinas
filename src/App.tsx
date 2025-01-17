import {menuItems} from './data/db'
import MenuItem from './components/MenuItem';
import useOrder from './hooks/useOrder';
import OrderItemsComponent from './components/OrderItemsComponent';
import OrderTotals from './components/OrderTotals';
import TipPorcentage from './components/TipPorcentage';
function App() {
  const {order,tip,setTip,addOrder,deleteOrder,placeOrder} = useOrder()
  return (
    <>
        <header className="bg-purple-400 py-8">
          <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
        </header>
        <main className='max-w-7xl mx-auto py-6 grid md:grid-cols-2'>
          <div className='p-4'>
            <h1 className='font-black text-4xl'>Menú</h1>
            <div className='space-y-3 mt-5'>
              {menuItems.map((item)=>(
                <MenuItem 
                  key={item.id}
                  item={item}
                  addOrder= {addOrder}
                />
              ))}
            </div>
          </div>
          <div className='border border-dashed border-slate-400 space-y-10 p-5 rounded-lg '>
            {order.length ? (
              <>
                <OrderItemsComponent
                order={order}
                deleteOrder = {deleteOrder}

              />
              <TipPorcentage 
                setTip = {setTip}
              />
              <OrderTotals
                order={order}
                tip ={tip}
                placeOrder={placeOrder}
              />
              </>
            ) 
            : <p className="text-center">No hay ordenes</p>
            }
              
          </div>

        </main>
    </>
  )
}

export default App
