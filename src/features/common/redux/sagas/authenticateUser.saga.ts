import {takeEvery, put} from 'redux-saga/effects';
import authResponse2 from "../../data/authResponse";

const delay = (ms:any) => new Promise(res => setTimeout(res, ms))

function* makeAuth(){
    yield delay(1000)
    // yield put({ type: 'NoAuthUser',}, );
    yield put({ type: 'authUser', payload:{...authResponse2}}, );
}
export default function* authenticateUser(){
    yield takeEvery('authenticateUser',makeAuth)
}