const DEFAULT_STATE = {
    albums: [],
    photos: [],
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
        case 'PHOTOS/FETCH/SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                photos: payload,
            };
        case 'PHOTOS/FETCH/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'PHOTOS/FETCH/START':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
