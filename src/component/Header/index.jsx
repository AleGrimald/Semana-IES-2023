import './Header.css'
import Botones from '../Botones'

const Header = (props)=>{
    const {contenido, btn}=props

    return <header className="header">
        <section className="contenedor_texto">
            <h1 className="header_titulo">{contenido.titulo}</h1>
            <p className="header_texto">
                {contenido.texto}
            </p>
        </section>
        
        <ul className="menu">
            {
                btn.map((boton, key)=><Botones key={key} click={boton.click} titulo={boton.titulo}/>)
            }
        </ul>
    </header>
}

export default Header;