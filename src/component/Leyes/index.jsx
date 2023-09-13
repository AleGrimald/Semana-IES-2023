import './Leyes.css';

const Leyes = (props)=>{

    const {titulo,parrafo,link1,link2,a1,a2,a2style, key}=props;

    return <section className='leyes' key={key}>
        <div className='leyes_contenedor_titulo'>
            <h4 className='leyes_h4'>{titulo}</h4>
            <p className='leyes_p'>{parrafo}</p>
        </div>
        
        <div className='leyes_contenedor_a'>
            <a className='leyes_a1' href={link1}>{a1}</a>
            <a className={a2style} href={link2}>{a2}</a>
        </div> 
    </section>
}

export default Leyes;
                     
                     
                     
                    
                    
                    