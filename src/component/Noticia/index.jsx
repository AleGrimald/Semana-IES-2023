import './Noticia.css';
import Iframe from '../Iframe';

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
                <Iframe
                    clase='noticia_video'
                    link={video} 
                />
                
            </div>:<></>
        }
    </section>
}

export default Noticia;