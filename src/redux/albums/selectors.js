export const selectAlbums = (store) => store.albums.albums;
export const selectPhotos = (store) => store.albums.photos;
export const selectAlbumsViaUserID = (store, id) =>
    store.albums.albums.filter((album) => album.userId === id);
export const selectPhotosViaAlbumID = (store, id) =>
    store.albums.photos.filter((photo) => photo.albumId === id);
export const selectAlbumViaID = (store, id) =>
    store.albums.albums.find((album) => album.id === id);
