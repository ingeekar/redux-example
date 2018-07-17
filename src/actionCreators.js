import axios from 'axios'

const loadProducts = () => {    
    return dispatch => {
        return axios.get('https://ingeekar.github.io/Math-X/test.json')
        .then(response => {
            console.log(response);            
            dispatch({
                type: "REPLACE_PRODUCTS",
                products: response.data
            })
        })
    }
}

const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product
    }
}

const removeFromCart = product => {
    return {
        type: "DELETE_TO_CART",
        product
    }
}

export {
    addToCart,
    removeFromCart,
    loadProducts
}