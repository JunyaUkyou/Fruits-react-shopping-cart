import { CHANGELANG } from '../actions'

const initialState = {
  select:['日本語','English'],
  current:'日本語'
};

const lang = (state = initialState, action) => {
  switch (action.type) {
    case CHANGELANG:
      return {...state,current:action.payload}
    default:
      return state
  }
}

export default lang
