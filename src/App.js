import Logo from '../src/photoLogo.png'
import kiss from '../src/kiss.jpg'
import crazy from '../src/crazy.jpg'
import f from '../src/f.jpg'
import React from 'react';
import './style.css/nav.css'; // Import your CSS file
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <section className="header">
        <nav>
          <a href="index.html"><img src={Logo} /></a>
          <div className="nav-links" id="navLinks">
          <FontAwesomeIcon icon={faCircleXmark} className="fa" onClick={hideMenu} />
            <ul>
              <li><a href="Home">Home</a></li>
              <li><a href="Artworks">Artworks</a></li>
              <li><a href="About">About</a></li>
            </ul>
          </div>
          <FontAwesomeIcon icon={faBars} className="fa" onClick={showMenu} />
        </nav>
        <div className="text-box">
          <h1>ONE LOVELY CAPTURED</h1>
          <p>"The eye should learn how to listen before it looks"</p>
          <a href="http://" className="btnAbt">Join us online!</a>
        </div>
      </section>

      <section className="connect">
        <h1>Most Famous Photograph in the History</h1>
        <div className="row">
          <div className="connect-col">
            <img src={kiss}/>
            <h3>The Iconic V-J Day in Times Square by Alfred Eisenstaedt | 1945</h3>
            <p>“People tell me that when I’m in heaven, they will remember this picture.<br />
            ”His famous photograph of the soldier and dental nurse has become one of the
            most iconic images of the 20th century, signifying the joyous end to years of war.</p>
          </div>
          <div className="connect-col">
            <img src={crazy}/>
            <h3>The famous photo The Steerage by Alfred Stieglitz | 1907</h3>
            <p>“I stood spellbound for a while. I saw shapes related to one another—a picture of shapes,<br />
            and underlying it, a new vision that held me.”</p>
          </div>
          <div className="connect-col">
            <img src={f} />
            <h3>James Nachtwey | Famine in Somalia | 1992</h3>
            <p>“Dare we say that it doesn’t get any worse than this?”</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h1>CHOICES MAKES US WHO WE ARE</h1>
        <p>The collections are as diverse as they are unique. <br />
        This is a place for art lovers around the world to appreciate Mabini Art.</p>
        <a href="http://" className="btnAbt">JOIN US!</a>
      </section>

      <section className="footer">
        <h4>About us</h4>
        <p>Welcome to "One Lovely Captured," your portal to a 
          <br />celestial canvas where we unveil the universe in all its
          magnificent forms through the art of photography. <br />
          Within these digital frames, you will embark on a cosmic journey,
          from the grandeur of distant galaxies to the minute intricacies of our own planet.
          <br /> Through my lens, I aim to encapsulate the beauty, wonder, and
          infinite diversity that the universe has to offer, one captivating image at a time. <br />
          Join me on this cosmic odyssey as we explore the boundless beauty of the universe <br />
          through the magic of photography.
        </p>
        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-envelope"></i>
        </div>
        <p>Metrogate Dasmarinas, Blk 3, Street 69, Lot 9, Brgy San Agustin, Dasmarinas Cavite, Philippines</p>
      </section>
    </div>
  );

  function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
  }

  function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
  }
}

export default App;
