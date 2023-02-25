import { Color, Status } from './types'

const statusColorMap: { readonly [key in Status]: Color } = {
	'': 'gray',
	'too short': 'red',
	easy: 'red',
	medium: 'yellow',
	strong: 'green',
}

export const getStatusColor = (status: Status) => statusColorMap[status]

export const getTip = (status: Status): string => {
	switch (status) {
		case 'too short':
			return 'A strong password must be at least 8 characters long.'
		case 'easy':
		case 'medium':
			return 'A strong password must contain letters, numbers, and symbols.'
		default:
			return ''
	}
}
