
import * as Api from '../api/data';
import { surveyActions } from '../reducers/surveyReducer';

const addSurvey = (survey, history) => async (dispatch) => {
    const { data } = await Api.addSurvey(survey);

    history.push('/surveys');

    dispatch(surveyAction.addSurvey(data));
}

const fetchSurvey = () => async (dispatch) => {
    try{
        const { data } = await Api.fetchSurvey();
        return dispatch(surveyActions.fetchSurveys(data));
    } catch (error) {
        console.log(error.message);
    }
}

const surveyAction = {
    addSurvey,
    fetchSurvey,
}

export default surveyAction;