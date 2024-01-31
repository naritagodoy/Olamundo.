import BotaoPrincipal from 'componentes/Botao/BotaoPrincipal';
import Style from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada (){

    const navegar = useNavigate ();

    return (
    
    <>
        <div className={Style.conteudoContainer}>

            <h1 className={Style.texto404}>404</h1>
            <h2 className={Style.titulo}>Ops! Página não encontrada...</h2>
            <p className={Style.paragrafo}>Tem certeza de que era isso que você estava procurando?Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>

            <div 
            className={Style.botaoContainer}
            onClick={() => navegar(-1)}
            >

            <BotaoPrincipal tamanho="lg"          
            >Voltar</BotaoPrincipal>

            </div>

            <img className={Style.imagemCachorro} src= {erro404} alt='Imagem de um cachorro'/>         

        </div>

        <div className={Style.espacoEmBranco}></div>

    </>
    )
}