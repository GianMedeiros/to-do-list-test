import styles from './SayMyName.module.css';

function SayMyName ({nome}) {

    return (<div className={styles.SayMyName__conteiner}>
        <p className={styles.SayMyName__text}>Olá {nome}, tudo bem?</p>


    </div>);
}

export default SayMyName