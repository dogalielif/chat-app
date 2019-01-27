import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    getUsers
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getUsers() {
    return dispatch => {
        dispatch(request());

        userService.getUsers()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETUSERS_REQUEST } }
    function success(users) { return { type: userConstants.GETUSERS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETUSERS_FAILURE, error } }
}