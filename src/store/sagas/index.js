import { takeEvery } from "redux-saga";
import * as actionTypes from '../actions/actionTypes'
import { logoutSaga, checkAuthTimeoutSaga } from "./auth";

// the function below is a generator

export function* watchAll(action) {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
}

