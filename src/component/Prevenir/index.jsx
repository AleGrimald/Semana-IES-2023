import './Prevenir.css';
import Redes from '../Redes';
import Botones from '../Botones';
import Legislacion from '../Legislacion';
import Proyectos from '../Proyectos';
import Li from '../Li';
import Iframe from '../Iframe';

import { useState } from 'react';

const Prevenir=(props)=>{
    const[legislacio, setLegislacion]=useState(false);
    const[proyecto, setProyecto]=useState(false);

    const {datosRedes,datosTexto,datosTexto2,datosTexto3}= props.datosPrevenir;
    const {h2,p,video,parrafo}=datosTexto;
    const {p1,p2,p3,p4,p5,p6,p7,titulo}=datosTexto2;
    const {parrafo1, parrafo2}=datosTexto3;
    
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
    
    return <section className='prevenir'>
        <div className='contenedor_estafa'>
            <div className='estafa_titulo'>
                <h2 className='estafa_h2'>{h2}</h2>
                {
                    datosRedes.map(dato=>
                        <Redes
                            clase='redes estafa_redes'
                            elementWpFb={dato.elementWpFb} 
                            intersectadoWpFb={dato.intersectadoWpFb}
                            animacion={dato.animacion}
                            animacion2={dato.animacion2} 
                        />
                    )
                }
            </div>
            
            <ul className='estafa_ul'>
                {
                    parrafo.map((p, key)=><Li clase={'l1'} texto={p} key={key}/>)
                }
                <p className='p1'>{p}</p> 
            </ul>

            <div className='contenedor_video'>
                <h2 className='estafa_h2'>{video.h2}</h2>
                <div className='estafa_p_video'> 
                    <p className='p_video'>{video.p}</p>
                </div>
                <Iframe
                    estilo={{width:"100%", height:"30rem", padding:".1rem"}}
                    clase='grooming_video'
                    link={video.link} 
                />
            </div>
        </div> 
            
        <div className='contenedor_grooming'>
            <h2 className='grooming_h2'>{titulo}</h2>
            <div className='grooming_texto1'>
                <p className='grooming_p1'>{p1}</p>
                <p className='grooming_p1'>{p2.p1}<a href={p2.a}>{p2.p2}</a></p>
                <p className='grooming_p1'>{p3.p1}<b>{p3.b1}</b>{p3.p2}<b>{p3.b2}</b>{p3.p3}</p>
                <p className='grooming_p1'>{p4.p1}<b>{p4.b1}</b>{p4.p2}</p>
                <p className='grooming_p1'>{p5.p1} <b>{p5.b1.p1} <a href={p5.b1.a}>{p5.b1.p2}</a></b>{p5.p2}</p>
                <ul className='grooming_ul'>
                    <Li texto={p6} clase={"li"}/>
                    <Li texto={p7} clase={"li"}/>
                </ul>
            </div>
            <Iframe
                estilo={{width:"100%", height:"30rem", padding:".1rem"}}
                clase='grooming_video'
                link="https://www.youtube.com/embed/O1bbS25JngQ?si=AQsUIGPHgScO9eVS"
            />
            
            <div className='grooming_texto1'>
                <p className='grooming_p1'>
                    {parrafo1.p1}<b>{parrafo1.b1}</b>
                </p>
                <p className='grooming_p1'>
                    {parrafo2.p1}<b>{parrafo2.b1}</b>{parrafo2.p2}
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
                legislacio?<Legislacion datosRedes={datosRedes}/>:<></>
            }
            {
                proyecto?<Proyectos datosRedes={datosRedes}/>:<></>
            }
        </div>
    </section>
}

export default Prevenir;