import axios from '@/services/Api';

import { REQUEST, SUCCESS, FAILURE } from '../utils/actionTypes';

export const ACTION_TYPES = {
  SET_BADGE_SELECTED: 'badge/SET_BADGE_SELECTED',
  FETCH_BADGE: 'badge/FETCH_BADGE',
  FETCH_BADGE_DETAIL: 'badge/FETCH_BADGE_DETAIL',
  CREATE_BADGE: 'badge/CREATE_BADGE',
  UPDATE_BADGE: 'badge/UPDATE_BADGE',
  DELETE_BADGE: 'badge/DELETE_BADGE',
  RESET: 'badge/RESET',
  CHANGE_FIELD: 'badge/CHANGE_FIELD'
};

const initialState = {
  loading: false,
  errorMessage: null,
  badges: [],
  badge: null,
  badgeDetail: null,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
  badgeSelected: null
};

// Reducer

export default function badgeReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_BADGE_DETAIL):
    case REQUEST(ACTION_TYPES.FETCH_BADGE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_BADGE):
    case REQUEST(ACTION_TYPES.UPDATE_BADGE):
    case REQUEST(ACTION_TYPES.DELETE_BADGE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_BADGE_DETAIL):
    case FAILURE(ACTION_TYPES.FETCH_BADGE):
    case FAILURE(ACTION_TYPES.CREATE_BADGE):
    case FAILURE(ACTION_TYPES.UPDATE_BADGE):
    case FAILURE(ACTION_TYPES.DELETE_BADGE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_BADGE):
      return {
        ...state,
        loading: false,
        badges: action.payload.data.data?.rows,
      };
    case SUCCESS(ACTION_TYPES.FETCH_BADGE_DETAIL):
      return {
        ...state,
        loading: false,
        badgeDetail: action.payload.data.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_BADGE):
    case SUCCESS(ACTION_TYPES.UPDATE_BADGE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        badge: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_BADGE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
      };
    case ACTION_TYPES.SET_BADGE_SELECTED:
      return {
        ...state,
        badgeSelected: action.badgeSelected
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

const apiUrl = 'badges';
// Actions

export const getBadges = (params) => {
  const requestUrl = `${apiUrl}`;
  return {
    type: ACTION_TYPES.FETCH_BADGE,
    payload: axios.get(requestUrl, { params })
  };
};

export const getBadgeDetail = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_BADGE_DETAIL,
    payload: axios.get(requestUrl)
  };
};

export const createBadge = params => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_BADGE,
    payload: axios.post(apiUrl, params)
  });
  dispatch(getBadges());
  return result;
};

export const updateBadge = params => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_BADGE,
    payload: axios.put(apiUrl, params)
  });
  dispatch(getBadges());
  return result;
};

export const deleteBadge = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_BADGE,
    payload: axios.delete(requestUrl)
  });
  dispatch(getBadges());
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

export const setBadgeSelected = (badge) => ({
  type: ACTION_TYPES.SET_BADGE_SELECTED,
  badgeSelected: badge
});