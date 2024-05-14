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
      "Välkommen till Frisör Plus Webbsida! Utforska vår digitala platform för en enkel tids bokning. Ladda ner
      vår praktiska app för Android eller iOS för ett smidigt tids bokning för ditt
      nästa klippning. Njut av en sömlös grooming-upplevelse, varje gång."
      </p>
    </div>
  );
}

function MoreInfo() {
  return (
    <div className="moreInfo">
      <p> Ladda ner vår IOS app här: </p>
      <img class="IOS" src={IOS} alt="IOS"/>

      <p> Ladda ner vår Android app här: </p>
      <img class="Android" src={Android} alt="Android"/>

      <p> Adress: Carl krooks gata 6, Helsingborg </p>
      <p> Epost: frisorplus@gmail.com </p>
      <p> Telefon: +46 737722220 </p>
      <img class="facebookLogo" src={facebookLogo} alt="facebookLogo"/>
    </div>
  );
}

function App() {
  return (
    <div>
      <img class="logo" src={logo} alt="logo"/>
      <Content />
      <div style={{ display: "flex", alignItems: "center" }}>
      <MoreInfo/>
      <div style={{ marginLeft: "auto" }}>
      <Timeinfo />
      <img class="img" src={img} alt="img"/>
      </div>
      </div>
    </div>
  )
}

function Timeinfo() {
  return (
    <div className="timeinfo">
      <h2>Öpettider:</h2>
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

export default App
