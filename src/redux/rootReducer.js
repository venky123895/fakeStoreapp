import { combineReducers } from 'redux'

import { setProductReducers } from './reducer'
import { selectedProductReducer } from './reducer'

export const reducers=combineReducers({
    setProductReducers:setProductReducers,
    selectedProduct:selectedProductReducer,

})