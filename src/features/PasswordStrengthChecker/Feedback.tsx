import styles from './styles.module.scss'
import { Color, Status } from './types'

type Props = {
	status: Status
}

const Feedback = ({ status }: Props) => {
	const statusColor: Color = 'red'
	const tip = 'A strong password must contain letters, numbers, and symbols.'

	return (
		<div>
			{status && (
				<div className={styles['feedback']}>
					<output className={`${styles['output']} ${styles[`text-${statusColor}`]}`}>
						{status}
					</output>
					{tip && <div className={styles['tip']}>{tip}</div>}
				</div>
			)}
		</div>
	)
}

export default Feedback
