import axios from 'axios';

export const fetchData = () => async (dispatch) => {
  dispatch({ type: 'LOADING_DATA' });
  try {
    const res = await axios.get('your-api-url');
    dispatch({ type: 'FETCH_DATA', payload: res.data });
  } catch (err) {
    dispatch({ type: 'ERROR', payload: err.message });
  }
};
