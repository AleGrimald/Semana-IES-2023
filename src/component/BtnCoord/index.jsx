import './BtnCoord.css';

const BtnCoord = (props)=>{
    const {clase, titulo, coord, setCoordenada, setTarjeta, tarjeta, key,setDato, datos}=props

    const generarCoord=()=>{
        setCoordenada(coord);
        setTarjeta(!tarjeta);
        setDato(datos);
    }

    return <button key={key} className={clase} onClick={generarCoord}>
        {titulo}
    </button>
}

export default BtnCoord;