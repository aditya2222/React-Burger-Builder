import { takeEvery } from "redux-saga";
import * as actionTypes from '../actions/actionTypes'
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga } from "./auth";

// the function below is a generator

export function* watchAll(action) {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
}

