import {createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import productReducer from "./reducer.js";

const store = createStore(productReducer,composeWithDevTools());

export default store;