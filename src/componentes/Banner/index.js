import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minhaFoto.png';


export default function Banner(){
    return (
        <div className={styles.banner}>

            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                Com uma experiência de 7 anos trabalhando na área hospitalar, optei por deixar minha carreira na área da saúde para me redescobrir no mundo da tecnologia e programação.
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} alt='Imagem de um circulo decorativo' src={circuloColorido}
                aria-hidden={true}
                />
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto da Narita'/>

            </div>

        </div>
    )
}