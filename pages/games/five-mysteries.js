import React from 'react';
import styles from '../../styles/Games.module.css'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <div className={styles.title}>
        <h1 className={`${styles.title_text} ${styles.v2}`}>Five Mysteries</h1>
        </div>
        <div className={styles.decription}>
          <div className={`${styles.descriptionImage} ${styles.v2}`}></div>
          <p className={styles.decription_text}>
          In a world where imagination is real...<br></br>
          Many creatures seek absolute power through a crystal with divine powers...<br></br> But a force beyond them will soon appear...
          </p>
        </div>
        <h2 className={styles.download_title}>Download</h2>
        <hr className='hr_4'></hr>

        <div className={styles.Devices_Contener}>
        <div className={styles.Device_Contener}>
          <div className={styles.Device_Contener_2}>
        <div className={[styles.Device, styles.v1].join(" ")}></div>
        <p className={styles.Device_Description}>For computer <br></br>( + Free phone edition )</p>
        </div>
        <p className={styles.Device_Price}>22,99 $</p>
        </div>
        <div className={[styles.Platform, styles.v1].join(" ")}></div>

          </div>

          <div className={[styles.Download_Message, styles.Contener].join(" ")}>
          <p className={[styles.Download_message, styles.description].join(" ")}>
          The game is still in development and is not yet available. For more information, join our discord server 🎮
          </p>
          <a className={styles.a} href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn"><button className='button white center'>Join our discord</button></a>
        </div>
      <Footer/>
    </>
  );

}
export default App;