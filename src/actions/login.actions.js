import { loginConstants } from '../constants';
import { loginService } from '../services';
import { history } from '../helpers';

export const loginActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        loginService.login(username, password)
            .then(
                user => { 
                    user.id = 1;
                    dispatch(success(user));
                    history.push('/home');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: loginConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: loginConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }
}

function logout() {
    loginService.logout();
    return { type: loginConstants.LOGOUT };
}
