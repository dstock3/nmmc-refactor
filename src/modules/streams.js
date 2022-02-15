import { elementBuilder, videoBuilder, videoArrayHandler } from "./functions";
import Data from '../data/data.json5'

const Streams = () => {
  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");
  
  const mainBody = document.querySelector(".main-body")
  const streamsPageHead = elementBuilder("h1", "streams-page-head", mainBody);
  streamsPageHead.textContent = "NMMC Live";
  
  let streamArray = []
  for (let prop in Data.live) {
    streamArray.push(Data.live[prop])
  }
  
  let videoElements = videoArrayHandler(streamArray);
  let vidElementsArray = videoElements.videoElementsArray
  let vidListArray = videoElements.vidListArray

  for (let i = 0; i < vidListArray.length; i++) {
    vidListArray[i].vidListItem.addEventListener("click", function switchVids(){
      document.getElementsByClassName("video-container")[0].remove()
      let vidElements = videoBuilder(vidListArray[i].vidObj)
      let plugElement = document.querySelector(".plug-container")
      mainBody.insertBefore(vidElements[0], plugElement);
      vidElements[0].classList.add("video-page")
      vidElements[4].classList.add("video");
    })
  }

}


export { Streams }