const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeIdActionType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.themeId}
        default:
            return state
    }
}

export const changeThemeIdAC = (themeId: number) => ({ type: 'SET_THEME_ID', themeId } as const) // fix any

export type ChangeThemeIdActionType = ReturnType<typeof changeThemeIdAC>

type InitialStateType = typeof initState
