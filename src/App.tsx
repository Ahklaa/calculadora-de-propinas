import {menuItems} from './data/db'
import MenuItem from './components/MenuItem';
import useOrder from './hooks/useOrder';

function App() {
  const {addOrder} = useOrder()
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
          <div>
            <h1>Consumo</h1>
          </div>
        </main>
    </>
  )
}

export default App
