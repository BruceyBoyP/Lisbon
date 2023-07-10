import logo from './trapcoinimg.png';
import './App.css';
import NavBars from './NavBars';
import StepCard from './StepCard';
import WhitePaper from './WhitePaper';
import VideoOne from './VideoOne';
import VideoTwo from './VideoTwo';
import VideoThree from './VideoThree';
import ImagesTwo from './ImagesTwo'

function App() {
  return (
    <div>
    <NavBars/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p><h1>
          Welcome to TrapCoin
          </h1>
          </p>
          <p><a href="https://polygonscan.com/token/0x8c747f1261782976B06d18f24b3e2F18f5B5a658">TrapCoin</a></p>
          <p>Total Supply: 200,000,000,000</p>
          <br/>
          <p>
          <h5>Introduction</h5>              
          </p>
          <p>What is trap coin 🪙🪙</p>
<p>
Trap coin is a fully decentralized Token.
{"\n"}
Trap coin is a utility token shaped to fund for the payment system in the crypto currency  ecosystem. The 
trap coin consist of  futuristic elegant and ambitious Blockchain technologies  such as Non- fungible 
Tokens(NFT) Nft Marketplace, play to earn(P2E) games to innovate other service to be launched as a 
ecosystem development.
</p>

<p><h5>FAIRER LAUNCHER</h5></p>
        <p>Trap coin is distributed through fair launch, giving out all crypto enthusiastics, novice and experts
          alike fair opportunities and a level playing Around to onboard themselves into this great, integrated 
          and ambitious Crypto project.
</p>
<p><h5>Sustainability </h5></p>
<p>Trap coin ($TC Token)  funding a rebalancing technique expertly curated through Data science through this, 
  the marketing funds Is expertly staked and invested in asset's which yield weekly revenue for the project to 
  through passive income, thereby by ensuring that the development of trap coin. The straightforward, well 
  integrated and flexible ecosystem is sustainable, while achieving higher token value and market capitalization.
</p>
<p><h5>Importize</h5></p>
<p>Trap Coin ($TC token) has the accurate and a beneficial fiscal structure but also efficient in the crypto 
  world
</p>
<p><h5>Utility</h5></p>
        <p>
        Trap coin ($TC) serve as a ecosystem of  value and a means of exchange of all trap coin($TC) structure. These products including gaming Play to Earn (P2E), NFTS e.t.c

          </p>

          <p><h5>Why Invest in TrapCoin</h5></p>
        <p>
        It's going to be one of the first project that's aims to erase scammer from the ecosystem. We will have a full structured idea of the purpose. We are having a goal of  bringing the crypto community a benefit to all investors, artist, stakeholders and most especially for those are are beginning the crypto journey. 

*Invest in a new ecosystem and a safe community without scammers being involved, trust and verify and you will  be safe.
          </p>

<p><h5>ROAD MAP </h5></p>
<p></p>
<br/>
<p></p>
      </header>
      <div className='bg-black'>
    <StepCard/>
    <br/>
   <center><WhitePaper/></center>
   <br/>
   <VideoOne/>
   <br/>
   <VideoTwo/>
   <br/>
   <VideoThree/> 
   <br/> 
   <ImagesTwo/>
   <br/>
   <center><h2>@Copyright TrapCoin Nation 2023</h2></center>
   <br/>
      </div>
    </div>
  );
}

export default App;
