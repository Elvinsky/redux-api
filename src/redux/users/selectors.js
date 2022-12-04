export const selectUsers = (store) => store.users.users;
export const selectUsersError = (store) => store.users.error;
export const selectUsersLoading = (store) => store.users.loading;
export const selectUserViaID = (store, id) =>
    store.users.users.find((user) => user.id === id);
