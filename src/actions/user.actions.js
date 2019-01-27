import { userService } from "../services";
import { userConstants } from "../constants";

export const userActions = {
  getUsers
};

function getUsers() {
  return dispatch => {
    dispatch(request());

    userService.getUsers()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      );
  };

  function request() {
    return { type: userConstants.GETUSERS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETUSERS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETUSERS_FAILURE, error };
  }
}
