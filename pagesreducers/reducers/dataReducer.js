const initialState = {
    data: [],
    loading: false,
    error: ''
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, data: action.payload, loading: false, error: ''};
        case 'LOADING_DATA':
            return {...state, loading: true};
        case 'ERROR':
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
}
