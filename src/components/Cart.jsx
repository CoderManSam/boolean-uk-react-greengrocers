import { CartItems } from "./CartItems"

export function Cart(props) {

    const cartQuantityIncrease = (itemId) => {
        const newCartItemArray = [...props.cart]

        const findCartItem = (newCartItemArray.find((element) => element.id === itemId))
      
          findCartItem.quantity++

          props.setCart(newCartItemArray)
    }

    const cartQuantityDecrease = (item, itemId) => {
        let newCartItemArray = [...props.cart]

        const findCartItem = (newCartItemArray.find((element) => element.id === itemId))

        if(findCartItem.quantity === 1) {
      
            newCartItemArray = newCartItemArray.filter(i => i !== findCartItem)

          props.setCart(newCartItemArray)
        }
      
        else findCartItem.quantity--
        
            props.setCart(newCartItemArray)
    }

    return (
        <ul className="item-list cart--item-list">
            {props.cart.map((item) => (
                < CartItems 
                    item={item}
                    cartQuantityIncrease={cartQuantityIncrease}
                    cartQuantityDecrease={cartQuantityDecrease}
                />
                // <li key={item.id}>
                //     <img 
                //         className="cart--item-icon"
                //         alt={item.name}
                //         src={item.src}
                //     >
                //     </img>
                //     <p>{item.name}</p>
                //     <button type="click" onClick={() => { cartQuantityDecrease(item, item.id) }} className="quantity-btn remove-btn center">-</button>
                //     <span className="quantity-text center">{item.quantity}</span>
                //     <button type="click" onClick={() => { cartQuantityIncrease(item.id) }} className="quantity-btn add-btn center">+</button>
                // </li>
            ))}
        </ul>
    )
}