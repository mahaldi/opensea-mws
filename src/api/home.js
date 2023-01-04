import ApiCollection from './index'

export const loadHome = () => {
	const api = new ApiCollection()
	api.getTrendingCollection()
}
