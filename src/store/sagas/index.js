import {takeEvery, all, takeLatest} from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes'
import {logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga} from "./auth";
import {initIngredientsSaga} from './burgerBuilder'
import {purchaseBurgerSaga, fetchOrdersSaga} from './order'

// the function below is a generator

export function* watchAll(action) {
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_INITAL_STATE, authCheckStateSaga),
    ])
}

export function* watchBurgerBuilder(action) {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}

export function* watchOrder(action) {
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga)
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
}

