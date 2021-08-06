

import { createSlice } from '@reduxjs/toolkit';

const surveyState = [];

const surveySlice = createSlice({
    name: 'survey',
    initialState: surveyState,
    reducers: {
        fetchSurveys: (state, action) => {
            let cloneState = [...state];
            cloneState = action.payload;
            state = cloneState;
            return state;
        },
        addSurvey: (state, action) => {
            let cloneState = [...state];
            cloneState.push(action.payload);
            state = cloneState;
            return state;
        }
    }
})

export const surveyActions = surveySlice.actions;

export default surveySlice.reducer;