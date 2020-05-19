import { $post } from '../utils/request';

export const getGreeting = () => $post('/mock/getGreeting');
