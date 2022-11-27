const DEFAULT_STATE = {
    users: [],
    loading: false,
    error: null,
};
export const userReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'USERS/SET': {
            return {
                ...state,
                users: payload,
            };
        }
        case 'USERS/FETCH/SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                users: payload,
            };
        case 'USERS/FETCH/ERROR':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'USERS/FETCH/START':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
