import { login } from '../constants/initialState'
import * as types from '../constants/types'

export default (state = login, action) => {
  switch (action.types) {
    case types.LOGIN_AUTHENTICATED:
      return { ...state, isAuthenticated: true }
    case types.LOGIN_UNAUTHENTICATED:
      return { ...state, isAuthenticated: false, error: action.payload }
    default:
      return state
  }
}
