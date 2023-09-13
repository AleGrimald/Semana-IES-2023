import './Denunciar.css'
import Map from '../Map';
import BtnCoord from '../BtnCoord';
import { useState } from 'react';

const Denunciar = ()=>{
    const [coordenada, setCoordenada]= useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2871895368685!2d-65.20518169636479!3d-26.830816455657708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c106f2afc99%3A0xe97bef14f2ad881a!2sPlaza%20Independencia!5e0!3m2!1ses-419!2sar!4v1694418283826!5m2!1ses-419!2sar");
    const [tarjeta, setTarjeta] = useState(false);
    const [tarjeta2, setTarjeta2] = useState(false);
    const [tarjeta3, setTarjeta3] = useState(false);
    const [tarjeta4, setTarjeta4] = useState(false);
    const [datos, setDatos] = useState([]);

    const btn=[
        {
            nombre:"Fiscalía General",
            coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.1669015533016!2d-65.20105396854498!3d-26.818710500353045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c22e59daa19%3A0xe35fc73627a4f2c0!2sTribunales%20de%20la%20provincia!5e0!3m2!1ses-419!2sar!4v1694395311597!5m2!1ses-419!2sar",
            setCoordenada: setCoordenada,
            tarjeta: tarjeta,
            setTarjeta: setTarjeta,
            datos:[
                {
                    h3:"Fiscalía General ante la Cámara Federal de Apelaciones de Tucumán",
                    p1:"Fiscal: GOMEZ, ANTONIO GUSTAVO",
                    p2:"Dirección: LAS PIEDRAS 418",
                    p3:"Mail: fcmfed-tcm@mpf.gov.ar",
                    p4:"Teléfono: (381) 4223524 / (381) 4311765 / (381) 4311072"
                }
            ] 
        },
        {
            nombre:"Policía De Tucumán Unidad Regional Capital",
            coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d521.7092438394544!2d-65.20664764736578!3d-26.81841838977988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c3c4f414309%3A0x72ac4255025436f0!2sPolic%C3%ADa%20De%20Tucum%C3%A1n%20Unidad%20Regional%20Capital!5e0!3m2!1ses-419!2sar!4v1694400866084!5m2!1ses-419!2sar",
            setCoordenada: setCoordenada,
            tarjeta: tarjeta2,
            setTarjeta: setTarjeta2,
            datos:[
                {
                    h3:"Unidad Regional Capital",
                    p2:"Direccion: Junín 850",
                    p4:"Telefono:  (381) 421-9197"
                }
            ] 
            
        },
        {
            nombre:"Ministerio de Seguridad Ciudadana",
            coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.293025499574!2d-65.20298082600344!3d-26.830630776696186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1ac329390d%3A0x72ecd2eb934dda95!2sMinisterio%20de%20Seguridad%20Ciudadana!5e0!3m2!1ses-419!2sar!4v1694402604965!5m2!1ses-419!2sar",
            setCoordenada: setCoordenada,
            tarjeta: tarjeta3,
            setTarjeta: setTarjeta3,
            datos:[
                {
                    h3:"Ministerio de Seguridad",
                    p2:"Direccion: Gral. José de San Martín 224",
                    p3:"Web: https://www.tucuman.gov.ar/",
                    p4:"Telefono: (381) 484-4000"
                }
            ] 
        },
        {
            nombre:"Fiscalía Federal Nº 2 de Tucumán",
            coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.1669015533016!2d-65.20105396854498!3d-26.818710500353045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c22e59daa19%3A0xe35fc73627a4f2c0!2sTribunales%20de%20la%20provincia!5e0!3m2!1ses-419!2sar!4v1694395311597!5m2!1ses-419!2sar",
            setCoordenada: setCoordenada,
            tarjeta: tarjeta4,
            setTarjeta: setTarjeta4,
            datos:[
                {
                    h3:"Fiscalía Federal Nº 2 de Tucumán",
                    p1:"Fiscal: CAMUÑA, PABLO / CHIT, JOSE AGUSTIN",
                    p2:"Dirección: LAS PIEDRAS 418",
                    p3:"Mail: fisfed2-tcm@mpf.gov.ar",
                    p4:"Teléfono: (381) 4311190"
                }
            ] 
        }
    ]
    

    return <section className='contenedor_denuncia'>
        <section className='denuncia_titulo'>
            <h2 className='titulod_h2'>Si fuiste víctima de un ciberdelito, denuncialo</h2>
            <p className='titulod_p'>
                Tenés diferentes alternativas en todo el país. Comunícate con alguno de los siguientes organismos para solicitar asesoramiento de equipos especializados o presentar una denuncia.
            </p>
            <p style={{marginTop:"1rem"}} className='titulod_p'>Recorda que tambien podes utilizar las <b style={{fontWeight:"700", fontSize:"20px"}}>Lineas: (102 y 137)</b> para denunciar ciberdelitos y grooming</p>
        </section>

        <section className='denuncia_btntarjeta'>
            <div className="contenedor_botones">
                <div className='botones'>
                    {
                        btn.map((boton, key)=><BtnCoord 
                                clase={'boton'}
                                titulo={boton.nombre}
                                coord={boton.coord}
                                setCoordenada={boton.setCoordenada}
                                setTarjeta={boton.setTarjeta}
                                tarjeta={boton.tarjeta}
                                setDato={setDatos}
                                datos={boton.datos}
                                key={key}
                            />
                        )
                    }
                </div>


                <div className='tarjetas'>
                    {
                        (tarjeta || tarjeta2 || tarjeta3 || tarjeta4)
                        ?datos.map((dat, key)=>
                            <section key={key} className='tarjeta'>
                                <h3 key={key+5}>{dat.h3}</h3>
                                <p key={key+1}>{dat.p1}</p>
                                <p key={key+2}>{dat.p2}</p>
                                <p key={key+3}>{dat.p3}</p>
                                <p key={key+4}>{dat.p4}</p>
                            </section>
                        )
                        :<></>
                    }
                </div> 
            </div>
            
            <div className='contenedor_mapa'> 
                <Map coord={coordenada}/>
            </div>
           
        </section>
    </section>
}

export default Denunciar;