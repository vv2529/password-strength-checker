import styles from './styles.module.scss'
import { Color, Height } from './types'

type Props = {
	color: Color
	height: Height
}

const Section = ({ color, height }: Props) => {
	return <div className={`${styles['section']} ${styles[`bg-${color}`]} ${styles[height]}`}></div>
}

export default Section
