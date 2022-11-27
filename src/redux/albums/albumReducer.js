const DEFAULT_STATE = {
    albums: [],
    loading: false,
    error: null,
};
export const albumReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'ALBUMS/SET': {
            return {
                ...state,
                albums: payload,
            };
        }
        case 'ALBUMS/FETCH/SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                albums: payload,
            };
        case 'ALBUMS/FETCH/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'ALBUMS/FETCH/START':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
