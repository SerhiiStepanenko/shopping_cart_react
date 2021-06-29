import {createSlice} from '@reduxjs/toolkit';
import goodsArr from '../data/goods.json';

export const goodsSlise = createSlice({
    name: "goods",
    initialState: {
        goods: goodsArr
    },
    reducers:{

    }
});

export const {} = goodsSlise.actions;
export const selectGoods = state => state.goods.goods;
export default goodsSlise.reducer;