import './Li.css';

const Li =(props)=>{
    const {texto, clase}=props
    return <li className={clase}>
        {texto}
    </li>
}

export default Li;