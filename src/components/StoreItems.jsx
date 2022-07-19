export function StoreItems(props) {

    return (
        <li key={props.item.id}>
            <div className = "store--item-icon">
                <img 
                    alt={props.item.name}
                    src={props.item.src}
                >
                </img>
            </div>
            <button type="click" onClick={() => { props.addToCart(props.item, props.item.id) }}>Add to cart</button>
        </li>
    )
}