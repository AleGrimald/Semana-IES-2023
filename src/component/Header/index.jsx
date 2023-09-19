import './Header.css';
import Botones from '../Botones';

const Header = (props)=>{
    const {contenido, btn}=props
    const {datHeader}=contenido;
    return <header className="header">
        {
            datHeader.map((dato, key)=>
            <section key={key} className="contenedor_texto">
                <h1 className="header_titulo">{dato.h1}</h1>
                <p className="header_texto">{dato.p}</p>
            </section>)
        }
                
        <nav className="menu">
            {
                btn.map((boton, key)=>
                    <Botones
                        key={key} 
                        click={boton.click} 
                        titulo={boton.titulo}
                        clase={boton.clase}
                    />                  
                )
            }
        </nav>
    </header>
}

export default Header;