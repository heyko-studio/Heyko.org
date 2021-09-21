import './Home.css';


function App() {

  return (
    <>
  
  <div className="content-slider">
        <div className="slider">
          {
            /*
            <div className="slides">
                <img src="./img/Harmony/Harmony1.webp" alt="Harmony illustration" className="slide" width="1000px"></img>
                <img src="./img/Poly-Story/P-Poly-Story_1.webp" alt="Poly Story" className="slide" width="1000px"></img>
                <img src="./img/Harmony/Harmony2.webp" alt="Harmony illustration" className="slide" width="1000px"></img>
                <img src="./img/Poly-Story/P-Poly-Story_2.webp" alt="Poly Story illustration" className="slide" width="1000px"></img>
                <img src="./img/Harmony/Harmony3.webp" alt="Harmony illustration" className="slide" width="1000px"></img>
                <img src="./img/Poly-Story/P-Poly-Story_3.webp" alt="Poly Story illustration" className="slide" width="1000px"></img>
            </div>
            */
        }
        <div className="Strip_1"></div>
        <div className="Strip_2"></div>
        <div className="Strip_3"></div>
        <br></br><br></br><br></br><br></br><br></br>
            <h1 className="Home_Sub_Title" ><strong className="Home_Title">Heyko<br></br></strong>Game creation studio</h1>
        
        {/*
            <svg className="Home Circle_1" width='200' height='200'>
   <circle cx='50' cy='50' r='40' stroke='#2e2e2e' strokeWidth='4' fill='transparent' />
</svg>
        */}
          { 
          /*
            <svg width='100' height='100'>
   <circle cx='50' cy='50' r='40' stroke='green' strokeWidth='4' fill='yellow' />
</svg>
*/
}
            <a href="#games"><svg  className="Home_Bottom_Arrow" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
</svg></a>
        </div>


        <svg viewBox="0 0 1920 200" fill="#2ea0e8"><path d="M 0 200 L 1007 159 L 1007 0 L 0 0 Z" strokeWidth="0"></path> <path d="M 1006 159 L 1920 119 L 1920 0 L 1006 0 Z" strokeWidth="0"></path> </svg>


        <div id="games">


          <h1 className="Home_Title_2">Our games</h1>


          <div className="Game">
        <div className="Home_Game  background_3">
          <h2 className="Home_Game_Title_2">➡️ Harmony</h2>
          <p className="Home_Game_Description_2">HARMONY is a game playing on gravity.<br></br> Double your ingenuity to try to complete all the levels!</p>
          </div>
          </div>

          <div className="Game">
          <div className="Home_Game background">
          <h2 className="Home_Game_Title">➡️ Five Mysteries</h2>
          <p className="Home_Game_Description">In a world where imagination is real...<br></br>
          Many creatures seek absolute power through a crystal with divine powers...<br></br> But a force beyond them will soon appear...</p>
          </div>
          </div>


          <div className="Game">
          <div className="Home_Game background_3">
          <h2 className="Home_Game_Title_2">➡️ Poly Story</h2>
          <p className="Home_Game_Description_2">Poly Story is a game of exploration of a magical and immense world,<br></br> dotted with villages, caves and dragons!<br></br> Run to discover this beautiful universe!</p>
          </div>
        </div>

        <div className="Game">
          <div className="Home_Game background_4">
          <h2 className="Home_Game_Title_2">💬 join our discord server</h2>
          <p className="Home_Game_Description_2">To discover the community, discuss, be informed before others,<br></br> and participate in the progress of the games
          </p>
          <a className="Button Join" href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn">Join
          </a>
          </div>
        </div>


        </div>
        </div>


        <h2 className="Home_Title_3">What is Heyko?</h2>
        <div className="Description">
        <p>
          Heyko is an independent video game creation team 😋
          </p>
          <div className="Description_text_underline"></div>
          <a href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn" className="Home_Social"><img alt="Discord" className="Home_Social_Image" src="img/discord.svg"></img></a>
          <a href="https://twitter.com/heyko_studio" target="https://twitter.com/heyko_studio" className="Home_Social"><img alt="Twitter" className="Home_Social_Image" src="img/Twitter.svg"></img></a>
          <a href="https://utip.io/heykostudio/" target="https://utip.io/heykostudio/" className="Home_Social"><img alt="Utip" className="Home_Social_Image" src="img/Utip.webp"></img></a>
         
          </div>

   </>
  );

}
export default App;