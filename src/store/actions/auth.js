import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}


export const auth = (email, password, isSignup) => {
    return dispatch => {
        // Async code
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBMuwBq3yKQtJjIno05M6Vo4WesEWqM8Tk'
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBMuwBq3yKQtJjIno05M6Vo4WesEWqM8Tk'
        }
        axios.post(url, authData)
            .then((repsonse) => {
                console.log(repsonse)
                dispatch(authSuccess(repsonse))
            })
            .catch((error) => {
                console.log(error)
                dispatch(authFail(error))
            })
    }
}


