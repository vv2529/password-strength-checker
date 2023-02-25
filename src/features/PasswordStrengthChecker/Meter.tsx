import Section from './Section'
import styles from './styles.module.scss'
import { Color, Status } from './types'

type Props = {
	status: Status
}

const Meter = ({ status }: Props) => {
	const colors: Color[] = ['gray', 'gray', 'gray']

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
