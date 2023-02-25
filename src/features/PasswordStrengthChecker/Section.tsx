import styles from './styles.module.scss'
import { Color } from './types'

type Props = {
	color: Color
}

const Section = ({ color }: Props) => {
	return <div className={`${styles['section']} ${styles[`bg-${color}`]}`}></div>
}

export default Section
