import { NEW_FILTER } from '../actionsTypes';
import { FILTER } from "../../constants"

const initialState = FILTER.ALL

const Filter = (state = initialState, action) => {
  switch(action.type) {
    case NEW_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default Filter;