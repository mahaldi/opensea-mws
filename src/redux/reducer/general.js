const general = (state = {}, { type, payload }) => {
  switch (type) {
		case 'LOAD_TRENDING_COLLECTION':
			return { ...state, trendingCollection: { loading: true, error: false }}
    case 'UPDATE_TRENDING_COLLECTION':
      return { ...state, trendingCollection: { loading: false, data: payload, error: false } }
		case 'FAILED_TRENDING_COLLECTION':
			return { ...state, trendingCollection: { loading: false, error: true }}
    default:
      return state
  }
}

export default general
