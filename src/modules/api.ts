import HttpClient from './http'

const api = new HttpClient('')

const getLatestMediums = async () => {
	try {
		const { data } = await api.get('https://v1.nocodeapi.com/amirzenoozi/medium/pdcAABzgJCHbJnoJ')
		return data
	} catch (err: any) {
		console.log('Error', err)
		throw err
	}
}

export {
	getLatestMediums,
}
