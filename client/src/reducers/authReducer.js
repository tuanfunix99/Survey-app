

import { createSlice } from '@reduxjs/toolkit';

const authState = {};

const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        fetchUser: (state, action) => {
            let cloneState = {...state};
            cloneState = action.payload;
            state = cloneState || false;
            return state;
        },
        handleToken: (state, action) => {
            let cloneState = {...state};
            cloneState = action.payload;
            state = cloneState || false;
            return state;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;


