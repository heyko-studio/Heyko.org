import './Home.css';
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <>
  <div className="content-slider">
        <div className="slider">
        <div className="Strip_1"></div>
        <div className="Strip_2"></div>
        <div className="Strip_3"></div>
        <br></br><br></br><br></br><br></br><br></br>
        
            <h1 className="Home_Sub_Title" >
            <img className="Home Banner" src="img/heyko.png" alt="Heyko's Banner" width="450px"></img><br></br>
  Game creation studio</h1>
        
    
            <a href="#games"><svg  className="Home_Bottom_Arrow" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
</svg></a>
        </div>


        <svg className="Home Separator" viewBox="0 0 1920 200" fill="#7CD8FF"><path d="M 0 200 L 1007 159 L 1007 0 L 0 0 Z" strokeWidth="0"></path> <path d="M 1006 159 L 1920 119 L 1920 0 L 1006 0 Z" strokeWidth="0"></path> </svg>


        <section className='Home Games' id="games">


          <h1 className="Title_2">Our games</h1>

          <div className="Global Break"></div>
          <div className="Game">
        <div className="Home_Game  background_3">
        <div className="Home Game_Background v2">
          <h2 className="Home_Game_Title">Harmony</h2>
          </div>
          <br></br><br></br><br></br><br></br>
          <p className="Home_Game_Description_2">HARMONY is a game playing on gravity.<br></br> Double your ingenuity to try to complete all the levels!</p>
          <a className="Home Button Join" href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn">
            Coming soon
          </a>
          </div>
          </div>



          <div className="Game">
          <div className="Home_Game background">
            <div className="Home Game_Background v3">
          <h2 className="Home_Game_Title">Poly Story</h2>
          </div>
          <br></br><br></br><br></br><br></br>
          <p className="Home_Game_Description">Poly Story is a game of exploration of a magical and vast world, dotted with villages, caves and dragons! Run to discover this beautiful universe!<br></br> Fight with your friends, and annihilate all the enemies that cross your path!</p>
          <button className="Home Button More_2" onClick={() => {window.scrollTo(0, 0);history.push("games/poly-story")}}>
            More
          </button>
          </div>
        </div>

        <div className="Game">
        <div className="Home_Game background_3">
          <div className="Home Game_Background">
          <h2 className="Home_Game_Title">Five Mysteries</h2>
          </div>
          <br></br><br></br><br></br><br></br>
          <p className="Home_Game_Description_2">In a world where imagination is real...<br></br>
          Many creatures seek absolute power through a crystal with divine powers...<br></br> But a force beyond them will soon appear...</p>
          <a className="Home Button Join" href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn">
            Coming soon
          </a>
          </div>
          </div>

        <div className="Game">
          <div className="Home_Game background_4">
          <h2 className="Home_Game_Title_2">💬 join our discord server</h2>
          <p className="Home_Game_Description_2">To discover the community, discuss, be informed before others,<br></br> and participate in the progress of the games
          </p>
          <a className="Home Button Join" href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn">
            Join
          </a>
          </div>
        </div>
        </section>
        </div>

        <h2 className="Title_2 v2">What is Heyko?</h2>
        <div className="Description">
        <p>
          Heyko is an independent video game creation team
          </p>
          <div className="Description_text_underline"></div>
          <a href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn" className="Home_Social"><img alt="Discord" className="Home_Social_Image" src="img/discord.svg"></img></a>
          <a href="https://twitter.com/heyko_studio" target="https://twitter.com/heyko_studio" className="Home_Social"><img alt="Twitter" className="Home_Social_Image" src="img/Twitter.svg"></img></a>
          <a href="https://utip.io/heykostudio/" target="https://utip.io/heykostudio/" className="Home_Social"><img alt="Utip" className="Home_Social_Image" src="img/Utip.webp"></img></a>
          <br></br><br></br>
          <button onClick={() => history.push('/informations')} className="button view">More informations</button>
          </div>
    </>
  );

}
export default App;