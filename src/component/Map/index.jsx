import './Mapa.css';
import Iframe from '../Iframe';

const Map=(props)=>{
    const {coord}=props;
    return <section className='mapas'>
        <Iframe
            clase='mapa'
            link={coord}
            estilo={{boxShadow:"3px 3px 5px 5px #00000080"}} 
        /> 
    </section> 
}
export default Map;