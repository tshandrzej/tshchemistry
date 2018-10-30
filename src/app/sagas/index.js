import elementsSaga from "./element/elements.saga";
import {fork} from "redux-saga/effects";

export default function* sagas() {
    yield fork(elementsSaga);
}