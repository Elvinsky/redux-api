const getUsers = async () => {
    const users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then((r) => r.json());
    return {users};
};
const getUserViaID = async (id) => {
    const users = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((r) => r.json());
    return {users};
};
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
export const fetchUserViaID = (id) => async (dispatch) => {
    dispatch({type: 'USERS/FETCH/START'});
    try {
        const {users} = await getUserViaID(id);
        dispatch({type: 'USERS/FETCH/SUCCESS', payload: users});
    } catch (e) {
        console.error(e);
        dispatch({type: 'USERS/FETCH/ERROR', payload: e});
    }
};
