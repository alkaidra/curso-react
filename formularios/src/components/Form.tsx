import styles from './Form.module.css';

const Form = () => {
    return (
        <div>
            <h1 className={styles.title}>Formulario</h1>
            <form className={styles}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <label className={styles.label} htmlFor="nome">Nome: </label>
                    <input className={styles} type="text" id='nome' />
                </div>
                <div>
                    <input className={styles.button} type="submit" value="Salvar" />
                </div>
            </form>
        </div>
    )
}

export default Form