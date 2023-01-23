import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_ENDPOINT,
	headers: {
		'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_API_KEY,
	},
})

class ApiCollections {
	constructor(props) {
		this.api = instance
		this.props = props
	}

	getTrendingCollection(chainId = 1, range = '24h', page = 1, limit = 10, sort = 'volume_desc') {
		const { loadTrendingCollection, updateTrendingCollection, failedTrendingCollection} = this.props
		loadTrendingCollection()
		return this.api.get(`collection/trending?chain_id=${chainId}&range=${range}&sort=${sort}&exchange_name=opensea&limit=${limit}&page=${page}`).then(res => updateTrendingCollection(res.data)).catch(failedTrendingCollection)
	}
}
export default ApiCollections
