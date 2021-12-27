import React from 'react';
import './informations.css'

function App() {
  return (

    <div>
    <div id="background"></div>
<div id="login_contener"></div>
<img width="700px" className="heyko_banner_1" src="./img/heyko.png" alt="Heyko banner"></img>
<br></br>
<h1 className="Infos Title_1">
Heyko is an independent video game creation team
</h1>
<div className="Infos partners-contener">
  <h1 className="Infos partners-contener-title">Our partners</h1>
  <br></br><br></br>
  <div style={{height: '310px'}}  className="Infos partner-contener">
  <div className="Infos partner-image">
    </div>
    <div className="Infos partner-i"></div>
    <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
    
    <h1 className="Infos partner-title">Rue Des Graphistes</h1>
    <a href="https://ruedesgraphistes.com/" target="https://ruedesgraphistes.com/"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
    <p className="Infos partner-description"><b className="Infos bold">Rue des Graphistes</b> est un lieu de rencontre et de partage entre artistes de toutes spécialité et les met en relation avec des créateurs de contenus originaux et nécessitant une touche professionnelle dans leur projet.</p>

  </div>


  <div style={{height: '310px'}}  className="Infos partner-contener">
  <div className="Infos partner-image">
    </div>
    <div className="Infos partner-i v3"></div>
    <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
    
    <h1 className="Infos partner-title">Le Monde Du PC</h1>
    <a href="https://www.lemondedupc.fr/" target="https://www.lemondedupc.fr/"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
    <p className="Infos partner-description"><b className="Infos bold">Le Monde Du PC</b> : Les sujets du numérique et du high tech ne doivent pas être compris uniquement par ceux qui les maitrisent.</p>

  </div>

  <div style={{height: '310px'}}  className="Infos partner-contener">
  <div className="Infos partner-image">
    </div>
    <div className="Infos partner-i v5"></div>
    <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
    
    <h1 className="Infos partner-title">Tech'NCode</h1>
    <a href="https://discord.gg/Mf8ZFThSzp" target="https://discord.gg/Mf8ZFThSzp"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
    <p className="Infos partner-description"><b className="Infos bold">Tech'NCode</b> est une communauté autour de l'informatique et de la programmation. Nous faisons aussi des jeux vidéos, pour plus d'informations, rejoignez notre Discord !</p>
  </div>

  <div style={{height: '310px'}}  className="Infos partner-contener">
  <div className="Infos partner-image">
    </div>
    <div className="Infos partner-i v2"></div>
    <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
    
    <h1 className="Infos partner-title">Night Group</h1>
    <a href="https://discord.gg/ySbecQPWce" target="https://discord.gg/ySbecQPWce"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
    <p className="Infos partner-description"><b className="Infos bold">Night Group</b> est une source d'aide et de ressources, vous offrant même
      une api pour les développeurs, et bien plus encore !
      Nous avons plein de nouveaux projets alors qu'est ce que vous attendez ? Rejoignez-nous !</p>

  </div>
  <div style={{height: '310px'}}  className="Infos partner-contener">
  <div className="Infos partner-image">
    </div>
    <div className="Infos partner-i v4"></div>
    <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
    
    <h1 className="Infos partner-title">Fouderix</h1>
    <a href="https://discord.gg/EAadBFj6jE" target="https://discord.gg/EAadBFj6jE"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
    <p className="Infos partner-description"><b className="Infos bold">Fouderix</b> est un serveur Discord d'entraide à la programmation. Il intègre aussi la communauté de la chaîne youtube de développement Fouderix.</p>

  </div>

  <br></br>
  </div>
  <br></br><br></br><br></br>
</div>

  );
  

}
export default App;