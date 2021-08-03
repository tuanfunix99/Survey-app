
import * as Api from '../api/data';
import { authActions } from '../reducers/authReducer';

const fetchAuthData = () => async (dispatch) => {
    const { data } = await Api.fetchAuthData();
    return dispatch(authActions.fetchUser(data));
}

const handleToken = (token) => async (dispatch) => {
    const { data } = await Api.handleToken(token);
    return dispatch(authActions.handleToken(data));
}

const authAction= {
    fetchAuthData,
    handleToken,
}

export default authAction;