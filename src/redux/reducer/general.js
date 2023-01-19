const general = (state = {}, { type, payload }) => {
  switch (type) {
    case 'UPDATE_TRENDING_COLLECTION':
      return { ...state, trendingCollection: payload }
    default:
      return state
  }
}

export default general
