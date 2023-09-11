import "./Botones.css";

const Botones =(props)=>{
    const{click, titulo, key}= props;

    return <button key={key} className="menu_items" onClick={click}>
        {titulo}
    </button>
}

export default Botones;