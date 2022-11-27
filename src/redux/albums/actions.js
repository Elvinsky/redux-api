const getAlbums = async () => {
    const albums = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
    ).then((r) => r.json());
    return {albums};
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
