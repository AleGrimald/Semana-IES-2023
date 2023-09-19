import Botones from "../Botones";
import "./Nav.css";

const Nav=(props)=>{
    const {btn}=props
    
    return <nav className="menu2">
        {
            btn.map((boton, key)=><Botones 
                    key={key} 
                    click={boton.click} 
                    titulo={boton.titulo}
                    clase="btn_nav"
                />
            )
        }
    </nav>
}

export default Nav;