import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            // return state // need to fix
            const sortName = [...state]
            if (action.payload === 'up') sortName.sort((a, b)=>a.name >b.name ? 1: -1)
            if (action.payload === 'down') sortName.sort((a, b)=>a.name > b.name ? -1:1)
            return sortName

        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            // return state // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

