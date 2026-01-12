import styles from '../button/button.module.css'

function Button(props) {
    return ( 
        <button className={styles.botao}>
            {props.children}
        </button>
    );
}

export default Button;