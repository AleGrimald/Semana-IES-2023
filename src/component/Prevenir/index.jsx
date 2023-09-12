import Redes from '../Redes';
import Botones from '../Botones'
import Legislacion from '../Legislacion';
import Proyectos from '../Proyectos'
import './Prevenir.css'
import { useState } from 'react';

const Prevenir=(props)=>{
    const[legislacio, setLegislacion]=useState(false);
    const[proyecto, setProyecto]=useState(false);
    const ejecutarLegislacion=(event)=>{
        event.preventDefault();
        setLegislacion(!legislacio);
        setProyecto(false);
    }
    const ejecutarProyecto=(event)=>{
        event.preventDefault();
        setProyecto(!proyecto);
        setLegislacion(false);
    }
    return <section className='grooming'>
        <div>
            <h2 className='grooming_h2'>Grooming y Acoso Virtual</h2>
            <Redes/>
        </div>
        
        <div className='grooming_p1'>
            <p className='p1'>
                Los dispositivos, las plataformas y entornos digitales se convirtieron en espacios esenciales en la socialización de niñas, niñes, niños y adolescentes. Son espacios para el ejercicio de sus derechos, como jugar, comunicarse, educarse, informarse y participar, entre otros. Pero allí también pueden encontrarse con algunos riesgos y situaciones que afecten su integridad.
            </p>
            <p className='p1'>
                Es toda acción por la que una persona adulta contacta a una niña, un niño o adolescente a través de comunicaciones electrónicas, telecomunicaciones o cualquier otra tecnología de transmisión de datos para atentar contra su integridad sexual (<a href='https://www.argentina.gob.ar/normativa/nacional/ley-27590-345231/texto'>Ley N°27590</a>).
            </p>
            <p className='p1'>
                Muchas veces se realiza usando una <b>identidad falsa</b> y creando un <b>vínculo de confianza</b>, que puede ser difícil de reconocer como violencia en un primer momento. También puede ser alguien conocido del círculo íntimo, o un desconocido que no oculte su identidad.
            </p>
            <p className='p1'>
                Es importante saber que, aunque la violencia ocurra en forma virtual,<b>el daño que produce es real y es necesario intervenir</b> para restituir los derechos vulnerados.
            </p>
            <p className='p1'>
                Desde diciembre de 2013 el Código Penal establece que <b>el grooming <a href='https://www.argentina.gob.ar/normativa/nacional/ley-26904-223586'>es un delito</a></b> que puede tener una pena de prisión de 6 meses a 4 años. Además, puede ser la antesala a otros delitos, por ejemplo:
            </p>
            <ul className='lista_l1'>
                <li className='l1'>
                    Obtener material de abuso sexual contra las infancias, ya sea para archivar o para difundir o comercializar en redes de explotación sexual contra las infancias y adolescencias.
                </li>
                <li className='l1'>
                    Generar encuentros personales con sus víctimas con intenciones de cometer un abuso sexual físico.
                </li>
            </ul>
        </div>
        <iframe
            className='grooming_video'
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/O1bbS25JngQ?si=AQsUIGPHgScO9eVS" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        ></iframe>

        <div className='grooming_p2'>
            <p className='p2'>
                Para prevenir y luchar contra este delito penal, a través de la ley N°27.590 “Mica Ortega" se creó <b>Clic Derechos - Programa Nacional de Prevención y Concientización del Grooming o ciberacoso contra niñas, niños y adolescentes.</b>
            </p>
            <p className='p2'>
                La <b>Secretaría Nacional de Niñez, Adolescencia y Familia</b> (SENAF), como el órgano de aplicación de esta ley, genera estrategias para acompañar a las infancias y adolescencias en el uso de las pantallas, prevenir las violencias digitales y construir junto a toda la comunidad entornos seguros para el desarrollo de su ciudadanía digital.
            </p>
        </div>

        <div className='contenedor_btn'>
            <Botones
                clase='btn'
                img={"./conexion.svg"} 
                titulo={"Proyectos"}
                click={ejecutarProyecto}
            />
            <Botones
                clase='btn'
                img={"./justicia.svg"} 
                titulo={"Legislacion"}
                click={ejecutarLegislacion}
            />
        </div>
        {
            legislacio?<Legislacion/>:<></>
        }
        {
            proyecto?<Proyectos/>:<></>
        }
    </section>
}

export default Prevenir;