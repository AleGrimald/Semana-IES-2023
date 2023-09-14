import Botones from "../Botones";
import "./Nav.css";

const Nav=(props)=>{
    const {btn}=props
    
    return <nav className="menu2">
        {
            btn.map((boton, key)=><Botones 
                    ruta={boton.ruta} 
                    key={key} 
                    click={boton.click} 
                    titulo={boton.titulo}
                    clase={"menu_items"}
                />
            )
        }
    </nav>
}

export default Nav;