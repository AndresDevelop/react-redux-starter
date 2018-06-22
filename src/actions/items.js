export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const FETCH_ITEMS_LOADING = 'FETCH_ITEMS_LOADING';

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items }
});

export const fetchItemsError = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});

export const fetchItemsLoading = bool => ({
  type: FETCH_ITEMS_LOADING,
  payload: { bool }
});

export const fetchItems = url => {
  return dispatch => {
    dispatch(fetchItemsLoading(true));
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchItemsSuccess(json))
      })
      .catch(error => dispatch(fetchItemsError(error)));
  };
}

// Handle HTTP errors since fetch won't.
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}
