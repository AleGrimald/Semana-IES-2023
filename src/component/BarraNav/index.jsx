import { Link } from 'react-router-dom';
import './BarraNav.css';

const BarraNav = (props)=>{
    const {datos} = props;
    return<nav className='nav_links'>
        {
            datos.map((elemento,index)=><Link 
                to={elemento.link} 
                className='links' 
                onClick={elemento.controlLinks}
            >
                {elemento.texto}
            </Link>)
        }
    </nav>
}

export default BarraNav;