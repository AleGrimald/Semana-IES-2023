import './Mapa.css'
const Map=(props)=>{
    const {coord}=props;
    return <section className='mapas'>
        <iframe
            className='mapa' 
            title="Hola"
            id="iframe"
            src={coord} 
            style={{boxShadow:"3px 3px 5px 5px #00000080"}} 
        ></iframe>
    </section> 
    
}
export default Map;