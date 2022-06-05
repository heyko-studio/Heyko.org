import React from 'react';
import styles from '../../styles/Games.module.css'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Head from 'next/head'

function App() {
  return (
    <>
      <Head>
        <title>Poly Story</title>
        <meta property="og:image" content="/img/poly-story/background.webp" />
        <meta name="twitter:card" content="https://heyko.org/img/poly-story/background.webp"></meta>
        <meta property="og:description" content="Poly Story is a multiplayer and cross-platform game of exploration of a magical and vast world, dotted with villages, caves and dragons! Run to discover this beautiful universe! Fight with your friends, and annihilate all the enemies that cross your path!, developed by Heyko" />
      </Head>
      <Navbar/>
      <div className={styles.title}>
        <div className={[styles.icon, styles.v1].join(" ")}></div>
        <h1 className={styles.title_text}>Poly Story</h1>
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionImage}></div>
          <p className={styles.description_text}>
            Poly Story is a multiplayer and cross-platform  game of exploration of a magical and vast world,
          dotted with villages, caves and dragons!
          Run to discover this beautiful universe!
          Fight with your friends, and annihilate all the enemies that cross your path!
          <br></br>
          The game is temporarily <strong>free</strong>
          </p>
        </div>
        <h2 className={styles.download_title}>Download</h2>
        <hr className='hr_4'></hr>
        <div className={styles.download}>
          <div className={[styles.Platform, styles.v1].join(" ")}></div>
          <div className={[styles.Platform, styles.v2].join(" ")}></div>
          <div className={[styles.Platform, styles.v3].join(" ")}></div>
        </div>
        <hr className='hr_4'></hr>

        <div className={styles.Devices_Contener}>
        <div className={styles.Device_Contener}>
          <div className={styles.Device_Contener_2}>
        <div className={[styles.Device, styles.v1].join(" ")}></div>
        <p className={styles.Device_Description}>For computer <br></br>( + Free phone edition )</p>
        </div>
        <p className={styles.Device_Price}>22,99 $</p>
        </div>

        <div className={styles.Device_Contener}>
        <div className={styles.Device_Contener_2}>
          <div className={[styles.Device, styles.v2].join(" ")}></div>
          <p className={styles.Device_Description}>For phone</p>
        </div>
        <p className={styles.Device_Price}>5,99 $</p>
        </div>
          </div>

          <div className={[styles.Download_Message, styles.Contener].join(" ")}>
          <p className={[styles.Download_message, styles.description].join(" ")}>
          The game is still in development and is not yet available. For more information (and to try for <strong>free</strong>), join our discord server 🎮
          </p>
          <a className={styles.a} href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn"><button className='button white center'>Join our discord</button></a>
        </div>
        <div className={[styles.videos, styles.contener].join(" ")}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ftnE6xgheo8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/-N-qRPPjP3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      <Footer/>
    </>
  );

}
export default App;