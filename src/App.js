import {useState} from "react"

import './styles/reset.css'
import './styles/index.css'

import storeItems from "./store-items"
import { StoreItemList } from './components/StoreItemList'
import { StoreCart } from "./components/StoreCart"

console.log(storeItems)

export default function App() {

  const [itemList] = useState(storeItems)
  const [cart, setCart] = useState([])

  let total = 0

  cart.forEach(item => (total += (item.quantity*item.price)))

  total = Math.round((total + Number.EPSILON) * 100) / 100

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        < StoreItemList 
            itemList={itemList}
            cart={cart}
            setCart={setCart}
        />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
        < StoreCart 
            cart={cart}
            setCart={setCart}
        />
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{total}</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
