export const actions = {
	updateTrendingCollection: payload => ({
		type: 'UPDATE_TRENDING_COLLECTION',
		payload,
	}),
	loadTrendingCollection: () => ({
		type: 'LOAD_TRENDING_COLLECTION',
	}),
	failedTrendingCollection: () => ({
		type: 'FAILED_TRENDING_COLLECTION',
	})
}
