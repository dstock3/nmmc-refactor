import { elementBuilder, podListBuilder } from "./functions";
import Data from '../data/data.json5'

const Podcast = () => {
  const podcastTab = document.getElementById("podcast");
  podcastTab.setAttribute(
    "style",
    "background-color: #027bb348; border-radius: 5px;"
  );

  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-special");

  const mainBody = document.querySelector(".main-body")
  const podPageHead = elementBuilder("h1", "pod-page-head", mainBody);
  podPageHead.textContent = "Nightmare Tonight";
  
  let podArray = []
  for (let prop in Data.pods) {
    podArray.push(Data.pods[prop])
  }
  
  const podElementsArray = podListBuilder(podArray);
  
  const podContainerArray = document.getElementsByClassName("pod-container");
  for (let i = 0; i < podContainerArray.length; i++) {
    podContainerArray[i].classList.add("pod-page");
  }
  
}

export { Podcast }