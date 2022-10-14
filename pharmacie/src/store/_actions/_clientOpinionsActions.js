import axios from "axios"
import * as actionType from '../_constants/index'
const product_prifix='/api/clientsopinion'



export const GetListOpinion = () => {
    return async(dispatch) => {
        try {          
             await axios.get(actionType.API_URL+ product_prifix +'/opinionsList')
                    .then((res) => {                                      
                        dispatch({ 
                                    type:actionType.OPINION_LIST,
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
export const addOpinionAction = (data) => {
    return async(dispatch) => {
        try {
            await axios.post(actionType.API_URL + product_prifix + '/addOpinion',data)
                  .then((res) => {
                    dispatch({ type: actionType.ADD_OPINION,
                               payload:res.data 
                            })
                  })
        } catch (error) {
            dispatch({ type: actionType.REJECTION_REQUEST,payload:error});
        }
    }
}