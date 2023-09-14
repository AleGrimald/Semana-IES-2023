import "./Botones.css";

const Botones =(props)=>{
    const{click, titulo, key, img, clase}= props;

    return <button key={key} className={clase} onClick={click}>
        <img src={img} alt=""/>
        {titulo}
    </button>

}

export default Botones;