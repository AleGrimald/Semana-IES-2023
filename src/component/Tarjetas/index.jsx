import './Tarjetas.css';
import Redes from '../Redes';
import Iframe from '../Iframe'


const Tarjetas = (props)=>{
    
    const {datoTexto,datosTarjetas}= props.datosMalware
    
    return <section className='contenedor_tarjeta' id='malware'>
        {
            datoTexto.map(dato=>
                <>
                    <section className='contenedor'>
                        <div className="contenedor_titulo">
                            <h2 className="titulo_h2">{dato.h2}</h2>
                            <p className="titulo_p">{dato.p}</p>
                        </div>
                        <div className='contenedor_redesiframe'>
                            <Iframe
                                ancho="540"
                                alto="300"
                                link="https://www.youtube.com/embed/HuasitV4lcw?si=zSltfG3YkPRTR5gS"
                                clase="iframe"
                            />
                
                            <Redes
                             elementWpFb={dato.elementWpFb} 
                             intersectadoWpFb={dato.intersectadoWpFb}
                             animacion={dato.animacion}
                             animacion2={dato.animacion2} 
                             clase='redes'
                            />
                        </div>
                    </section>

                    <div className='contenedor_subtitulo'>
                        <h3 className='titulo_h3'>{dato.h3}</h3>
                        <p>{dato.p2}</p>
                    </div>
                </>
            )
        }
        
        {
            datosTarjetas.map((tarjeta, key)=>
                <section className={tarjeta.tarjeta} key={key}>
                    <div 
                        className={tarjeta.clase} 
                        ref={tarjeta.referencia} 
                        style={
                            {
                                animation: tarjeta.intersector?tarjeta.animacion:<></>,
                                backgroundColor: tarjeta.fondo,
                                boxShadow: tarjeta.sombra
                            }
                        }
                    >
                        <h4 style={{color:tarjeta.color}}className='tarjeta_titulo'>{tarjeta.titulo}</h4>
                        <p  style={{color:tarjeta.color}}className="tarjeta_texto">{tarjeta.texto}</p>
                    </div>
                    <img
                        className="imagen" 
                        src={tarjeta.img} 
                        style={{backgroundColor:tarjeta.color}} 
                        alt="Imagen representativa de los virus informaticos"
                    />
                </section>
            )
        }
    </section>
}

export default Tarjetas;