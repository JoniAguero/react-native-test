const makeType = mod => type => `${mod}/${type}`

const UsersType = makeType('USERS')
export const FETCH_USERS_START = UsersType('FETCH START)');
export const FETCH_USERS_SUCCESS = UsersType('FETCH SUCCESS');
export const FETCH_USERS_ERROR = UsersType('FETCH ERROR');
