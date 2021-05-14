import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    registerName: null,
    registerEmail: null,
    registerPassword: null
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setRegisterData: (state, action) => {
            state.registerName = action.payload.registerName
            state.registerEmail = action.payload.registerEmail
            state.registerPassword = action.payload.registerPassword
        },
        resetRegisterData: state => {
            state.registerName = null
            state.registerEmail = null
            state.registerPassword = null
        }
    }
})

export const { setRegisterData } = registerSlice.actions
export const { resetRegisterData } = registerSlice.actions
export const selectRegisterName = (state) => state.register.registerName
export const selectRegisterEmail = (state) => state.register.registerEmail
export const selectRegisterPassword = (state) => state.register.registerPassword
export default registerSlice.reducer