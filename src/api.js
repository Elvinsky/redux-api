const API_URL = 'https://jsonplaceholder.typicode.com/';

export const getAlbums = async () => {
    const albums = await fetch(API_URL + 'albums').then((r) => r.json());
    return {albums};
};
export const getPhotos = async () => {
    const photos = await fetch(API_URL + 'photos').then((r) => r.json());
    return {photos};
};
export const getUsers = async () => {
    const users = await fetch(API_URL + 'users').then((r) => r.json());
    return {users};
};
