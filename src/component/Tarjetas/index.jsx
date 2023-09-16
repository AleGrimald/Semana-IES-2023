import Redes from '../Redes';
import './Tarjetas.css'

const Tarjetas = (props)=>{
    const {tarjetas}=props;
    const {datTarjeta}=props.titulosDatos;
    
    return <section className='contenedor_tarjeta' id='malware'>
        {
            datTarjeta.map(dato=>
                <>
                    <section className='contenedor'>
                        <div className="contenedor_titulo">
                            <h2 className="titulo_h2">{dato.h2}</h2>
                            <p className="titulo_p">{dato.p}</p>
                        </div>
                        <div className='contenedor_redesiframe'>
                            <iframe 
                                width="540" 
                                height="300" 
                                src="https://www.youtube.com/embed/HuasitV4lcw?si=zSltfG3YkPRTR5gS" 
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
                                allowFullScreen
                            >
                            </iframe>
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
            tarjetas.map((tarjeta, key)=>
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
                        key={key+1}
                    >
                        <h4 style={{color:tarjeta.color}}className='tarjeta_titulo'>{tarjeta.titulo}</h4>
                        <p  style={{color:tarjeta.color}}className="tarjeta_texto">{tarjeta.texto}</p>
                    </div>
                    <img
                        key={key+2}
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