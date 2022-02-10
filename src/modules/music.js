import { elementBuilder, musicBuilder, albumBuilder, bandcampBuilder } from "./functions";
import Data from '../data/data.json5'

const Music = () => {
  let homelink = document.querySelector(".home-link")
  homelink.classList.add("home-special");

  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-music");

  const mainBody = document.querySelector(".main-body")
  const musicPage = elementBuilder("div", "music-page", mainBody);
  const musicHead = elementBuilder("h1", "music-page-head", musicPage);
  musicHead.textContent = `Freshest Tracks`;
  
  let musicArray = []
  for (let prop in Data.tracks) {
    console.log(Data.tracks[prop])
    musicArray.push(Data.tracks[prop])
  }
  
  const musicElementArray = musicBuilder(musicArray, mainBody);
  
  
  const albumHead = elementBuilder("h2", "album-head", mainBody);
  const albumSection = elementBuilder("div", "album-section", mainBody);
  
  albumHead.textContent = "Full Albums";
    
  let albumArray = []
  for (let prop in Data.albums) {
    albumArray.push(Data.albums[prop])
  }
  
  const albumElementArray = albumBuilder(albumArray);
  
  const kofiDiv = document.getElementsByClassName("kofi-div")[0];
  kofiDiv.classList.add("hidden");
  
  const bandcampArray = bandcampBuilder(Data.bandcamp);
  
  const bandCampDiv = document.getElementsByClassName("kofi-div")[0];
  bandCampDiv.style.order = 2;
  const bandcampButton = document.getElementsByClassName("kofi-button")[1];
  bandcampButton.setAttribute("id", "bandcamp-button");
  
}

export { Music }
