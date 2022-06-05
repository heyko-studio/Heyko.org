import React from 'react';
import styles from '../styles/About.module.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <div id="background"></div>
        <div id="login_contener"></div>
        <img width="700px" className="heyko_banner_1" src="./img/heyko.png" alt="Heyko banner"></img>
        <br></br>
        <h1 className="Infos Title_1">
        Heyko is an independent video game creation team
        </h1>
        <div className={`${styles.Infos} ${styles.partnersContener}`}>
          <h1 className={`${styles.Infos} ${styles.partnersContenerTitle}`}>Our partners</h1>
          <br></br><br></br>

          <div style={{height: '310px'}} className={`${styles.Infos} ${styles.partnerContener}`}>
          <div className={`${styles.Infos} ${styles.partnerImage}`}>
            </div>
            <div className={`${styles.Infos} ${styles.partner_i}`}></div>
            <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
            <h1 className={`${styles.Infos} ${styles.partnerTitle}`}>Rue Des Graphistes</h1>
            <a href="https://ruedesgraphistes.com/" target="https://ruedesgraphistes.com/"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
            <p className={`${styles.Infos} ${styles.partnerDescription} ${styles.v3}`}><b className={`${styles.Infos} ${styles.bold}`}>Rue des Graphistes</b> est un lieu de rencontre et de partage entre artistes de toutes spécialité et les met en relation avec des créateurs de contenus originaux et nécessitant une touche professionnelle dans leur projet.</p>
          </div>

          <div style={{height: '310px'}} className={`${styles.Infos} ${styles.partnerContener}`}>
          <div className={`${styles.Infos} ${styles.partnerImage}`}>
            </div>
            <div className={`${styles.Infos} ${styles.partner_i} ${styles.v3}`}></div>
            <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
            <h1 className={`${styles.Infos} ${styles.partnerTitle}`}>Le Monde Du PC</h1>
            <a href="https://www.lemondedupc.fr/" target="https://www.lemondedupc.fr/"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
            <p className={`${styles.Infos} ${styles.partnerDescription}`}><b className={`${styles.Infos} ${styles.bold}`}>Le Monde Du PC</b> : Les sujets du numérique et du high tech ne doivent pas être compris uniquement par ceux qui les maitrisent.</p>
          </div>

          <div style={{height: '310px'}} className={`${styles.Infos} ${styles.partnerContener}`}>
          <div className={`${styles.Infos} ${styles.partnerImage}`}>
            </div>
            <div className={`${styles.Infos} ${styles.partner_i} ${styles.v9}`}></div>
            <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
            <h1 className={`${styles.Infos} ${styles.partnerTitle}`}>The Lord Of Shadow</h1>
            <a href="https://discord.gg/wFT4sHknNT" target="https://discord.gg/wFT4sHknNT"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
            <p className={`${styles.Infos} ${styles.partnerDescription} ${styles.v2}`}><b className={`${styles.Infos} ${styles.bold}`}>The Lord Of Shadow</b> est un jeu réalisé par une équipe indépendante. Découvrez dès maintenant cet Action RPG scénarisé et incarnez Herumor, le seigneur de l'ombre !</p>
          </div>

          <div style={{height: '310px'}} className={`${styles.Infos} ${styles.partnerContener}`}>
          <div className={`${styles.Infos} ${styles.partnerImage}`}>
            </div>
            <div className={`${styles.Infos} ${styles.partner_i} ${styles.v8}`}></div>
            <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
            <h1 className={`${styles.Infos} ${styles.partnerTitle}`}>World Cloud</h1>
            <a href="https://manager.world-cloud.fr/" target="https://manager.world-cloud.fr/"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
            <p className={`${styles.Infos} ${styles.partnerDescription} ${styles.v3}`}>
            🚀 Serveurs de jeux, web et VPS.<br></br>
            🔒 N'ayez pas peur de perdre vos données, elles sont sécurisées.<br></br>
            👲 Association ou étudiant ? Des réductions vous attendent !
            </p>
          </div>

          <div style={{height: '310px'}} className={`${styles.Infos} ${styles.partnerContener}`}>
          <div className={`${styles.Infos} ${styles.partnerImage}`}>
            </div>
            <div className={`${styles.Infos} ${styles.partner_i} ${styles.v5}`}></div>
            <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
            <h1 className={`${styles.Infos} ${styles.partnerTitle}`}>Tech'NCode</h1>
            <a href="https://discord.gg/Mf8ZFThSzp" target="https://discord.gg/Mf8ZFThSzp"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
            <p className={`${styles.Infos} ${styles.partnerDescription} ${styles.v2}`}><b className={`${styles.Infos} ${styles.bold}`}>Tech'NCode</b> est une communauté autour de l'informatique et de la programmation. Nous faisons aussi des jeux vidéos, pour plus d'informations, rejoignez notre Discord !</p>
          </div>

          <div style={{height: '310px'}} className={`${styles.Infos} ${styles.partnerContener}`}>
          <div className={`${styles.Infos} ${styles.partnerImage}`}>
            </div>
            <div className={`${styles.Infos} ${styles.partner_i} ${styles.v6}`}></div>
            <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
            <h1 className={`${styles.Infos} ${styles.partnerTitle}`}>Clasi Code</h1>
            <a href="https://discord.gg/wkCKyK7QYa" target="https://discord.gg/wkCKyK7QYa"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
            <p className={`${styles.Infos} ${styles.partnerDescription} ${styles.v4}`}><b className={`${styles.Infos} ${styles.bold}`}>Clasi Code</b> 
              c'est deux amis passionés par l'informatique et le monde de la prorammation. Sur ce serveur discord vous trouverez de l'aide pour vos projets / erreurs;<br></br>
              Vous pourrez aussi y poster vos projets pour que les membres suivent votre aventure.</p>
          </div>

          <div style={{height: '310px'}} className={`${styles.Infos} ${styles.partnerContener}`}>
          <div className={`${styles.Infos} ${styles.partnerImage}`}>
            </div>
            <div className={`${styles.Infos} ${styles.partner_i} ${styles.v7}`}></div>
            <div className="flag_fr s1"></div><div className="flag_fr s2"></div><div className="flag_fr s3"></div>
            <h1 className={`${styles.Infos} ${styles.partnerTitle}`}>Kwix</h1>
            <a href="https://kwixstudio.ml/" target="https://kwixstudio.ml/"><button className="button view" style={{position: 'absolute', bottom: '35px', left: '10px'}}>Voir</button></a>
            <p className={`${styles.Infos} ${styles.partnerDescription} ${styles.v1}`}><b className={`${styles.Infos} ${styles.bold}`}>Kwix</b> est un studio indépendant de développement d'applications et de jeux vidéos mobiles fondé en 2020, en France</p>
          </div>
          <br></br>
          </div>

          <br></br><br></br><br></br>
      <Footer/>
    </>
  );
  

}
export default App;
