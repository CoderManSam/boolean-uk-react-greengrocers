import { useRef } from "react";

export function StoreItems(props) {

    const inputElement = useRef();

    const displayDetails = () => {

        const inputElementCurrent = inputElement.current

        inputElementCurrent.hidden === true ? inputElementCurrent.removeAttribute('hidden') : inputElementCurrent.setAttribute('hidden', 'hidden')
    }

    return (
        <li key={props.item.id}>
            <div className = "store--item-icon">
                <img 
                    alt={props.item.name}
                    src={props.item.src}
                >
                </img>
            </div>
            <p hidden ref={inputElement}>{props.item.name} {props.item.price}p</p>
            <button type="click" onClick={() => { props.addToCart(props.item, props.item.id) }}>Add to cart</button>
            <button type="click" onClick={() => {displayDetails()}}>Show/Hide Details</button>
        </li>
    )
}