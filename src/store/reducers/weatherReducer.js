const INITIAL_STATE = {
    data: null,
}

export function weatherReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}
