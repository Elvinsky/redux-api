const getAlbums = async () => {
    const albums = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
    ).then((r) => r.json());
    return {albums};
};
const getAlbumsViaUserID = async (id) => {
    const albums = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
    ).then((r) => r.json());
    return {albums};
};
const getAlbumsViaID = async (id) => {
    const albums = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
    ).then((r) => r.json());
    return {albums};
};
const getPhotos = async (id) => {
    const photos = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    ).then((r) => r.json());
    return {photos};
};
export const fetchAlbums = () => async (dispatch) => {
    dispatch({type: 'ALBUMS/FETCH/START'});
    try {
        const {albums} = await getAlbums();
        dispatch({type: 'ALBUMS/FETCH/SUCCESS', payload: albums});
    } catch (e) {
        console.error(e);
        dispatch({type: 'ALBUMS/FETCH/ERROR', payload: e});
    }
};
export const fetchAlbumsViaUserID = (id) => async (dispatch) => {
    dispatch({type: 'ALBUMS/FETCH/START'});
    try {
        const {albums} = await getAlbumsViaUserID(id);
        dispatch({type: 'ALBUMS/FETCH/SUCCESS', payload: albums});
    } catch (e) {
        console.error(e);
        dispatch({type: 'ALBUMS/FETCH/ERROR', payload: e});
    }
};
export const fetchAlbumsViaID = (id) => async (dispatch) => {
    dispatch({type: 'ALBUMS/FETCH/START'});
    try {
        const {albums} = await getAlbumsViaID(id);
        dispatch({type: 'ALBUMS/FETCH/SUCCESS', payload: albums});
    } catch (e) {
        console.error(e);
        dispatch({type: 'ALBUMS/FETCH/ERROR', payload: e});
    }
};
export const fetchPhotos = (id) => async (dispatch) => {
    dispatch({type: 'PHOTOS/FETCH/START'});
    try {
        const {photos} = await getPhotos(id);
        dispatch({type: 'PHOTOS/FETCH/SUCCESS', payload: photos});
    } catch (e) {
        console.error(e);
        dispatch({type: 'PHOTOS/FETCH/ERROR', payload: e});
    }
};
