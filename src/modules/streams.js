import { elementBuilder, videoBuilder, titleChange, videoArrayHandler } from "./functions";
import Data from '../data/data.json5'

const Streams = () => {
  let media = window.matchMedia("(max-width: 900px)")
  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");
  
  const mainBody = document.querySelector(".main-body")

  let streamsPageHead
  
  if (!media.matches) {
    streamsPageHead = elementBuilder("h1", "streams-page-head", mainBody);
    streamsPageHead.textContent = "NMMC Live";
  }

  let streamArray = []
  for (let prop in Data.live) {
    streamArray.push(Data.live[prop])
  }
  
  let videoElements = videoArrayHandler(streamArray, media);
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
      let listElements =  Array.from(document.getElementsByClassName("item"))
      for (let y = 0; y < listElements.length; y++) {
        listElements[y].classList.remove("item-selected")
      }
      vidListArray[i].vidListItem.classList.add("item-selected");
      titleChange(`${vidListArray[i].vidObj.title} | NMMC`)
      scroll(0,0)
    })
  }

}


export { Streams }