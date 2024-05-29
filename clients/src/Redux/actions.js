import {
    ADD_PRODUCT,
    DECREASE_PRODUCT_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_ITEM,
    INCREASE_QUANTITY
} from './actionTypes.js';


export const addProduct = (product) => ({
    type:ADD_PRODUCT,
    payload:{product}
});

export const increaseQuantity = (id) => ({
    type:INCREASE_QUANTITY,
    payload:id
});

export const decreaseQuantity = (id) => ({
    type:DECREASE_QUANTITY,
    payload:id
});

export const deleteItem = (id) => ({
    type:DELETE_ITEM,
    payload:id
});


export const decreaseProductQuantity = (productId) => ({
    type: DECREASE_PRODUCT_QUANTITY,
    payload:productId,
})

