import './Denunciar.css'
import Map from '../Map';
import BtnCoord from '../BtnCoord';

const Denunciar = (props)=>{
    const {btn,datoCoordenada,datosTarjeas}=props; 
    const {datDenunciar}=props.contenido;

    return <section className='contenedor_denuncia' id='denunciar'> 
        {
            datDenunciar.map((dato, key)=>
            <section key={key} className='denuncia_titulo'>
                <h2 className='titulod_h2'>{dato.h2}</h2>
                <p className='titulod_p'>{dato.p}</p>
                <p style={{marginTop:"1rem"}} className='titulod_p'>
                    {dato.p2}
                    <b style={{fontWeight:"700", fontSize:"20px"}}>
                        {dato.p3}
                    </b> 
                    {dato.p4}
                </p>
            </section>)
        }
        
        <section className='denuncia_btntarjeta'>
            <div className="contenedor_botones">
                <div className='botones'>
                    {
                        btn.map((boton, key)=><BtnCoord 
                                clase={'boton'}
                                titulo={boton.nombre}
                                setCoordenada={boton.setCoordenada}
                                coord={boton.coord}
                                setTarjeta={boton.setTarjeta}
                                tarjeta={boton.tarjeta}
                                setDato={boton.setDatos}
                                datos={boton.dato}
                                key={key}
                            />
                        )
                    }
                </div>
                <div className='tarjetas'>
                    {                   
                        datosTarjeas.map((dat, key)=>
                            <section key={key} className='tarjeta'>
                                <h3>{dat.h3}</h3>
                                <p>{dat.p1}</p>
                                <p>{dat.p2}</p>
                                <p>{dat.p3}</p>
                                <p>{dat.p4}</p>
                            </section>
                        )                   
                    }
                </div> 
            </div>
            
            <div className='contenedor_mapa'> 
                <Map coord={datoCoordenada}/>
            </div>  
        </section>
    </section>
}

export default Denunciar;