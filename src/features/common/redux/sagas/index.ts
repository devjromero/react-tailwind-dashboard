import { all } from 'redux-saga/effects'
import loginUser from "./authSaga";
import authenticateUser from "./authenticateUser.saga";
export default function* rootSaga(){
    yield all([
        loginUser(),
        authenticateUser()
    ]);
}