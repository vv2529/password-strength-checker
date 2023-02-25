import React, { useState } from 'react'
import Section from './Section'
import styles from './styles.module.scss'
import { Color, Output } from './types'

const PasswordStrengthChecker = () => {
	const [password, setPassword] = useState('')

	const sectionColors: Color[] = ['gray', 'gray', 'gray']
	const output: Output = 'easy'
	const outputColor: Color = 'red'
	const tip = 'A strong password must contain letters, numbers, and symbols.'

	const onPasswordInput: React.FormEventHandler<HTMLInputElement> = (e) => {
		const newPassword = e.currentTarget.value
		setPassword(newPassword)
	}

	return (
		<div className={styles['checker']}>
			<input
				type="text"
				className={styles['input']}
				aria-label="Type in your password"
				placeholder="Type in your password..."
				value={password}
				onInput={onPasswordInput}
			/>
			<div className={styles['sections']}>
				<Section color={sectionColors[0]} />
				<Section color={sectionColors[1]} />
				<Section color={sectionColors[2]} />
			</div>
			{output && (
				<div className={styles['feedback']}>
					<output className={`${styles['output']} ${styles[`text-${outputColor}`]}`}>
						{output}
					</output>
					{tip && <div className={styles['tip']}>{tip}</div>}
				</div>
			)}
		</div>
	)
}

export default PasswordStrengthChecker
