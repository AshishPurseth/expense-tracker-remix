import styles from './modal.module.scss'

interface Props {
    children: React.ReactNode
}

export const Modal = ({ children }: Props) => {
    return (
        <section className={styles.modalBackdrop}>
            <section className={styles.modal}>{children}</section>
        </section>
    )
}
