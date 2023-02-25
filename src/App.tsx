import styles from './App.module.scss'
import PasswordStrengthChecker from './features/PasswordStrengthChecker'

const App = () => {
	return (
		<div className={styles['app']}>
			<header className={styles['header']}>
				<h1 className={styles['header-title']}>Password Strength Checker</h1>
			</header>
			<main className={styles['main']}>
				<PasswordStrengthChecker />
			</main>
			<footer className={styles['footer']}>
				Made by{' '}
				<a
					className={styles['footer-link']}
					href="https://github.com/vv2529"
					target="_blank"
					rel="noreferrer"
				>
					@vv2529
				</a>
			</footer>
		</div>
	)
}

export default App
