import {takeEvery, put} from 'redux-saga/effects';
const delay = (ms:any) => new Promise(res => setTimeout(res, ms))

function* login(){
    yield delay(1000)
    yield put({ type: 'login' })
}
export default function* loginUser(){
    yield takeEvery('loginUser',login)
}