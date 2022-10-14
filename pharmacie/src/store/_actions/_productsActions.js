import axios from "axios"
import * as actionType from '../_constants/index'
const product_prifix='/api/products'



export const GetListProducts = () => {
    return async(dispatch) => {
        try {          
             await axios.get(actionType.API_URL+ product_prifix +'/ProductsList')
                    .then((res) => {                                      
                        dispatch({ 
                                    type:actionType.PRODUCTS_LIST,
                                    payload:res.data
                                });
                        })
                 
        } catch (error) {
            dispatch({ type: actionType.REJECTION_REQUEST,
                        payload:error});
        }
    }
}

// add product  action 
export const addProductAction = (data) => {
    return async(dispatch) => {
        try {
            // dispatch({ type: actionType.GET_PRODUCT_REQUEST});
            await axios.post(actionType.API_URL + product_prifix + '/addProduct',data)
                  .then((res) => {
                    dispatch({ type: actionType.ADD_PRODUCT,
                               payload:res.data 
                            })
                  })
        } catch (error) {
            dispatch({ type: actionType.REJECTION_REQUEST,payload:error});
        }
    }
}