import React from "react";
import styles from '../../../assets/styles/Button.module.css';

interface ButtonProps {
    label: string;
    onClickCallback: () => void;
    disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClickCallback, disable }) => {
    return (
        <button
            className={styles.button}
            onClick={onClickCallback}
            disabled={disable}
        >
            {label}
        </button>
    );
};

export default Button;
