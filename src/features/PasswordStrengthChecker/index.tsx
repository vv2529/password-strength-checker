import React, { useState } from 'react'
import Feedback from './Feedback'
import Meter from './Meter'
import styles from './styles.module.scss'
import { Status } from './types'

const PasswordStrengthChecker = () => {
	const [password, setPassword] = useState('')

	const status: Status = 'easy'

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
			<Meter status={status} />
			<Feedback status={status} />
		</div>
	)
}

export default PasswordStrengthChecker
