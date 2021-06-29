import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlise';

import { selectCart } from '../store/cartSlise';
import Cart from '../components/Cart';
import { decrement } from '../store/cartSlise';
import {deleteGoods} from '../store/cartSlise';

const CartList = () => {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    let sum = 0;
    
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})
    
    const clickHandler = (event) =>{
        event.preventDefault();
        let t = event.target;
        if(t.classList.contains('minus')) {
            dispatch(decrement(t.getAttribute('data-key')));
        }else if(t.classList.contains('delete')){
            dispatch(deleteGoods(t.getAttribute('data-key')));
        }else {
            return true;
        }    
    }
   
    Object.keys(cart).forEach(item => sum += goodsObj[item]['cost'] * cart[item]);
    
    return (
        <div>
            <table onClick={clickHandler} >
                <tr>
                    <th>Название товара|</th>
                    <th>Цена ( за единицу)|</th>
                    <th>Количество|</th>
                    <th>Стоимость всего товара|</th>
                    <th>Уменьшить количество товара на 1|</th>
                    <th>Удалить товар из корзины|</th>
                </tr>
                {Object.keys(cart).map(item => <Cart goodsObj={goodsObj[item]['title']} cart={cart[item]} cost={goodsObj[item]['cost']} articul={goodsObj[item]['articul']} image={goodsObj[item]['image']}/>)}
            </table>
            <p>
                Итого: {sum}
            </p>
        </div>
    )
}

export default CartList;