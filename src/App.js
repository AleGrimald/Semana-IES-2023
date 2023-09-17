import './App.css';
//Hooks
import { useState } from 'react';
import useIntersection from './useIntersection';
//Componentes
import Header from './component/Header';
import Nav from './component/Nav';
import Tarjetas from './component/Tarjetas';
import Denunciar from './component/Denunciar';
import Prevenir from './component/Prevenir';
import Footer from './component/Footer';
import Noticias from './component/Noticias';

function App() {
  const [btnMaleware, setBtnMaleware]= useState(false);
  const [btnDenunciar, setBtnDenunciar]= useState(false);
  const [btnPrevenir, setBtnPrevenir]= useState(false);
  const [btnNoticias, setBtnNoticias]=useState(false);
  const [datos, setDatos] = useState([]);
  const [coordenada, setCoordenada]= useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2871895368685!2d-65.20518169636479!3d-26.830816455657708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c106f2afc99%3A0xe97bef14f2ad881a!2sPlaza%20Independencia!5e0!3m2!1ses-419!2sar!4v1694418283826!5m2!1ses-419!2sar");
  const [tarjeta, setTarjeta] = useState(false);
  const [tarjeta2, setTarjeta2] = useState(false);
  const [tarjeta3, setTarjeta3] = useState(false);
  const [tarjeta4, setTarjeta4] = useState(false);
  
  
//Funciones de los botones del Header y Nav
  const controlMaleware=(event)=>{
    event.preventDefault();
    setBtnMaleware(!btnMaleware);
    setBtnDenunciar(false);
    setBtnPrevenir(false);
    setBtnNoticias(false);
    window.scrollTo({top:0, behavior: "smooth"})
  }
  const controlDenunciar=(event)=>{
    event.preventDefault();
    setBtnDenunciar(!btnDenunciar);
    setBtnMaleware(false);
    setBtnPrevenir(false);
    setBtnNoticias(false);
    window.scrollTo({top:0, behavior: "smooth"})
  }
  const controlNoticias=(event)=>{
    event.preventDefault();
    setBtnNoticias(!btnNoticias);
    setBtnDenunciar(false);
    setBtnMaleware(false);
    setBtnPrevenir(false);
    window.scrollTo({top:0, behavior: "smooth"})
  }
  const controlPrevenir=(event)=>{
    event.preventDefault();
    setBtnPrevenir(!btnPrevenir);
    setBtnMaleware(false);
    setBtnDenunciar(false);
    window.scrollTo({top:0, behavior: "smooth"})
  }

  //Observador para el efecto de las tarjetas
  const thresholdValor=0;
  const [elementoRef, intersectado]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementoRef2, intersectado2]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementoRef3, intersectado3]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementoRef4, intersectado4]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementoRef5, intersectado5]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementoRef6, intersectado6]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementoRef7, intersectado7]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementWpFb, intersectadoWpFb]= useIntersection({
    threshold: thresholdValor,
  });
  const [elementWpFbFooter, intersectadoWpFbFooter]= useIntersection({
    threshold: thresholdValor,
  });

  //Datos del componenete Tarjeta (tajetas informativas de los virus)
  const tarjetas=[
    {
      titulo:"Ransomware",
      texto:"Es un tipo específico de malware que se encarga de evitar que el usuario tenga acceso a su propia información a través de la encriptación de dichos archivos. Cuando esto ocurre, el usuario necesita una contraseña para acceder a dichos archivos encriptados, la cual solo es conocida por el atacante. Para acceder a la contraseña y liberar la información, el usuario deberá pagar altas sumas de dinero al creador del malware, usualmente en bitcoins o cualquier otro tipo de criptomonedas.",
      clase:"ran",
      img:"./ransonware.png",
      tarjeta:"tarjeta_ran",
      animacion:"tarjeta_derecha 2s ease-in",
      intersector:intersectado,
      referencia: elementoRef,
      fondo:"#ff646488",
      sombra:"2px 2px 10px 5px #a13f3fd5",
      color:"white"
    },
    {
      titulo:"Spyware",
      texto:"En este caso, el atacante o hacker utiliza este tipo de malware para monitorear la actividad de los usuarios en internet. A través de un spyware es posible recolectar información sensible como por ejemplo: usuarios, contraseñas y números de tarjetas de crédito para cometer el delito de robo de identidad y utilizar el dinero ajeno.",
      clase:"spy",
      img:"./spyware.jpg",
      tarjeta:"tarjeta_spy",
      animacion:"tarjeta_izquierda 2s ease-in",
      intersector:intersectado2,
      referencia: elementoRef2,
      fondo:"#5ecdd1b4",
      sombra:"-2px 2px 10px 5px #57afb3",
      color:"white"
    },
    {
      titulo:"Gusanos",
      texto:"Los gusanos informáticos tienen el objetivo de replicarse. Es decir, al infectar un dispositivo buscan pasar al siguiente, ya sea para dañar los sistemas informáticos o para robar información de los usuarios. En este sentido, cuando hablamos de las empresas, los gusanos representan una grave problemática para la seguridad informática, ya que tienen facilidad para propagarse en varios dispositivos rápidamente.",
      clase:"gus",
      img:"./gusano.jpg",
      tarjeta:"tarjeta_gus",
      animacion:"tarjeta_derecha 2s ease-in",
      intersector:intersectado3,
      referencia: elementoRef3,
      fondo:"#58e464b4",
      sombra:"2px 2px 10px 5px #32a53cce",
      color:"white"
    },
    {
      titulo:"Troyanos",
      texto:"Este software malicioso le debe su nombre al famoso relato del caballo de Troya, ya que se trata de un virus que se esconde en un software que aparenta ser confiable. Luego de ser instalado, comienza a actuar, generando daños graves en el sistema infectado.",
      clase:"tro",
      img:"./troyano.png",
      tarjeta:"tarjeta_tro",
      animacion:"tarjeta_izquierda 2s ease-in",
      intersector:intersectado4,
      referencia: elementoRef4,
      fondo:"#ff00e4da",
      sombra:"-2px 2px 10px 5px #ff00a0da",
      color:"white"
    },
    {
      titulo:"Adware",
      texto:"Como su nombre lo indica, los adware tienen la tarea de bombardear nuestro dispositivo con anuncios publicitarios no deseados. La finalidad de este malware es generarle dinero al hacker mostrando miles de anuncios y además monitorea nuestra actividad en la web para personalizar estos anuncios o ventanas emergentes que se muestran en el dispositivo de forma masiva.",
      clase:"adw",
      img:"./adware.jpg",
      tarjeta:"tarjeta_adw",
      animacion:"tarjeta_derecha 2s ease-in",
      intersector:intersectado5,
      referencia: elementoRef5,
      fondo:"#453ea593",
      sombra:"2px 2px 10px 5px #554974c5",
      color:"white"
    },
    {
      titulo:"Botnets",
      texto:"También llamados redes de robots, equipos o de códigos, los botnets son aquellos que se encargan de ejecutar un malware de forma simultánea utilizando varias computadoras. Es decir, los ciberatacantes buscan la forma de infectar miles de dispositivos para formar una especie de ejército que posteriormente serán utilizados para coordinar ataques de denegación de servicios (DDoS), correos spam, o robar datos personales masivamente.",
      clase:"bot",
      img:"./botnet.png",
      tarjeta:"tarjeta_bot",
      animacion:"tarjeta_izquierda 2s ease-in",
      intersector:intersectado6,
      referencia: elementoRef6,
      fondo:"#a57c3eb7",
      sombra:"-2px 2px 10px 5px #6e532bb7",
      color:"white"
    },
    {
      titulo:"Rootkits",
      texto:"Por último, los Rootkits son utilizados para suplantar los permisos y controles de administrador con la finalidad de tomar el control de un sistema operativo por completo sin levantar ningún tipo de alerta del antivirus o software antimalware.",
      clase:"roo",
      img:"./rootkit.webp",
      tarjeta:"tarjeta_roo",
      animacion:"tarjeta_derecha 2s ease-in",
      intersector:intersectado7,
      referencia: elementoRef7,
      fondo:"#b991c2b7",
      sombra:"2px 2px 10px 5px #765b7ccb",
      color:"white"
    },
  ]
  //Datos de los encabezados de los componenetes
  const titulosDatos={
    datHeader:[
      {
        h1:"¿Que es Delito Informatico?",
        p:"Son conductas ilegales realizadas por ciberdelincuentes en el ciberespacio a través de dispositivos electrónicos y redes informáticas. Consiste en estafas, robos de datos personales, de información comercial estratégica, suplantación de identidad, fraudes informáticos, ataques como cyberbulling, grooming, phishing cometidos por ciberdelincuentes que actúan en grupos o trabajan solos.",
      }
    ],
    datTarjeta:[
      {
        h2:"¿Qué es un Malware?",
        p:"El término malware, software malicioso o virus informático hace referencia a un programa diseñado para infiltrarse en el sistema operativo de un dispositivo (tales como smartphones android y apple, computadoras, tablets) y alterar su funcionamiento. Este tipo de programas maliciosos son utilizados por ciberdelincuentes para robar información personal, contraseñas, archivos del disco duro, números de tarjetas de crédito y más. En la actualidad, el malware constituye uno de los ataques cibernéticos más frecuentes y, por tanto, representa un gran riesgo para la ciberseguridad de los usuarios.",
        h3:"Tipos de Maleware",
        p2:"Existen diversos tipos de Maleware, entre los mas comunes estan:",
        elementWpFb:elementWpFb,
        intersectadoWpFb:intersectadoWpFb,
        animacion:"facebook 2.2s ease-in infinite",
        animacion2:"whatsapp 2.2s ease-in infinite",
      }
    ],
    datDenunciar:[
      {
        h2:"Si fuiste víctima de un ciberdelito, denuncialo",
        p:"Tenés diferentes alternativas en todo el país. Comunícate con alguno de los siguientes organismos para solicitar asesoramiento de equipos especializados o presentar una denuncia.",
        p2:"Recorda que tambien podes utilizar las",
        p3:" Lineas: (102 y 137)",
        p4:" para denunciar ciberdelitos y grooming",
      }
    ]
  }
  //Botones de los componentes Header y Nav
  const btn=[
    {
      titulo:"Malware" ,
      click: controlMaleware,
      clase:"menu_items"
    },
    {
      titulo:"Noticias" ,
      click: controlNoticias,
      clase:"menu_items"
    },
    {
      titulo:"Denunciar" ,
      click: controlDenunciar,
      clase:"menu_items"
    },
    {
      titulo:"Prevenir" ,
      click: controlPrevenir,
      clase:"menu_items"
    }
  ]
  //Datos de los componenetes Denunciar, BtnCoord,Map y las Tarjetas con info direcciones
  const datosBtnDenunciar=[
    {
      nombre:"Fiscalía General",
      coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.1669015533016!2d-65.20105396854498!3d-26.818710500353045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c22e59daa19%3A0xe35fc73627a4f2c0!2sTribunales%20de%20la%20provincia!5e0!3m2!1ses-419!2sar!4v1694395311597!5m2!1ses-419!2sar",
      setCoordenada: setCoordenada,
      tarjeta: tarjeta,
      setTarjeta: setTarjeta,
      setDatos,
      dato:[{
        h3:"Fiscalía General ante la Cámara Federal de Apelaciones de Tucumán",
        p1:"Fiscal: GOMEZ, ANTONIO GUSTAVO",
        p2:"Dirección: LAS PIEDRAS 418",
        p3:"Mail: fcmfed-tcm@mpf.gov.ar",
        p4:"Teléfono: (381) 4223524 / (381) 4311765 / (381) 4311072"
      }]
      
    },
    {
      nombre:"Policía De Tucumán Unidad Regional Capital",
      coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d521.7092438394544!2d-65.20664764736578!3d-26.81841838977988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c3c4f414309%3A0x72ac4255025436f0!2sPolic%C3%ADa%20De%20Tucum%C3%A1n%20Unidad%20Regional%20Capital!5e0!3m2!1ses-419!2sar!4v1694400866084!5m2!1ses-419!2sar",
      setCoordenada: setCoordenada,
      tarjeta: tarjeta2,
      setTarjeta: setTarjeta2,
      setDatos,
      dato:[{
        h3:"Unidad Regional Capital",
        p2:"Direccion: Junín 850",
        p4:"Telefono:  (381) 421-9197"
      }]
    },
    {
      nombre:"Ministerio de Seguridad Ciudadana",
      coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.293025499574!2d-65.20298082600344!3d-26.830630776696186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1ac329390d%3A0x72ecd2eb934dda95!2sMinisterio%20de%20Seguridad%20Ciudadana!5e0!3m2!1ses-419!2sar!4v1694402604965!5m2!1ses-419!2sar",
      setCoordenada: setCoordenada,
      tarjeta: tarjeta3,
      setDatos,
      setTarjeta: setTarjeta3,
      dato:[{
        h3:"Ministerio de Seguridad",
        p2:"Direccion: Gral. José de San Martín 224",
        p3:"Web: https://www.tucuman.gov.ar/",
        p4:"Telefono: (381) 484-4000"
      }]
    },
    {
      nombre:"Fiscalía Federal Nº 2 de Tucumán",
      coord:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.1669015533016!2d-65.20105396854498!3d-26.818710500353045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c22e59daa19%3A0xe35fc73627a4f2c0!2sTribunales%20de%20la%20provincia!5e0!3m2!1ses-419!2sar!4v1694395311597!5m2!1ses-419!2sar",
      setCoordenada: setCoordenada,
      tarjeta: tarjeta4,
      setDatos,
      setTarjeta: setTarjeta4,
      dato:[{
        h3:"Fiscalía Federal Nº 2 de Tucumán",
        p1:"Fiscal: CAMUÑA, PABLO / CHIT, JOSE AGUSTIN",
        p2:"Dirección: LAS PIEDRAS 418",
        p3:"Mail: fisfed2-tcm@mpf.gov.ar",
        p4:"Teléfono: (381) 4311190"
      }]
    }
  ]
  //Datos del componente Footer
  const datosFooter=[
    {
      elementWpFb:elementWpFbFooter,
      intersectadoWpFb:intersectadoWpFbFooter,
      animacion:"facebook 2.2s ease-in infinite",
      animacion2:"whatsapp 2.2s ease-in infinite",
    }
  ]
  const datosNoticia=[
    {
      h2:"¿Que son las FackeNews?",
      p:"consiste en un contenido seudoperiodístico difundido a través de portales de noticias, prensa escrita, radio, televisión y redes sociales y que tiene como objetivo desinformar a un público en específico. Se diseña y emite con la intención deliberada de engañar, inducir a error, manipular decisiones personales, desprestigiar o enaltecer a una institución, entidad o persona u obtener ganancias económicas o rédito político.",
      video:"https://www.youtube.com/embed/SEQhQeYsLlI?si=npV2MzfK_Bz9oaEy",
      clase:"noticia"
    },
    {
      h2:"¿Que es Ingenieria Social?",
      p:"Se llama ingeniería social a las diferentes técnicas de manipulación que usan los ciberdelincuentes para obtener información confidencial de los usuarios. El objetivo de este engaño es apropiarse de datos personales, contraseñas o suplantar la identidad de la persona engañada.",
      video:"https://www.youtube.com/embed/PN0j35dbG-8?si=1vTZBmH63MEZqQtT",
      clase:"noticia"
    },
    {
      h2:"El Cronista",
      p:"Alerta de Hackeos",
      img:"./ElCronista.png",
      link:"https://www.cronista.com/infotechnology/actualidad/alerta-hackers-argentina-recibio-mas-de-1000-millones-de-intentos-de-ataque/",
      clase:"seccion_img"
    },
    {
      h2:"Todo Noticias",
      p:"Estafas virtuales y robo de dinero",
      img:"./Tn2.png",
      link:"https://tn.com.ar/tecno/novedades/2023/06/08/las-6-estafas-virtuales-mas-usadas-por-ciberdelincuentes-para-robar-datos-y-vaciar-cuentas-bancarias/?gclid=CjwKCAjwpJWoBhA8EiwAHZFzfsEvTDv5R8-gD50ZUk-Crxw2P8oReMdc02aNHPUW5vrUrpCadZfhMBoCCrcQAvD_BwE",
      clase:"seccion_img"
    },
    {
      h2:"Clarin",
      p:"Hacko a la base de datos de PAMI",
      img:"./Clarin.png",
      link:"https://www.clarin.com/tecnologia/pami-confirmo-ciberataque-ransomware-aseguran-mitigado-_0_U29WNR9srI.html?gclid=CjwKCAjwpJWoBhA8EiwAHZFzfmd7IYb0davQc8XQEzVR2mJmgWJxgtK9qGbFGSNv3nOVbgcMGv01IxoC1oQQAvD_BwE",
      clase:"seccion_img"
    },
    {
      h2:"Infobae",
      p:"Millones de ataques al año",
      img:"./Infobae.png",
      link:"https://www.cronista.com/infotechnology/actualidad/alerta-hackers-argentina-recibio-mas-de-1000-millones-de-intentos-de-ataque/",
      clase:"seccion_img"
    },
    {
      h2:"La Nacion",
      p:"Ransomware en las Farmacias",
      img:"./LaNacion.png",
      link:"https://www.lanacion.com.ar/tecnologia/como-se-gesto-el-ataque-por-ransomware-que-paralizo-por-varios-dias-a-las-farmacias-de-todo-el-pais-nid17052023/",
      clase:"seccion_img"
    },
    {
      h2:"Clarin",
      p:"Las companias aplican medidas para protegerse de los cyberataques",
      img:"./Clarin2.png",
      link:"https://www.clarin.com/tecnologia/ciberataques-empresas-argentinas-alza-medidas-clave-proteger-cualquier-compania_0_ESNySekPMu.html",
      clase:"seccion_img"
    },
    {
      h2:"Todo Noticias",
      p:"Se filtran 11 millones de registros",
      img:"./Tn.png",
      link:"https://tn.com.ar/tecno/novedades/2023/05/25/ciberataque-filtran-una-base-de-datos-con-11-millones-de-registros-de-ciudadanos-argentinos/",
      clase:"seccion_img"
    },
    
  ];

  return (
    <div className="App">

      {
        (btnMaleware||btnDenunciar||btnPrevenir||btnNoticias)===false
        ?<Header contenido={titulosDatos} btn={btn}/>
        :<Nav btn={btn}/>
      }
      
      {
        btnMaleware
          ?<Tarjetas 
            titulosDatos={titulosDatos} 
            tarjetas={tarjetas}/>
          :<></>
      }
      {
        btnDenunciar
          ?<Denunciar 
              contenido={titulosDatos} 
              btn={datosBtnDenunciar} 
              datoCoordenada={coordenada} 
              datosTarjeas={datos} 
            />
          :<></>
      }
      {
        btnNoticias
          ?<Noticias
              datos={datosNoticia}
            />
          :<></>
      }
      {
        btnPrevenir
          ?<Prevenir
              titulosDatos={titulosDatos}
            />
          :<></>
      }
      
      {
        btnDenunciar||btnMaleware||btnPrevenir||btnNoticias?<Footer datosFooter={datosFooter}/>:<></>
      }
      
    </div>
  );
}

export default App;
