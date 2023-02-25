import { Status, Strength } from './types'

export const checkStrength = (password: string): Strength => {
	const matches = {
		letter: /[a-zA-Z]/.test(password),
		number: /\d/.test(password),
		symbol: /[^a-zA-Z0-9]/.test(password),
	}

	const matchCount = Object.values(matches).filter((match) => match).length
	const matchMap: Strength[] = ['', 'easy', 'medium', 'strong']
	return matchMap[matchCount]
}

export const isTooShort = (password: string): boolean => password.length < 8

export const checkStatus = (password: string): Status =>
	!password ? '' : isTooShort(password) ? 'too short' : checkStrength(password)
