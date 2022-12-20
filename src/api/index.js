import axios from 'axios'

const instance = axios.create({
	baseURL: "https://api.chainbase.online/",
	headers: {
		'Content-Type': 'application/json',
        'X-API-KEY': '2J7q2Mn4MxrLne8gCx2M00EnZre',
	},
})
export default instance
