import { elementBuilder, musicBuilder, iframeHelper, titleChange, albumBuilder, bandcampBuilder } from "./functions";
import Data from '../data/data.json5'
import { musicArray } from "../data/tracks.js";

const Music = () => {
  let media = window.matchMedia("(max-width: 900px)")
  let homelink = document.querySelector(".home-link")

  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");

  let mainBody = document.querySelector(".main-body")
  let juniorBody = document.querySelector(".junior-body")
  let musicPage = elementBuilder("div", "music-page", mainBody);
  
  let musicHead 
  if (!media.matches) {
    musicHead = elementBuilder("h1", "music-page-head", musicPage);
    musicHead.textContent = `New Music`;
  }

  let musicElements = musicBuilder(musicArray, musicPage, media);
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
      let listElements =  Array.from(document.getElementsByClassName("item"))
      for (let y = 0; y < listElements.length; y++) {
        listElements[y].classList.remove("item-selected")
      }
      trackListArray[i].trackListItem.classList.add("item-selected");
      titleChange(`${trackListArray[i].trackObj.track} | NMMC`)
      scroll(0,0)
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
  
  let bandcampArray = bandcampBuilder(Data.bandcamp, juniorBody);
  let bandCampDiv = document.getElementsByClassName("kofi-div")[0];
  bandCampDiv.style.order = 2;
  let bandcampButton = document.getElementsByClassName("kofi-button")[0];
  bandcampButton.setAttribute("id", "bandcamp-button");
  
}

export { Music }
