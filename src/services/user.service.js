import query from '../api/query';

export const userService = {
    getUsers
};

function getUsers() {
    return query.get('/api/users');
 }
 