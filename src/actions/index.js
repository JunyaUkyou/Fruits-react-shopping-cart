
import products from '../api/products.json'
import axios from "axios";


/*
* action types
*/
export const ADDPRODUCT = 'ADDPRODUCT';
export const DELETEPRODUCT = 'DELETEPRODUCT';
export const CHANGEQUANTITYOFPRODUCT = 'CHANGEQUANTITYOFPRODUCT';
export const CHANGELANG = 'CHANGELANG';
export const WAIT_PRODUCT_LIST = 'WAIT_PRODUCT_LIST';
export const SHOW_PRODUCT_LIST = 'SHOW_PRODUCT_LIST';

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

export const getProductList = (lang) => {
    return dispatch => {
        dispatch({ type: "WAIT_PRODUCT_LIST"});
        const url = "https://api.myjson.com/bins/1elkpr";


        axios.get(url).then(res => {
          dispatch({ type: "SHOW_PRODUCT_LIST", payload:res.data,lang:lang  });
//            dispatch({ type: "SHOW_PRODUCT_LIST", payload:test });
        });
    };
  };
