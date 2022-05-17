import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';
import * as ActionTypes from '../actions/types';
import * as Actions from '../actions';

function* increaseCounterAsync() {
  try {
    yield delay(4000);
    yield put(Actions.counterIncreaseAsync());
  } catch (error) {
    console.log(error);
  }
}

export function* watchIncreaseCounter() {
  yield takeLatest(ActionTypes.INCREASE, increaseCounterAsync);
}

function* decreaseCounter() {
  try {
    yield put(Actions.counterDecreaseAsync());
  } catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseCounter() {
  yield takeLatest(ActionTypes.DECREASE, decreaseCounter);
}

/*
const fetchUserApi = (delay) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            name: "Chris Ho",
            position: "Front-end developer",
            email: 'tridungbk@gmail.com'
        })
    }, delay)
});

function* fetchUser() {
    try {
        const response = yield call(fetchUserApi, 1000);
        yield put({type: FETCH_USER_SUCCESS, payload: response});
    } catch (err) {
        yield put({type: CANCEL_FETCHING_USER});
    }
}

export function* watchFetchUser() {
    while(yield take(FETCH_USER)){
        const getUser = yield fork(fetchUser);
        yield take(CANCEL_FETCHING_USER);
        yield cancel(getUser);
    }

}
*/
