import axios from 'axios';
import { StateSchema } from './StateSchema';
import { AppDispatch } from './store';
import { gamesActions } from './GamesListSlice';

// export type SortByField = "release-date" | "popularity" | "alphabetical" | "relevance"

export type PlatformField = "pc" | "browser"

export enum SortBy {
    RELEASE_DATE = "release-date",
    POPULARYTY = "popularity",
    ALPHABETICAL = "alphabetical",
    RELEVANCE = "relevance"
}

export interface fetchGamesListProps{
    platform?: PlatformField
    category?: string
    sortBy?: SortBy
}

export const fetchGamesList = (props?: fetchGamesListProps) => async (dispatch: AppDispatch, getState: () => StateSchema) => {
// console.log(arg)
    const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {
        platform: props?.platform,
        category: props?.category,
        'sort-by': props?.sortBy
    },
    headers: {
        'X-RapidAPI-Key': 'fd27cf3a59mshf640d6ca0cba13ep1101ebjsn10e07035b761',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
    };
    dispatch(gamesActions.setIsLoading(true))
    try {
        const response = await axios.request(options);
        dispatch(gamesActions.setData(response.data))
        dispatch(gamesActions.setIsLoading(false))
    } catch (error) {
        const errorString = String(error)
        dispatch(gamesActions.setError(errorString))
        dispatch(gamesActions.setIsLoading(false))
    }
}

// const name = () => (dispatch, getState) => {

// }