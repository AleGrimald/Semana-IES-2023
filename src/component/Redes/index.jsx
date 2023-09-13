import './Redes.css'

const Redes = (props) =>{
    const {clase}=props;
    return <section  className={clase}>
        <h3 className='redes_h3'>
            Compartir en<br/> redes sociales
        </h3>
        <div className='redes_link'>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsemana-ies-tv.netlify.app&amp;title=Legislaci%C3%B3n>">
                <img src="./facebook.svg" alt=""/>
            </a>

            <a href="https://api.whatsapp.com/send?text=Aprende sobre delitos infolrmaticos en semana-ies-tv.netlify.app">
                <img src="./whatsapp.svg" alt=""/>
            </a>
        </div>
    </section>
}

export default Redes;