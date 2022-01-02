import React from 'react';
import './Games.css'

function App() {
  return (
    <>
    <div className='Games title'>
    <div className='Games icon v1'></div>
    <h1 className='Games title_text'>Poly Story</h1>
    </div>
    <div className='Games decription'>
      <div className='Games descriptionImage'></div>
      <p className='Games decription_text'>
        Poly Story is a game of exploration of a magical and vast world,
      dotted with villages, caves and dragons!
      Run to discover this beautiful universe!
      
      Fight with your friends, and annihilate all the enemies that cross your path!
      </p>
    </div>

    <h2 className='Games download_title'>Download</h2>
    <hr className='hr_4'></hr>
    <div className='Game download'>
      <div className='Game Platform v1'></div>
      <div className='Game Platform v2'></div>
      <div className='Game Platform v3'></div>
    </div>
    <hr className='hr_4'></hr>
    <div className='Game Devices_Contener'>
    <div className='Game Device_Contener'>
      <div className='Game Device_Contener_2'>
    <div className='Game Device v1'></div>
    <p className='Game Device_Description'>For computer <br></br>( + Free phone edition )</p>
    </div>
    <p className='Game Device_Price'>22,99 $</p>
    </div>
    <div className='Game Device_Contener'>
    <div className='Game Device_Contener_2'>
      <div className='Game Device v2'></div>
      <p className='Game Device_Description'>For phone</p>
    </div>
    <p className='Game Device_Price'>5,99 $</p>
    </div>
      </div>
      <div className="Game Download_Message Contener">
      <p className='Game Download_message description'>
      The game is still in development and is not yet available. For more information, join our discord server 🎮
      </p>
      <a className='a' href="https://discord.gg/tKypaXn" target="https://discord.gg/tKypaXn"><button className='button white center'>Join our discord</button></a>
    </div>
            <div className="Games videos contener">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ftnE6xgheo8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/-N-qRPPjP3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
    </>
  );

}
export default App;