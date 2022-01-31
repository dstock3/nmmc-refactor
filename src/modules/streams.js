import { elementBuilder, videoArrayHandler } from "./functions";
import Data from '../data/data.json5'

const Streams = () => {
  const streamsTab = document.getElementById("streams-tab");
  streamsTab.setAttribute(
    "style",
    "background-color: #027bb348; border-radius: 5px;"
  );

  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-special");
  
  const mainBody = document.querySelector(".main-body")
  const streamsPageHead = elementBuilder("h1", "streams-page-head", mainBody);
  streamsPageHead.textContent = "NMMC Live";
  
  let streamArray = []
  for (let prop in Data.live) {
    streamArray.push(Data.live[prop])
  }
  
  videoArrayHandler(streamArray);
}


export { Streams }