import './Header.css';

const Header = (props)=>{
    const {datosTexto}=props.datosHeader;
    
    return <header className="header">
        {
            datosTexto.map((dato, key)=>
                <section key={key} className="header_contenedor_texto">
                    <h1 className="header_titulo">{dato.h1}</h1>
                    <p className="header_texto">{dato.p}</p>
                </section>
            )
        }
    </header>
}

export default Header;