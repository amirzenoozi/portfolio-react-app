import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UISettingsState {
	currentLanguage: string;
}

const initialState: UISettingsState = {
	currentLanguage: 'en',
};

const uiSettingsSlice = createSlice({
	name: 'uiSettings',
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<string>) {
			state.currentLanguage = action.payload;
		},
	},
});

export const { setLanguage } = uiSettingsSlice.actions;
export default uiSettingsSlice.reducer;
