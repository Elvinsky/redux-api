export const getAlbums = async () => {
    const albums = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
    ).then((r) => r.json());
    return {albums};
};
export const getPhotos = async () => {
    const photos = await fetch(
        `https://jsonplaceholder.typicode.com/photos`
    ).then((r) => r.json());
    return {photos};
};
export const getUsers = async () => {
    const users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then((r) => r.json());
    return {users};
};
