import './Header.css';
import Botones from '../Botones';

const Header = (props)=>{
    const {contenido, btn}=props

    return <header className="header">
        
        <section className="contenedor_texto">
            <h1 className="header_titulo">{contenido.titulo}</h1>
            <p className="header_texto">
                {contenido.texto}
            </p>
        </section>
                
        <nav className="menu">
            {
                btn.map((boton, key)=>
                    <Botones
                        ruta={boton.ruta} 
                        key={key} 
                        click={boton.click} 
                        titulo={boton.titulo}
                        clase={"menu_items"}
                    />                  
                )
            }
        </nav>
    </header>
}

export default Header;