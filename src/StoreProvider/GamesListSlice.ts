import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { GamesList, GamesListSchema } from './StateSchema';

const initialState: GamesListSchema = {
    data: null,
    isLoading: false,
    error: ""
}

const gamesListSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<GamesList[]>) => {
            state.data = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export const { actions: gamesActions } = gamesListSlice
export const { reducer: gamesReducer } = gamesListSlice