import './Header.css';
import Botones from '../Botones';

const Header = (props)=>{
    const {datosTexto, datosBotones}=props.datosHeader;
    
    return <header className="header">
        {
            datosTexto.map((dato, key)=>
                <section key={key} className="contenedor_texto">
                    <h1 className="header_titulo">{dato.h1}</h1>
                    <p className="header_texto">{dato.p}</p>
                </section>
            )
        }
                
        <nav className="menu">
            {
                datosBotones.map((boton, key)=>
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