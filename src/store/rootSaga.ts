import { all, fork } from 'redux-saga/effects';
import { uiSettingsSaga } from '@/store/uiSettings/uiSettingsSaga';

export function* rootSaga() {
	yield all([fork(uiSettingsSaga)]);
}
