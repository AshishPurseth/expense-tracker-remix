import {Form as RemixForm} from '@remix-run/react'
import type {FormProps} from '@remix-run/react'
import styles from './form.module.scss'

export const Form = ({children, ...props}: FormProps) => {
    return(
        <RemixForm {...props} className={styles.form}>
            {children}
        </RemixForm>
    )
}