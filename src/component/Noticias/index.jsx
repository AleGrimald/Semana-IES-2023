import Noticia from '../Noticia';
import './Noticias.css';

const Noticias=(props)=>{
    const {datos}=props;
    return <section className='noticias'>
        {
            datos.map((dato, key)=>
                <Noticia
                 titulo={dato.h2} 
                 texto={dato.p} 
                 video={dato.video} 
                 fondo={dato.fondo}
                 img={dato.img}
                 link={dato.link}
                 clase={dato.clase}
                 key={key}
                />
            )
        }
        
    </section>
}

export default Noticias;