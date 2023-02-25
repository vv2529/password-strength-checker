import styles from './styles.module.scss'
import { Status } from './types'
import { getStatusColor, getTip } from './feedback.util'
import { SlInfo } from 'react-icons/sl'

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
					{tip && (
						<div className={styles['tip']}>
							<SlInfo className={styles['tip-icon']} />
							<div className={styles['tip-text']}>{tip}</div>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Feedback
