import { put, takeLatest } from 'redux-saga/effects';
import { setLanguage } from './uiSettingsSlice';

function* fetchUISettingsFromUrl() {
	try {
		const urlParams = new URLSearchParams(window.location.search);
		const lang = urlParams.get('lang') || 'en';
		yield put(setLanguage(lang));
	} catch (error) {
		console.error('Error fetching UI settings from URL', error);
	}
}

export function* uiSettingsSaga() {
	yield takeLatest('FETCH_UI_SETTINGS', fetchUISettingsFromUrl);
}
