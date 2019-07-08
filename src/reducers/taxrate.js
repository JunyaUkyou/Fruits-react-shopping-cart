import { WAIT_TAX_RATE, GET_TAX_RATE } from '../actions'

const initialState = []

const taxrate = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAX_RATE:
      return action.response
    case WAIT_TAX_RATE:
      return state    
    default:
      return state
  }
}

export default taxrate
