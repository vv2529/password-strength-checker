import styles from './styles.module.scss'
import { Status } from './types'
import { getStatusColor, getTip } from './feedback.util'

type Props = {
	status: Status
}

const Feedback = ({ status }: Props) => {
	const statusColor = getStatusColor(status)
	const tip = getTip(status)

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
