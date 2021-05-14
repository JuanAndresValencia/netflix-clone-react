import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null
}

const SesionSlice = createSlice({
    name: 'sesion',
    initialState,
    reducers: {
        setSesionActive: (state, action) => {
            state.email = action.payload
        },
        resetSesionActive: state => {
            state.email = null
        }
    }
})

export const { setSesionActive, resetSesionActive } = SesionSlice.actions;
export const selectUserActive = state => state.sesion.email;
export default SesionSlice.reducer;