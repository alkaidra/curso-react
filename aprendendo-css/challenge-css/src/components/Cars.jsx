import styles from "./Cars.module.css";

const Cars = ({ marca, cor }) => {
  return (
    <div>
        <h2 className={styles.title_red}>{ marca }</h2>
        <p>{ cor }</p>
    </div>
  )
}

export default Cars