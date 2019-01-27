import { userConstants } from '../constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETUSERS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETUSERS_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETUSERS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}