const intialData={
    product:[]
}

export const setProductReducers=(state=intialData,{type,data})=>{
    switch (type) {
        case "SET_PRODUCS":
            
            return {...state,product:data}
    
        default:
           return state
    }
}

const intialProduct=[]
export const selectedProductReducer=(state=intialProduct,action)=>{
    switch (action.type) {
        case "SELECTED_PRODUCT":
            
            return [...state,action.data]

        case "REMOVE_PRODUCT":

            return (
                state.filter(({id})=>{
                 
                    return id !== action.id
                })
            )
            
        default:
           return state
    }
}
