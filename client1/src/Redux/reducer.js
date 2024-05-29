import {
    ADD_PRODUCT,
    DECREASE_PRODUCT_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_ITEM,
    INCREASE_QUANTITY
} from './actionTypes.js'

const initialState = JSON.parse(localStorage.getItem("cartList")) || {products:[],count:0}
    /*{products:[],count:0}*/


const productReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            if (state.count === 0){
                const product = action.payload.product;
                product.quantity = 1;
                state.count++;
                state.products.push(product)
                localStorage.setItem("cartList", JSON.stringify(state))
            }
            else{

                let check = false;
                state.products.map((item,key) => {
                    if (item._id === action.payload.product._id){
                        state.products[key].quantity++;
                        state.count++;
                        localStorage.setItem("cartList", JSON.stringify(state))
                        check = true;
                    }
                })
                if (!check){
                    const product = action.payload.product;
                    product.quantity = 1;
                    state.count++;
                    state.products.push(product)
                    localStorage.setItem("cartList", JSON.stringify(state))
                }
            }
            return {...state}

        case INCREASE_QUANTITY :

            state.products.map((item,key) => {

                if (item._id === action.payload){
                    state.products[key].quantity++;
                    state.count++;
                    localStorage.setItem("cartList", JSON.stringify(state))
                }
            })
            return {...state}

        case DECREASE_QUANTITY :

            state.products.map((item,key) => {

                if (item._id === action.payload && item.quantity > 1){
                            state.products[key].quantity--;
                            state.count--;
                            localStorage.setItem("cartList", JSON.stringify(state))

                }
            })
            return {...state}

        case DELETE_ITEM :

            let quantity = 0;
            for (let i = 0; i < state.products.length; i++){
                if(state.products[i]._id === action.payload){
                    quantity = state.products[i].quantity;
                    state.count = state.count - quantity;
                    state.products = state.products.filter( (product) => {return product._id !== action.payload})
                }
            }

            return {...state}

        default :
            return state;


        case DECREASE_PRODUCT_QUANTITY:
            let productQuantity = 0;
            for (let i = 0; i < state.products.length; i++){
                if(state.products[i]._id === action.payload){
                    productQuantity = state.products[i].product.quantity--;
                    console.log(productQuantity)
                }
            }
    }

}

export default productReducer;