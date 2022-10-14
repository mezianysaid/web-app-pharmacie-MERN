import axios from "axios"
import * as actionType from '../_constants/index'
const user_prifix='/api/user'



export const GetListUsers = () => {
    return async(dispatch) => {
        try {          
             await axios.get(actionType.API_URL+ user_prifix +'/userList')
                    .then((res) => {                                      
                        dispatch({ 
                                    type:actionType.USER_LIST,
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
export const addUserAction = (data) => {
    return async(dispatch) => {
        try {
            // dispatch({ type: actionType.GET_PRODUCT_REQUEST});
            await axios.post(actionType.API_URL + user_prifix + '/register',data)
                  .then((res) => {
                    dispatch({ type: actionType.REGISTER,
                               payload:res.data 
                            })
                  })
        } catch (error) {
            dispatch({ type: actionType.REJECTION_REQUEST,payload:error});
        }
    }
}