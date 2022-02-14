import { elementBuilder, videoBuilder, videoArrayHandler } from "./functions";
import Data from '../data/data.json5'

const Videos = () => {
  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");
  
  let mainBody = document.querySelector(".main-body")
  let vidPageHead = elementBuilder("h1", "vid-page-head", mainBody);
  vidPageHead.textContent = "Videos";

  let videoArray = []
  for (let prop in Data.vids) {
    videoArray.push(Data.vids[prop])
  }

  let videoElements = videoArrayHandler(videoArray);
  let vidElementsArray = videoElements.videoElementsArray
  let vidListArray = videoElements.vidListArray

  for (let i = 0; i < vidListArray.length; i++) {
    vidListArray[i].vidListItem.addEventListener("click", function switchVids(){
      document.getElementsByClassName("video-container")[0].remove()
      let vidElements = videoBuilder(vidListArray[i].vidObj)
      vidElements[0].classList.add("video-page")
      vidElements[4].classList.add("video");
    })
  }

  let videoContainer = document.getElementsByClassName("video-container");
  for (let i = 0; i < videoContainer.length; i++) {
    videoContainer[i].classList.add("video-page");
  }
  
}

export { Videos }


