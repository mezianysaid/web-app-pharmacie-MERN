import { combineReducers } from "redux";
import { ProductReducers, ClientOpinionReducer, UserReducer, EmailReducer } from './_productReducers'
const reducer = combineReducers({
    products:ProductReducers,
    opinions:ClientOpinionReducer,
    user:UserReducer,
    email:EmailReducer,
});


export default reducer;