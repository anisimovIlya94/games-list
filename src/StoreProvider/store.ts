import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "./userSlice";
import { gamesReducer } from "./GamesListSlice";

export function createReduxStore(initialState?: StateSchema) {

    const rootReducer = combineReducers({
        user: userReducer,
        games: gamesReducer
    })

    const store = configureStore({
        preloadedState: initialState,
        reducer: rootReducer
    })

    return store
}

export type AppDispatch = ReturnType<typeof configureStore>["dispatch"]