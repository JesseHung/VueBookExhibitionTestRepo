import request from '@/utils/request'

export function getBooks() {
	return request({
			timeout: 50000,
			url: 'https://fe-interview-api.unnotech.com/books',
			method: 'get',
	})
}