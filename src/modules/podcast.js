import { elementBuilder, podBuilder, podListBuilder } from "./functions";
import Data from '../data/data.json5'

const Podcast = () => {
  let media = window.matchMedia("(max-width: 900px)")
  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");

  let mainBody = document.querySelector(".main-body")
  let podPageHead = elementBuilder("h1", "pod-page-head", mainBody);
  podPageHead.textContent = "Nightmare Tonight";
  
  let podArray = []
  for (let prop in Data.pods) {
    podArray.push(Data.pods[prop])
  }
  
  let podElementsArray = podListBuilder(podArray, mainBody, media);

  let podItems = podElementsArray.podItems

  for (let i = 0; i < podItems.length; i++) {
    podItems[i].podItem.addEventListener("click", function switchVids(){
      document.getElementsByClassName("pod-container")[0].remove()
      let podElements = podBuilder(podItems[i].podObj, mainBody)
      let plugElement = document.querySelector(".plug-container")
      mainBody.insertBefore(podElements[0], plugElement);
      podElements[0].classList.add("pod-page")
      podElements[3].classList.add("podcast")

    })
  }

  
  let podContainerArray = Array.from(document.getElementsByClassName("pod-container"));
  for (let i = 0; i < podContainerArray.length; i++) {
    podContainerArray[i].classList.add("pod-page");
  }
  
}

export { Podcast }