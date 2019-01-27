import query from '../api/query';

export const userService = {
    getUsers
};

function getUsers() {
   query('/api/users').then((resp) => {console.log(resp)});
}
