import { elementBuilder, musicBuilder, iframeHelper, albumBuilder, bandcampBuilder } from "./functions";
import Data from '../data/data.json5'
import { musicArray } from "../data/tracks.js";

const Music = () => {
  let homelink = document.querySelector(".home-link")

  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");

  let mainBody = document.querySelector(".main-body")
  let musicPage = elementBuilder("div", "music-page", mainBody);
  let musicHead = elementBuilder("h1", "music-page-head", musicPage);
  musicHead.textContent = `New Music`;
  
  let musicElements = musicBuilder(musicArray, musicPage);
  let musicElementArray = musicElements.musicElementArray
  let trackListArray = musicElements.trackListArray

  for (let i = 0; i < trackListArray.length; i++) {
    trackListArray[i].trackListItem.addEventListener("click", function switchTracks(){
      document.getElementsByClassName("music-container")[0].remove()
      let newMusicContainer = elementBuilder("div", "music-container", musicPage);
      let newTrackContainer = elementBuilder("div", "track-container", newMusicContainer);
      let newMusic = iframeHelper(
        newTrackContainer,
        `new-music`,
        trackListArray[i].trackObj.iframeRef
      );
      newMusic.setAttribute("id", `${trackListArray[i].trackObj.id}`);
      newMusic.loading = "lazy";
      newMusic.title = trackListArray[i].trackObj.track;
    })
  }
  
  let albumHead = elementBuilder("h2", "album-head", mainBody);
  let albumSection = elementBuilder("div", "album-section", mainBody);
  
  albumHead.textContent = "Full Albums";
    
  let albumArray = []
  for (let prop in Data.albums) {
    albumArray.push(Data.albums[prop])
  }
  
  let albumElementArray = albumBuilder(albumArray);
  
  
  let kofiDiv = document.getElementsByClassName("kofi-div")[0];
  kofiDiv.classList.add("hidden");
  
  let bandcampArray = bandcampBuilder(Data.bandcamp);
  
  let bandCampDiv = document.getElementsByClassName("kofi-div")[0];
  bandCampDiv.style.order = 2;
  let bandcampButton = document.getElementsByClassName("kofi-button")[1];
  bandcampButton.setAttribute("id", "bandcamp-button");
  
}

export { Music }
