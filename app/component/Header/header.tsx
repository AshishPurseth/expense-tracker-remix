import { NavLink } from '@remix-run/react'
import styles from './header.module.scss'

export const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <img
                className={styles.logo}
                src="pursethLOGO.png"
                alt="logo"
            />
            <nav className={styles.navigation}>
                <NavLink
                    to="/"
                    className={styles.link}>
                    Home
                </NavLink>
                <NavLink
                    to="/market"
                    className={styles.link}>
                    Market
                </NavLink>
            </nav>
        </header>
    )
}
