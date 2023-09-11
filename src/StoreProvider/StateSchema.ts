export interface StateSchema {
    user: User,
    games: GamesListSchema
}

export interface User {
    id: string | null
    name: string
    age: number
    isAdmin: boolean
}

export interface GamesList{
    id: number
    title: string
    thumbnail: string
    short_description: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    developer: string
    release_date: string
    freetogame_profile_url: string
}

export interface GamesListSchema{
    data: GamesList[] | null
    isLoading: boolean
    error: string
}