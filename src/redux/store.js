// import {composeWithDevTools} from '@redux-devtools/extension/lib/types/logOnly';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {albumReducer} from './albums/albumReducer';
import {userReducer} from './users/userReduer';
const store = createStore(
    combineReducers({
        users: userReducer,
        albums: albumReducer,
    }),
    applyMiddleware(thunk)
);
export default store;
