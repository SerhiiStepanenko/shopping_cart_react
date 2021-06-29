import React from "react";

const Cart = (props) => {
    return (
        <tr>
            <th><img src={props.image} className="miniImg"></img>{props.goodsObj}</th>
            <th>{props.cost}</th>
            <th>{props.cart}</th>
            <th>{props.cart * props.cost}</th>
            <th><button className="minus" data-key={props.articul}>-</button></th>
            <th><button className="delete" data-key={props.articul}>X</button></th>
        </tr>
    )
}

export default Cart;