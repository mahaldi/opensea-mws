import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_ENDPOINT,
	headers: {
		'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_API_KEY,
	},
})
export default instance
