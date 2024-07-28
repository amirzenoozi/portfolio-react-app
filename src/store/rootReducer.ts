import { combineReducers } from '@reduxjs/toolkit';
import uiSettingsReducer from './uiSettings/uiSettingsSlice';

export const rootReducer = combineReducers({
	uiSettings: uiSettingsReducer,
});
