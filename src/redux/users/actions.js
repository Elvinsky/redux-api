import {getUsers} from '../../api';

export const fetchUsers = () => async (dispatch) => {
    dispatch({type: 'USERS/FETCH/START'});
    try {
        const {users} = await getUsers();
        dispatch({type: 'USERS/FETCH/SUCCESS', payload: users});
    } catch (e) {
        console.error(e);
        dispatch({type: 'USERS/FETCH/ERROR', payload: e});
    }
};
