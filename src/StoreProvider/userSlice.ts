import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User } from "./StateSchema";

const initialState: User = {
    id: null,
    name: "Ilya",
    age: 0,
    isAdmin: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice