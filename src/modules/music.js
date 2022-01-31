import { elementBuilder, musicBuilder, albumBuilder, bandcampBuilder } from "./functions";
import Data from '../data/data.json5'

const musicTab = document.getElementById("music");
musicTab.setAttribute(
  "style",
  "background-color: #027bb348; border-radius: 5px;"
);

homelink.setAttribute("id", "home-special");
sideNavContainer.setAttribute("id", "side-nav-music");

const musicPage = elementBuilder("div", "music-page", mainBody);
const musicHead = elementBuilder("h1", "music-page-head", musicPage);
musicHead.textContent = `Freshest Tracks`;

const albumHead = elementBuilder("h2", "album-head", mainBody);
const albumSection = elementBuilder("div", "album-section", mainBody);

albumHead.textContent = "Full Albums";

let musicArray = []
for (let prop in Data.music) {
  musicArray.push(Data.music[prop])
}

const musicElementArray = musicBuilder(musicArray);

let albumArray = []
for (let prop in Data.albums) {
  albumArray.push(Data.album)
}

const albumElementArray = albumBuilder(albumArray);

const kofiDiv = document.getElementsByClassName("kofi-div")[0];
kofiDiv.classList.add("hidden");

const bandcampArray = bandcampBuilder(Data.bandcamp);

const bandCampDiv = document.getElementsByClassName("kofi-div")[0];
bandCampDiv.style.order = 2;
const bandcampButton = document.getElementsByClassName("kofi-button")[1];
bandcampButton.setAttribute("id", "bandcamp-button");
