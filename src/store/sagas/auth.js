import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'

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