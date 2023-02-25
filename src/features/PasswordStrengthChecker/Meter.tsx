import Section from './Section'
import styles from './styles.module.scss'
import { Status } from './types'
import { getMeterColors } from './meter.util'

type Props = {
	status: Status
}

const Meter = ({ status }: Props) => {
	const colors = getMeterColors(status)

	return (
		<div>
			<div className={styles['meter']}>
				<Section color={colors[0]} height="small" />
				<Section color={colors[1]} height="medium" />
				<Section color={colors[2]} height="tall" />
			</div>
		</div>
	)
}

export default Meter
