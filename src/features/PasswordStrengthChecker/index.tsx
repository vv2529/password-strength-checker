import React, { useState } from 'react'
import Feedback from './Feedback'
import Meter from './Meter'
import styles from './styles.module.scss'
import { checkStatus } from './util'

const PasswordStrengthChecker = () => {
	const [password, setPassword] = useState('')

	const status = checkStatus(password)

	const onPasswordInput: React.FormEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.currentTarget.value)
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
