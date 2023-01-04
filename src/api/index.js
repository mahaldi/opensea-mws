import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_ENDPOINT,
	headers: {
		'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_API_KEY,
	},
})

class ApiCollections {
	constructor() {
		this.api = instance
	}

	getTrendingCollection() {
		return this.api.get(`collection/trending?chain_id=1&range=1h&sort=volume_desc&exchange_name=opensea&limit=20&page=1`)
	}
}
export default ApiCollections
