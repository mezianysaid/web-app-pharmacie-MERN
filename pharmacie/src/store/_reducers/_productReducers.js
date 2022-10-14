import * as actionType from '../_constants/index'

export const ProductReducers = (state={},action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_REQUEST:
            return {
                loading:true,
                products:[]
            }
        case actionType.GET_PRODUCT_SUCCESS:
            return {
                loading:false,
                products:action.payload
            }
        case actionType.GET_PRODUCT_FAIL:
            return {
                loading:false,
                products:action.payload
            }
        case actionType.PRODUCTS_LIST:
                return {
                    ...state,
                    products:action.payload
                }
        case actionType.ADD_PRODUCT:
            return {
                ...state,
                products:action.payload
            }
        default:
            return state;
    }
}
//  clients opinion reducer  

export const ClientOpinionReducer = (state={},action) => {
    switch (action.type) {
        case actionType.OPINION_LIST:
            return {
                ...state,
                opinions:action.payload
            } 
        case actionType.ADD_OPINION:
            return {
                ...state,
                opinions:action.payload
            }         
        default:
            return state;
    }
}

// user reducer 
export const UserReducer= (state={},action) => {
    switch (action.type) {
        case actionType.USER_LIST:
            return {
                ...state,
                user:action.payload
            } 
        case actionType.REGISTER:
            return {
                ...state,
                user:action.payload
            }         
        default:
            return state;
    }
}

// email reducer  

// user reducer 
export const EmailReducer= (state={},action) => {
    switch (action.type) {
        case actionType.SEND_EMAIL:
            return {
                ...state,
                user:action.payload
            }        
        default:
            return state;
    }
}