import { fork, takeEvery, put } from 'redux-saga/effects';
import { fetchList } from '../../redux/table/table.actions';
import { push } from 'react-router-redux';
import { ADD_ELEMENT_SUCCESS, EDIT_ELEMENT_SUCCESS, DELETE_ELEMENT_SUCCESS } from '../../redux/table/table.types';

export function* afterAddElementSuccess() {
  yield put(fetchList());
  yield put(push('/'));
}

function* elementsSaga() {
  yield fork(takeEvery, [ADD_ELEMENT_SUCCESS, EDIT_ELEMENT_SUCCESS, DELETE_ELEMENT_SUCCESS], afterAddElementSuccess);
}

export default elementsSaga;
