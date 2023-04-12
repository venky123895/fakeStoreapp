export const setProducts=(products)=>{
    return{
        type:"SET_PRODUCS",
        data:products
    }
}

export const selectedProduct=(product)=>{
    return{
        type:"SELECTED_PRODUCT",
        data:product
    }
}

export const removeProducts=(id)=>{
    return{
        type:"REMOVE_PRODUCT",
        id:id
    }
}