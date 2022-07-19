import {useState} from "react"
import storeItems from "../store-items"

import { StoreItems } from "./StoreItems"

export function Store(props) {

    const [itemList, setItemList] = useState(storeItems)

    const vegFilter = () => {
        const vegStore = (storeItems.filter((element) => element.type === "vegetable"))

        setItemList(vegStore)
    }

    const fruitFilter = () => {
        const fruitStore = (storeItems.filter((element) => element.type === "fruit"))

        setItemList(fruitStore)
    }

    const undoFilter = () => {
         setItemList(storeItems)
    }

    // SORT CURRENTLY ISN'T WORKING CORRECTLY AS HAS TO WAIT FOR STATE TO UPDATE, NEED FIX
    const sortPriceDescending = () => {
        const priceDescending = itemList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

        console.log("sorted array ", priceDescending)

        setItemList(priceDescending)
   }

   const sortPriceAscending = () => {
    const priceAscending = itemList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

    console.log("sorted array ", priceAscending)

    setItemList(priceAscending)
}

    const addToCart = (item, itemId) => {
        const newCartItemArray = [...props.cart]

        const findCartItem = (newCartItemArray.find((element) => element.id === itemId))

        if(findCartItem) {
      
          findCartItem.quantity++

          props.setCart(newCartItemArray)
        }
      
        else newCartItemArray.push(item)
        
            props.setCart(newCartItemArray)
    }

    return (
        <div>
            <button type="click" onClick={() => { vegFilter() }}>Display only vegetables</button>
            <button type="click" onClick={() => { fruitFilter() }}>Display only fruits</button>
            <button type="click" onClick={() => { undoFilter() }}>Undo filters/sort</button>
            <button type="click" onClick={() => { sortPriceDescending() }}>Sort by price: high - low</button>
            <button type="click" onClick={() => { sortPriceAscending() }}>Sort by price: low - high</button>
            <ul className="item-list store--item-list">
                {itemList.map((item) => (
                    <StoreItems 
                    item={item}
                    addToCart={addToCart}
                    />
                    ))}
            </ul>
        </div>
    )
}