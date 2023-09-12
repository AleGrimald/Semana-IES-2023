import './App.css';
import { useState } from 'react';
import useIntersection from './useIntersection';
import Header from './component/Header';
import Tarjetas from './component/Tarjetas';
import Denunciar from './component/Denunciar';
import Prevenir from './component/Prevenir';

function App() {
  const [btnMaleware, setBtnMaleware]= useState(false);
  const [btnDenunciar, setBtnDenunciar]= useState(false);
  const [btnPrevenir, setBtnPrevenir]= useState(false);

  const controlMaleware=(event)=>{
    event.preventDefault();
    setBtnMaleware(!btnMaleware);
    setBtnDenunciar(false);
    setBtnPrevenir(false);
  }
  const controlDenunciar=(event)=>{
    event.preventDefault();
    setBtnDenunciar(!btnDenunciar);
    setBtnMaleware(false);
    setBtnPrevenir(false);
  }
  const controlPrevenir=(event)=>{
    event.preventDefault();
    setBtnPrevenir(!btnPrevenir);
    setBtnMaleware(false);
    setBtnDenunciar(false);
  }

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

  const headerContenido={
    titulo:"¿Que es Delito Informatico?",
    texto:"Son conductas ilegales realizadas por ciberdelincuentes en el ciberespacio a través de dispositivos electrónicos y redes informáticas. Consiste en estafas, robos de datos personales, de información comercial estratégica, suplantación de identidad, fraudes informáticos, ataques como cyberbulling, grooming, phishing cometidos por ciberdelincuentes que actúan en grupos o trabajan solos."
  }
  const btn=[
    {
      titulo:"Maleware" ,
      click: controlMaleware
    },
    {
      titulo:"Casos Registrados" ,
      click: controlMaleware
    },
    {
      titulo:"Donde Denunciar" ,
      click: controlDenunciar
    },
    {
      titulo:"Grooming" ,
      click: controlPrevenir
    }
  ]

  return (
    <div className="App">
      <Header contenido={headerContenido} btn={btn}/>

      {
        btnMaleware?<Tarjetas tarjetas={tarjetas}/>:<></>
      }
      {
        btnDenunciar?<Denunciar/>:<></>
      }

      {
        btnPrevenir?<Prevenir/>:<></>
      }


      
    </div>
  );
}

export default App;
