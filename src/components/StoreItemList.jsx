export function StoreItemList(props) {

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
        <ul className="item-list store--item-list">
            {props.itemList.map((item) => (
                <li key={item.id}>
                    <div className = "store--item-icon">
                        <img 
                            alt={item.name}
                            src={item.src}
                        >
                        </img>
                    </div>
                    <button type="click" onClick={() => { addToCart(item, item.id) }}>Add to cart</button>
                </li>
            ))}
        </ul>
    )
}