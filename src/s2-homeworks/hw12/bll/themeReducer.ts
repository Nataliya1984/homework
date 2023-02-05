const initState = {
    themeId: 1,
}

export type InitialStateType = typeof initState

export const themeReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}
