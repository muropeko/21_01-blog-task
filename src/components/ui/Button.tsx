import type { PropsWithChildren } from "react";
import styles from "./Button.module.css"

type ButtonVariant = "default" | "clear"

interface ButtonProps extends PropsWithChildren {
    onClick: () => void
    variant?: ButtonVariant
    disabled?: boolean
}


export const Button = ({ children, onClick, variant = "default", disabled }: ButtonProps) => {
    const className = `${styles.btn} ${variant === "clear" ? styles.clearButton : styles.searchButton}`;
    
    return (
        <button 
            type="button" 
            onClick={onClick} 
            className={className} 
            disabled={disabled}
        >
            {children}
        </button>
    );
};


