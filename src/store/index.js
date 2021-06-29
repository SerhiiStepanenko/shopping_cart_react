import {configureStore} from '@reduxjs/toolkit';
import goodsReducer from './goodsSlise';
import cartReducer from './cartSlise';

export default configureStore({
    reducer: {
        goods: goodsReducer,
        cart: cartReducer
    }
});