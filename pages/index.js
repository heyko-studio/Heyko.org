import Link from 'next/link'
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <div className="content-slider">
        <div className={styles.slider}>
          <br></br><br></br>
          <div className={styles.Strip_1}></div>
          <div className={styles.Strip_2}></div>
          <div className={styles.Strip_3}></div>
          <h1 className={styles.Home_Sub_Title} >
          <img className={`${styles.Home} ${styles.Banner}`} src="img/heyko.png" alt="Heyko's Banner" width="450px"></img><br></br>
          Game creation studio</h1>
        <a href="#games"><svg  className={styles.Home_Bottom_Arrow} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" /></svg>
        </a>
      </div>
      <svg className={`${styles.Home} ${styles.Separator}`} viewBox="0 0 1920 200" fill="#7CD8FF"><path d="M 0 200 L 1007 159 L 1007 0 L 0 0 Z" strokeWidth="0"></path> <path d="M 1006 159 L 1920 119 L 1920 0 L 1006 0 Z" strokeWidth="0"></path> </svg>
      <section className={`${styles.Home} ${styles.Games}`} id="games">
        <h1 className="Title v2">Our games</h1>
        <div className="Break"></div>

        <div className={styles.Game}>
          <div className={`${styles.Home_Game} ${styles.background_3}`}>
            <div className={`${styles.Home} ${styles.Game_Background} ${styles.v3}`}>
              <h2 className={styles.Home_Game_Title}>Poly Story</h2>
            </div>
            <br></br><br></br><br></br><br></br>
            <p className={styles.Home_Game_Description}>Poly Story is a game of exploration of a magical and vast world, dotted with villages, caves and dragons! Run to discover this beautiful universe!<br></br> Fight with your friends, and annihilate all the enemies that cross your path!</p>
            <Link href="games/poly-story">
              <p className="button default blue" style={{width: 'fit-content', marginBottom: '-12px'}}>More</p>
            </Link>
          </div>
        </div>

        <div className={styles.Game}>
        <div className={`${styles.Home_Game} ${styles.background_3}`}>
        <div className={`${styles.Home} ${styles.Game_Background} ${styles.v1}`}>
          <h2 className={styles.Home_Game_Title}>Five Mysteries</h2>
          </div>
          <br></br><br></br><br></br><br></br>
          <p className={styles.Home_Game_Description}>In a world where imagination is real...<br></br>
          Many creatures seek absolute power through a crystal with divine powers...<br></br> But a force beyond them will soon appear...</p>
            <Link href="games/five-mysteries">
              <p className="button default blue" style={{width: 'fit-content', marginBottom: '-12px'}}>More</p>
            </Link>
          </div>
        </div>

        <div className={styles.Game}>
        <div className={`${styles.Home_Game} ${styles.background_3}`}>
          <div className={`${styles.Home} ${styles.Game_Background} ${styles.v2}`}>
            <h2 className={styles.Home_Game_Title}>Harmony</h2>
            </div>
            <br></br><br></br><br></br><br></br>
            <p className={styles.Home_Game_Description}>HARMONY is a game playing on gravity.<br></br> Double your ingenuity to try to complete all the levels!</p>
            <a className={`${styles.Home} ${styles.Button} ${styles.Join}`} href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn">
              Coming soon
            </a>
          </div>
        </div>

        <div className={styles.Game}>
        <div className={`${styles.Home_Game} ${styles.background_4}`}>
        <h2 className={`${styles.Home_Game_Title} ${styles.v2}`}>💬 join our discord server</h2>
        <br></br><br></br><br></br>
          <p>To discover the community, discuss, be informed before others,<br></br> and participate in the progress of the games
          </p>
          <a className="button default" target="https://discord.gg/tKypaXn">
            Join
          </a>
          </div>
        </div>
        
        </section>
        </div>
        <h2 className="Title v2">What is Heyko?</h2>
        <div className={styles.Description}>
        <p>
          Heyko is an independent video game creation team
          </p>
          <div className={styles.Description_text_underline}></div>
          <a href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn" className={styles.Home_Social}><img alt="Discord" className={styles.Home_Social_Image} src="img/discord.svg"></img></a>
          <a href="https://twitter.com/heyko_studio" target="https://twitter.com/heyko_studio" className={styles.Home_Social}><img alt="Twitter" className={styles.Home_Social_Image} src="img/Twitter.svg"></img></a>
          <a href="https://utip.io/heykostudio/" target="https://utip.io/heykostudio/" className={styles.Home_Social}><img alt="Utip" className={styles.Home_Social_Image} src="img/Utip.webp"></img></a>
          <br></br><br></br>
          <Link href="/about"><button className="button view">More informations</button></Link>
      </div>
      <Footer/>
    </>
  );

}
export default App;