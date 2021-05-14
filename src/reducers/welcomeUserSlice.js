import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null
}

const welcomeUserSlice = createSlice({
    name: "welcomeUser",
    initialState,
    reducers: {
        setWelcomeUserEmail: (state, action) => {
            state.email = action.payload
        }
    }
})

export const { setWelcomeUserEmail } = welcomeUserSlice.actions;
export const selectWelcomeUserEmail = (state) => state.welcomeUser.email
export default welcomeUserSlice.reducer;