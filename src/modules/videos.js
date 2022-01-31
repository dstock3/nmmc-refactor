import { elementBuilder, videoArrayHandler } from "./functions";
import Data from '../data/data.json5'

const Videos = () => {
  const videosTab = document.getElementById("videos-tab");
  videosTab.setAttribute(
    "style",
    "background-color: #027bb348; border-radius: 5px;"
  );

  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-special");
  
  const mainBody = document.querySelector(".main-body")
  const vidPageHead = elementBuilder("h1", "vid-page-head", mainBody);
  vidPageHead.textContent = "Recent Vids";

  let videoArray = []
  for (let prop in Data.vids) {
    videoArray.push(Data.vids[prop])
  }

  const videoElementsArray = videoArrayHandler(videoArray);

  const videoContainer = document.getElementsByClassName("video-container");
  for (let i = 0; i < videoContainer.length; i++) {
    videoContainer[i].classList.add("video-page");
  }
}

export { Videos }


