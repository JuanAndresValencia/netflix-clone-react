import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginEmail: null,
    loginPassword: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginData: (state, action) => {
            state.loginEmail = action.payload.loginEmail
            state.loginPassword = action.payload.loginPassword
        },
        resetLoginData: state => {
            state.loginEmail = null
            state.loginPassword = null
        }
    }
})

export const { setLoginData } = loginSlice.actions
export const { resetLoginData } = loginSlice.actions
export const selectLoginEmail = (state) => state.login.loginEmail
export const selectLoginPassword = (state) => state.login.loginPassword
export default loginSlice.reducer