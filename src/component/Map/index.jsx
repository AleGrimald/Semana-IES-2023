const Map=(props)=>{
    const {coord}=props;
    return <section>
        <iframe 
            title="Hola"
            id="iframe"
            src={coord} 
            width="500" 
            height="430" 
        ></iframe>
    </section> 
    
}
export default Map;