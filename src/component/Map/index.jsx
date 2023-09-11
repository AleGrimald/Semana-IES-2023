const Map=(props)=>{
    const {coord}=props;
    return <section>
        <iframe 
            title="Hola"
            id="iframe"
            src={coord} 
            width="500" 
            height="430"
            style={{boxShadow:"3px 3px 5px 5px #00000080"}} 
        ></iframe>
    </section> 
    
}
export default Map;