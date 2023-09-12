import Redes from '../Redes';
import './Tarjetas.css'

const Tarjetas = (props)=>{
    const {tarjetas}=props;
    
    

    return <section className='contenedor_tarjeta'>
        <section className='contenedor'>
            <div class="contenedor_titulo">
                <h2 className="titulo_h2">¿Qué es un Malware?</h2>
                <p className="titulo_p">
                    El término malware, software malicioso o virus informático hace referencia a un programa diseñado para infiltrarse en el sistema operativo de un dispositivo (tales como smartphones android y apple, computadoras, tablets) y alterar su funcionamiento. 
                    Este tipo de programas maliciosos son utilizados por ciberdelincuentes para robar información personal, contraseñas, archivos del disco duro, números de tarjetas de crédito y más. En la actualidad, el malware constituye uno de los ataques cibernéticos más frecuentes y, por tanto, representa un gran riesgo para la ciberseguridad de los usuarios.
                </p>
            </div>
            <div className='contenedor_redesiframe'>
                <iframe 
                    width="540" 
                    height="300" 
                    src="https://www.youtube.com/embed/HuasitV4lcw?si=zSltfG3YkPRTR5gS" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="
                        accelerometer;
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share
                    " 
                    allowfullscreen
                >
                </iframe>
                <Redes/>
            </div>
            
        </section>
        <div className='contenedor_subtitulo'>
            <h3 className='titulo_h3'>Tipos de Maleware </h3>
            <p>Existen diversos tipos de Maleware, entre los mas comunes estan:</p>
        </div>
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
                    >
                        <h4 style={{color:tarjeta.color}}className='tarjeta_titulo'>{tarjeta.titulo}</h4>
                        <p  style={{color:tarjeta.color}}className="tarjeta_texto">{tarjeta.texto}</p>
                    </div>
                    <img className="imagen" src={tarjeta.img} style={{backgroundColor:tarjeta.color}} alt="Imagen representativa de los Malewares"/>
                </section>
            )
        }
    </section>
}

export default Tarjetas;