import { loginConstants } from '../constants';

export function users(state = {}, action) {
  switch (action.type) {
    case loginConstants.GETUSERS_REQUEST:
      return {
        loading: true
      };
    case loginConstants.GETUSERS_SUCCESS:
      return {
        items: action.users.data
      };
    case loginConstants.GETUSERS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}