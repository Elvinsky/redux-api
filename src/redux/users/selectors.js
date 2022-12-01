export const selectUsers = (store) => store.users.users;
export const selectUserViaID = (store, id) =>
    store.users.users.find((user) => user.id === id);
