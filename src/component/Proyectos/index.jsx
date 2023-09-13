import './Proyectos.css'
import Redes from '../Redes'

const Proyectos=()=>{
    return <section className='proyecto'>
        <div className='proyecto_contenedor_titulo'>
            <h2 className='proyecto_h2'>Proyectos</h2>
            <Redes clase='redes'/>
        </div>

        <div className='proyecto_contenedor_texto'>
            <p className='proyecto_p'>
                A continuación, podés conocer un poco más sobre los proyectos que implementamos desde la SENAF, a veces en conjunto con otros actores, para prevenir y abordar el grooming y otras violencias digitales.
            </p>
        </div>
        
        <ul className='proyecto_contenedor_lista'>
            <li>
                <strong>Participación adolescente - Concurso RAP Digital</strong>
                <br/>
                Es un <a href="http://www.rap-digital.com/" target="_blank" rel="noreferrer">
                    concurso organizado por Unicef y Senaf
                </a>
                , con el apoyo de Faro Digital, que busca que adolescentes y jóvenes, de 12 a 21 años, alcen su voz sobre el grooming en formato de rap.  Invita a que armen una letra sobre grooming que pueda: generar conciencia sobre el tema, ayudar a otras personas a no vivir una situación de grooming, difundir los derechos que los chicos y las chicas tienen en Internet, y proponer buenas prácticas que nos permitan convivir mejor en entornos digitales.
            </li>
            <li>
                <strong>Capacitación a operadoras y operadores de la Línea 102</strong>
                <br/>
                Las operadoras y los operadores de la Línea 102 recibieron capacitaciones sobre grooming y otras violencias digitales y tienen la preparación necesaria poder dar respuestas a las consultas de las chicas y los chicos sobre el tema. Conocé la <a href="https://www.argentina.gob.ar/sites/default/files/2020/09/dgdi_2021_linea102_guia-violencia-digital_0.pdf">guía elaborada para los equipos</a>.
            </li>
            <li>
                <strong>Convocatoria a equipos de investigación</strong>
                <br/>
                La Senaf junto a CLACSO abrieron una  
                <a href="https://www.argentina.gob.ar/noticias/proyectos-ganadores-de-la-convocatoria-de-senaf-y-clacso"> convocatoria para equipos que investiguen
                </a>
                sobre: “Niñas, niños y adolescentes en el mundo digital: características, tendencias y desafíos durante y después de la pandemia”.
            </li>
        </ul>
        
    </section>
}
export default Proyectos;