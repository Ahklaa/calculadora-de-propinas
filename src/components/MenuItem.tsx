import type { MenuItem } from "../types"

type MenuItemProps = {
  item : MenuItem
  addOrder: () => void
}

export default function MenuItem({item, addOrder} : MenuItemProps) {
  return (
    <>
      <button
      className="border-2 border-r-2 border-purple-600 flex justify-between w-full hover:bg-purple-300 p-3"
      onClick = {() => addOrder()}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>

      </button>
    </>
  )
}
