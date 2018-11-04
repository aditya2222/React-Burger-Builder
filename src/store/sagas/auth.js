import { put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'

// The star "*" after keyword function converts this into a generator and these can be paused
// These donot execute from start to end immediately
export function* logoutSaga(action){
	// yiels means wait to execute and finish
	yield localStorage.removeItem('token')
    yield localStorage.removeItem('expirationDate')
    yield localStorage.removeItem('localId')
    yield put({
    	type: actionTypes.AUTH_LOGOUT
    })
}