
import axios from 'axios';


export const fetchAuthData = () => axios.get('/api/current_user');
export const handleToken = (token) => axios.post('/api/stripe', { token: token });
export const addSurvey = (survey) => axios.post('/api/surveys', survey);
export const fetchSurvey = () => axios.get('/api/surveys');
