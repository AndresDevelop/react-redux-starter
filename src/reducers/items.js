import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_LOADING
} from '../actions/items';

const initialState = {
  items: [],
  error: null,
  loading: false
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS: 
      return Object.assign({}, state, { items: action.payload.items, loading: false });
    case FETCH_ITEMS_LOADING:
      return Object.assign({}, state, { items: [], loading: true });
    case FETCH_ITEMS_FAILURE:
      return Object.assign({}, state, { error: action.payload.error });
    default:
      return state;
  }
}
