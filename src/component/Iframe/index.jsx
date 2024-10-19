import './Iframe.css';

const Iframe=(props)=>{
    const {ancho, alto, link, clase, estilo}= props;
    return <iframe
        title='Hola'
        src={link}
        width={ancho}
        height={alto}
        className={clase}
        style={estilo} 
        frameborder="0"
        allow="
            accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share
        " 
        allowFullScreen
    >

    </iframe>
}
export default Iframe;