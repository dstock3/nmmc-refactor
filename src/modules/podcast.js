import { elementBuilder, podListBuilder } from "./functions";
import Data from '../data/data.json5'

const podcastTab = document.getElementById("podcast");
podcastTab.setAttribute(
  "style",
  "background-color: #027bb348; border-radius: 5px;"
);

sideNavContainer.setAttribute("id", "side-nav-special");

const podPageHead = elementBuilder("h1", "pod-page-head", mainBody);
podPageHead.textContent = "Nightmare Tonight";

let podArray = []
for (let prop in Data.pods) {
  podArray.push(Data.pods[prop])
}

const podElementsArray = podListBuilder(podArray);

const podContainerArray = document.getElementsByClassName("pod-container");
for (i = 0; i < podContainerArray.length; i++) {
  podContainerArray[i].classList.add("pod-page");
}
