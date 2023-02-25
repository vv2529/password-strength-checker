import { Color, Status } from './types'

const meterColorsMap: { readonly [key in Status]: [Color, Color, Color] } = {
	'': ['gray', 'gray', 'gray'],
	'too short': ['red', 'red', 'red'],
	easy: ['red', 'gray', 'gray'],
	medium: ['yellow', 'yellow', 'gray'],
	strong: ['green', 'green', 'green'],
}

export const getMeterColors = (status: Status) => meterColorsMap[status]
