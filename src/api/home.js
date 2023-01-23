import ApiCollection from './index'

export const loadHome = (props) => {
	const api = new ApiCollection(props)
	api.getTrendingCollection()
}
