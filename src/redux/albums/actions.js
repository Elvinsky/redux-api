import {getAlbums, getPhotos} from '../../api';

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
export const fetchPhotos = () => async (dispatch) => {
    dispatch({type: 'PHOTOS/FETCH/START'});
    try {
        const {photos} = await getPhotos();
        dispatch({type: 'PHOTOS/FETCH/SUCCESS', payload: photos});
    } catch (e) {
        console.error(e);
        dispatch({type: 'PHOTOS/FETCH/ERROR', payload: e});
    }
};
