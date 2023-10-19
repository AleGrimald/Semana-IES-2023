import './Legislacion.css';
import Redes from '../Redes';
import Leyes from '../Leyes';

const Legislacion=(props)=>{
    const {datosRedes}=props;
    const leyes=[
        {
            h4:"Ley 27.590 Mica Ortega - Prevención y Concientización del grooming",
            p:"Sancionada en 2020",
            link1:"https://www.argentina.gob.ar/normativa/nacional/ley-27590-345231/texto",
            link2:"https://www.argentina.gob.ar/normativa/nacional/decreto-407-2022-368049/texto",
            a1:"Ver",
            a2:"Reglamentacion y anexo",
            a2style:"leyes_a2"
        },
        {
            h4:"Ley 27.436 Incorporación de la tenencia de Pornografía Infantil como delito al Código Penal Argentino",
            p:"Sancionada en 2018",
            link1:"https://www.argentina.gob.ar/normativa/nacional/309201/texto",
            a1:"Ver",
        },
        {
            h4:"Ley 26.904 Incorporación de la figura de grooming en el art 131 del Código Penal Argentino",
            p:"Sancionada en 2013",
            link1:"https://www.argentina.gob.ar/normativa/nacional/223586/texto",
            a1:"Ver"
        },
        {
            h4:"Ley 26.892 de Promoción de la Convivencia y Abordaje de la Conflictividad social en las Instituciones Educativas",
            p:"Sancionada en 2013",
            link1:"https://www.argentina.gob.ar/normativa/nacional/ley-26892-220645#:~:text=Resumen%3A,MODALIDADES%20DEL%20SISTEMA%20EDUCATIVO%20NACIONAL.",
            a1:"Ver",
        },
        {
            h4:"Ley 26.150 Programa Nacional de Educación Sexual Integral",
            p:"Sancionada en 2006",
            link1:"https://www.argentina.gob.ar/normativa/nacional/ley-26150-121222",
            a1:"Ver"
        },
        {
            h4:"Ley 26.061 de Protección Integral de los Derechos de las Niñas, Niños y Adolescentes",
            p:"Sancionada en 2005",
            link1:"https://www.argentina.gob.ar/normativa/nacional/110778/texto",
            a1:"Ver"
        },
        {
            h4:"Ley 26.388 de Delitos Informáticos",
            p:"Sancionada en 2003",
            link1:"https://www.argentina.gob.ar/normativa/nacional/ley-11179-16546/actualizacion#17",
            a1:"Ver",
        }
    ]
    return <section className='legislacion'>
        <div className='legislacion_contenedor_titulo'>
            <h2 className='legislacion_h2'>Legislacion</h2>
            
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

        <div className='legislacion_contenedor_texto'>
            <p className='legislacion_p'>
                Accedé a todas las leyes y normativas vigentes relacionadas con el grooming y otras violencias digitales.
            </p>
        </div>
        <div className='contenedor_leyes'>
            {
                leyes.map((ley, key)=>
                    <Leyes 
                        titulo={ley.h4} 
                        parrafo={ley.p} 
                        link1={ley.link1} 
                        link2={ley.link2}
                        a1={ley.a1}
                        a2={ley.a2}
                        a2style={ley.a2style}
                        key={key}
                    />
                )
            }
        </div>
        
    </section>
}
export default Legislacion;