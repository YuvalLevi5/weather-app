export function setCurrLocation(data) {
    return (dispatch) => {
        dispatch({ type: 'SET_DATA', data: data })
    }
}