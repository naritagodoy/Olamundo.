
import Styles from './Post.module.css';

export default function PostModelo ({fotoCapa, titulo, children})

{
    return (
        <article className={Styles.postModeloContainer}>
            <div className={Styles.fotoCapa}
            style={{backgroundImage: `url(${fotoCapa})`}}
            ></div>
            
            <h2 className={Styles.titulo}>
                {titulo}
            </h2>

            <div className={Styles.postConteudoContainer}>
                {children}

            </div>
           
        </article>
    )

}