import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logofrisor.png';
import img from './assets/moreinfo.png';
import facebookLogo from './assets/facebookLogo.png';
import IOS from './assets/IOS.png';
import Android from './assets/Android.png';

import './App.css'

function Content() {
  return (
    <div className="content">
      <p>
        "Välkommen till Frisör Plus Webbsida! Utforska vår digitala plattform för en enkel tidsbokning. Ladda ner
        vår praktiska app för Android eller iOS för ett smidigt tidsbokning för ditt
        nästa klippning. Njut av en sömlös grooming-upplevelse, varje gång."
      </p>
    </div>
  );
}

function MoreInfo() {
  return (
    <div className="moreInfo">
      <p>Ladda ner vår IOS app här:</p>
      <img className="IOS" src={IOS} alt="IOS" />

      <p>Ladda ner vår Android app här:</p>
      <a href="https://play.google.com/store/apps/details?id=com.release.frisorplus">
        <img className="Android" src={Android} alt="Android" />
      </a>

      <p>Adress: Carl krooks gata 6, Helsingborg</p>
      
      <a href="mailto:frisorplus@gmail.com">
      <p>Epost: frisorplus@gmail.com</p>
      </a>

      <p>Telefon: +46 737722220</p>

      <a href="https://www.facebook.com/frisorplus.se">
      <img className="facebookLogo" src={facebookLogo} alt="facebookLogo" />
      </a>
     
    </div>
  );
}

function Timeinfo() {
  return (
    <div className="timeinfo">
      <h2>Öppettider:</h2>
      <ul>
        <li>Måndag 09:00 – 18:00</li>
        <li>Tisdag 09:00 – 18:00</li>
        <li>Onsdag 09:00 – 18:00</li>
        <li>Torsdag 09:00 – 18:00</li>
        <li>Fredag 09:00 – 18:00</li>
        <li>Lördag 10:00 – 15:00</li>
      </ul>
      <p>📍Söndag Stäng!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <Content />
      <div className="flex-container">
        <MoreInfo />
        <div style={{ marginLeft: '20px', marginTop: '20px' }}>
          <Timeinfo />
          <img className="img" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default App
