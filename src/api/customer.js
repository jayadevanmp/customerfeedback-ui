import axios from 'axios';

export const getCustomer = () => {
  return axios.get('/feedback/1')
}

export const saveFeedback = ({data}) => {
  return axios.post('/feedback', data)};