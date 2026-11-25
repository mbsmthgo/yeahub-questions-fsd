import {type ComponentPropsWithoutRef, type ReactNode} from "react";
import styles from './Button.module.css'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'filter';
    size?: 'sm' | 'md' | 'lg';
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export function Button({variant = 'primary', size = 'md', leftIcon, rightIcon,
                                   children, type = 'button', className, ...props}: ButtonProps) {
    return (
        <button type={type} className={`${styles.btn} ${styles[`btn_${variant}`]} ${styles[`btn_${size}`]} ${className || ''}`}
                {...props}>
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    )
}