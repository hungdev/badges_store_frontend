import axios from '@/services/Api';

import { REQUEST, SUCCESS, FAILURE } from '../utils/actionTypes';

export const ACTION_TYPES = {
  FETCH_CATEGORY: 'category/FETCH_CATEGORY',
  FETCH_CATEGORY_DETAIL: 'category/FETCH_CATEGORY_DETAIL',
  CREATE_CATEGORY: 'category/CREATE_CATEGORY',
  UPDATE_CATEGORY: 'category/UPDATE_CATEGORY',
  DELETE_CATEGORY: 'category/DELETE_CATEGORY',
  RESET: 'category/RESET',
  CHANGE_FIELD: 'category/CHANGE_FIELD'
};

const initialState = {
  loading: false,
  errorMessage: null,
  categories: [],
  category: null,
  categoryDetail: null,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

// Reducer

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CATEGORY_DETAIL):
    case REQUEST(ACTION_TYPES.FETCH_CATEGORY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_CATEGORY):
    case REQUEST(ACTION_TYPES.UPDATE_CATEGORY):
    case REQUEST(ACTION_TYPES.DELETE_CATEGORY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_CATEGORY_DETAIL):
    case FAILURE(ACTION_TYPES.FETCH_CATEGORY):
    case FAILURE(ACTION_TYPES.CREATE_CATEGORY):
    case FAILURE(ACTION_TYPES.UPDATE_CATEGORY):
    case FAILURE(ACTION_TYPES.DELETE_CATEGORY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CATEGORY):
      return {
        ...state,
        loading: false,
        categories: action.payload.data.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CATEGORY_DETAIL):
      return {
        ...state,
        loading: false,
        categoryDetail: action.payload.data.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_CATEGORY):
    case SUCCESS(ACTION_TYPES.UPDATE_CATEGORY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        category: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_CATEGORY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
      };
    case ACTION_TYPES.CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldData
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

const apiUrl = 'badges-categories';
// Actions

export const getCategories = (params) => {
  const requestUrl = `${apiUrl}`;
  return {
    type: ACTION_TYPES.FETCH_CATEGORY,
    payload: axios.get(requestUrl, { params })
  };
};

export const getCategoryDetail = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_DETAIL,
    payload: axios.get(requestUrl)
  };
};

export const createCategory = params => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CATEGORY,
    payload: axios.post(apiUrl, params)
  });
  dispatch(getCategory());
  return result;
};

export const updateCategory = params => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CATEGORY,
    payload: axios.put(apiUrl, params)
  });
  dispatch(getCategory());
  return result;
};

export const deleteCategory = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CATEGORY,
    payload: axios.delete(requestUrl)
  });
  dispatch(getCategory());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});

export const changeField = (fieldName, fieldData) => ({
  type: ACTION_TYPES.CHANGE_FIELD,
  fieldName,
  fieldData
});