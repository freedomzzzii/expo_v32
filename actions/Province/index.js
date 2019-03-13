import { GEOLOCATION_API } from 'react-native-dotenv';

export const GET_PROVINCE_SUCCESS = 'GET_PROVINCE_SUCCESS';
export const GET_PROVINCE_FAILURE = 'GET_PROVINCE_FAILURE';

export function fetchGetProvince() {
  return async dispatch => {
    try {
      const res = await fetch(`${GEOLOCATION_API}/Provinces`);
      const data = await res.json();
      if (res.status === 200) {
        return dispatch({
          type: GET_PROVINCE_SUCCESS,
          data,
          status: res.status,
        });
      }

      return dispatch({
        type: GET_PROVINCE_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        type: GET_PROVINCE_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}
