import './Redes.css'

const Redes = (props) =>{
    
    return <section className='redes'>
        <h3 className='redes_h3'>
            Compartir en<br/> redes sociales
        </h3>
        <div className='redes_link'>
            <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsemana-ies-tv.netlify.app&amp;title=Legislaci%C3%B3n>"
            >
                <img src="./facebook.svg" alt=""/>
            </a>

            <a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fsemana-ies-tv.netlify.app">
                <img src="./whatsapp.svg" alt=""/>
            </a>
        </div>
        

        
    </section>
}

export default Redes;