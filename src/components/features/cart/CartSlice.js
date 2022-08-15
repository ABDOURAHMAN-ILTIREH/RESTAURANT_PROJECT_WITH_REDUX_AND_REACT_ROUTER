import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    amount: 1,
    total: 0,
};

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{

        addCart:(state,action)=>{
            const NewProduct = action.payload;
            const existant = state.products.find( itme =>itme.id === NewProduct.id)
            if(existant){
                existant.amount ++;
            }
            else{
                state.products.push({
                    id: NewProduct.id,
                    image01: NewProduct.image01,
                    image02: NewProduct.image02,
                    image03: NewProduct.image03,
                    title: NewProduct.title,
                    price: NewProduct.price,
                    amount: 1,
                })
            }
        },

        increase :(state,{payload}) =>{
            let products = state.products.find( itme => itme.id === payload.id );
            products.amount = products.amount + 1;
        },
        decrease :(state,{payload}) =>{
            let products = state.products.find( itme => itme.id === payload.id );
            products.amount = products.amount - 1;
        },
        calculateProducts : (state) =>{
            let total = 0;
            let amount = 0;
            state.products.forEach(itme =>{
                amount += itme.amount;
                total += itme.amount * itme.price;
            })
            state.amount = amount;
            state.total = total;    

        },
        removeProducts : (state,action) =>{
            let productDT  = action.payload;
            state.products = state.products.filter( itme => itme.id !== productDT)
        }
    }


})

export const {addCart, increase, decrease,removeProducts,calculateProducts} = productSlice.actions;
export default productSlice.reducer;