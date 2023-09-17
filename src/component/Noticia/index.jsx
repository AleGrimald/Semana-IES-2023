import './Noticia.css';

const Noticia=(props)=>{
    const {titulo, texto, video, img, link, clase ,key}=props;
    return <section className="contenedor_principal" key={key}>            
        {
            img !=null
            ?<div className={clase}>
                <div className='contenedor_titulo_i'>
                    <h2 className='noticia_h2'>{titulo}</h2>
                    <p className='noticia_p'>{texto}</p>
                </div>
                <a className='noticia_a' href={link}>
                    <img className='noticia_img' src={img} alt="Soy una foto"/>
                </a>
            </div>:<></>
        }
        {
            video!=null
            ?<div className={clase}>
                <div className='contenedor_titulo_v'>
                    <h2 className='noticia_h2'>{titulo}</h2>
                    <p className='noticia_p'>{texto}</p>
                </div>
                <iframe
                    className='noticia_video' 
                    src={video} 
                    title="YouTube video player" 
                    allow="
                    accelerometer;
                    autoplay;
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share
                    " 
                    allowFullscreen
                > </iframe>
            </div>:<></>
        }
    </section>
}

export default Noticia;