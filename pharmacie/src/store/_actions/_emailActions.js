import axios from "axios"
import * as actionType from '../_constants/index'
const email_prifix='/api/email'



// send email  action 
export const sendEmailAction = (data) => {
    return async(dispatch) => {
        try {
            // dispatch({ type: actionType.GET_PRODUCT_REQUEST});
            await axios.post(actionType.API_URL + email_prifix + '/send',data)
                  .then((res) => {
                    dispatch({ type: actionType.SEND_EMAIL,
                               payload:res.data 
                            })
                  })
        } catch (error) {
            dispatch({ type: actionType.REJECTION_REQUEST,payload:error});
        }
    }
}