import './Banner.css'

function Banner(){
    return(
        <section className='banner__secao'>
            <img 
                src='./imagens/banner.png' 
                alt='Banner principal do OrganoSmite' 
                className='banner__imagem'>
            </img>
            <div className='banner__chamada'>
                <p className='banner__texto'>Bem-vindo&#40;a&#41; ao</p>
                <h1 className='banner__titulo'>Organo<span className='banner__titulo--amarelo'>Smite</span></h1>
                <p className='banner__texto'>Organize seu time e boa partida</p>
            </div>
        </section>
    )
}

export default Banner