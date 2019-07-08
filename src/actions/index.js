
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
export const WAIT_TAX_RATE = 'WAIT_TAX_RATE';
export const GET_TAX_RATE = 'GET_TAX_RATE';
export const SHOW_ALL_PRODUCT_LIST = 'SHOW_ALL_PRODUCT_LIST';

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

export const getTaxRate = () => {
    return dispatch => {
        dispatch({ type: "WAIT_TAX_RATE"});
        const aaa = "https://api.myjson.com/bins/w1vr7";

        fetch(aaa).then((response) => {
            if(!response.ok){
              console.log('error');                
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            dispatch({ type: "GET_TAX_RATE", response:myJson.taxrate })
        })

    };
  };


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

  export const getAllProducts = () => {
    return dispatch => {
        dispatch({ type: "WAIT_ALL_PRODUCT_LIST"});
        const url = "https://api.myjson.com/bins/zlou3";

        axios.get(url).then(res => {
          dispatch({ type: "SHOW_ALL_PRODUCT_LIST", payload:res.data  });
        });
    };
  };
