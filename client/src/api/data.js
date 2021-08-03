
import axios from 'axios';


export const fetchAuthData = () => axios.get('/api/current_user');
export const handleToken = (token) => axios.post('/api/stripe', { token: token });

