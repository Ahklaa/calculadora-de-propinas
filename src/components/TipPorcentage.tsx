import type { Dispatch,SetStateAction } from "react"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]
type TipPorcentageProps = {
  setTip : Dispatch<SetStateAction<number>>
}
export default function TipPorcentage({setTip}: TipPorcentageProps) {
  return (
    <>
        <h2 className="font-black text-2xl">Propina:</h2>
    <form>
            {tipOptions.map(tip => (
                <div key={tip.id} className="flex gap-2">
                  <label htmlFor="tip">{tip.label}</label>
                  <input 
                  type="radio"
                   id={tip.id}
                    name="tip"
                    value={tip.value}
                    onChange={e => setTip(+e.target.value)}/>
                </div>
            ))}
            
    </form>
    </>

  )
}
