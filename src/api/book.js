import request from '@/utils/request'

export function getBooks() {
	return request({
			timeout: 50000,
			url: 'https://fe-interview-api.unnotech.com/books',
			method: 'get',
	})
}

export function getBookDetail(params) {
	return request({
		timeout: 50000,
		url: 'https://fe-interview-api.unnotech.com/profile',
		params: params,
		method: 'get',
	})
}

export function updateBook(id, book) {
	return request({
		timeout: 50000,
		url: `https://fe-interview-api.unnotech.com/profile/${id}`,
		data: book,
		method: 'PATCH'
	})
}