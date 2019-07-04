/*
* action types
*/
export const ADDPRODUCT = 'ADDPRODUCT';
export const DELETEPRODUCT = 'DELETEPRODUCT';
export const CHANGEQUANTITYOFPRODUCT = 'CHANGEQUANTITYOFPRODUCT';
export const CHANGELANG = 'CHANGELANG';

/*
* action creators
*/
export const addProduct = (product) => ({
    type: 'ADDPRODUCT',
    product
})

export const deleteProduct = (product) => ({
    type: 'DELETEPRODUCT',
    product
})

export const changeQuantityOfProduct = (product) => ({
    type: 'CHANGEQUANTITYOFPRODUCT',
    product
})

export const changeLang = (payload) => ({
    type: 'CHANGELANG',
    payload
})
