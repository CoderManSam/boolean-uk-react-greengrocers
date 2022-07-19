export function CartItems (props) {
    return (
        <li key={props.item.id}>
        <img 
            className="cart--item-icon"
            alt={props.item.name}
            src={props.item.src}
        >
        </img>
        <p>{props.item.name}</p>
        <button type="click" onClick={() => { props.cartQuantityDecrease(props.item, props.item.id) }} className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">{props.item.quantity}</span>
        <button type="click" onClick={() => { props.cartQuantityIncrease(props.item.id) }} className="quantity-btn add-btn center">+</button>
    </li>
    )
}