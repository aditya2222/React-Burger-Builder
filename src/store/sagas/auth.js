import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'
import axios from 'axios'

// The star "*" after keyword function converts this into a generator and these can be paused
// These donot execute from start to end immediately
export function* logoutSaga(action) {
    // yiels means wait to execute and finish
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('expirationDate')
    yield localStorage.removeItem('localId')
    yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000)
    yield put(actions.logout())
}

export function* authUserSaga(action) {
		yield put(actions.authStart())
        const authData = {
            email: action.email,
            password: action.password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBMuwBq3yKQtJjIno05M6Vo4WesEWqM8Tk'
        if (!action.isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBMuwBq3yKQtJjIno05M6Vo4WesEWqM8Tk'
        }
        try{

    const response = yield axios.post(url, authData)
	    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000)
	    yield localStorage.setItem('token', response.data.idToken);
	    yield localStorage.setItem('expirationDate', expirationDate);
	    yield localStorage.setItem('userId', response.data.localId)
	    yield put(actions.authSuccess(response.data.idToken, response.data.localId))
	    yield put(actions.checkAuthTimeout(response.data.expiresIn))
	}
	catch (error) {
		yield put(actions.authFail(error.response.data.error))
	}
       
}