import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlise';
import Goods from '../components/Goods';
import { increment } from '../store/cartSlise';

const GoodsList = () => {
    const goods = useSelector(selectGoods);
    const dispath = useDispatch();
    const clickHandler = (event) =>{
        event.preventDefault()
        let t = event.target;
        if(!t.classList.contains('add-to-cart'))return true;
        dispath(increment(t.getAttribute('data-key')))
    }
    
    return(
        <div className='goods-field' onClick={clickHandler}>
            {goods.map(item => <Goods title={item.title} image={item.image} cost={item.cost} articul={item.articul} key={item.articul}/>)}
        </div>
    )
}

export default GoodsList;