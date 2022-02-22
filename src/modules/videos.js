import {
  elementBuilder,
  videoBuilder,
  videoArrayHandler,
  titleChange,
} from "./functions";
import Data from "../data/data.json5";

const Videos = () => {
  let media = window.matchMedia("(max-width: 900px)");

  let sideNavContainer = document.querySelector(".side-nav-container");
  sideNavContainer.setAttribute("id", "side-nav-unfixed");

  let mainBody = document.querySelector(".main-body");

  let vidPageHead;

  if (!media.matches) {
    vidPageHead = elementBuilder("h1", "vid-page-head", mainBody);
    vidPageHead.textContent = "Videos";
  }

  let videoArray = [];
  for (let prop in Data.vids) {
    videoArray.push(Data.vids[prop]);
  }

  let videoElements = videoArrayHandler(videoArray, media);
  let vidElementsArray = videoElements.videoElementsArray;
  let vidListArray = videoElements.vidListArray;

  for (let i = 0; i < vidListArray.length; i++) {
    vidListArray[i].vidListItem.addEventListener(
      "click",
      function switchVids() {
        document.getElementsByClassName("video-container")[0].remove();
        let vidElements = videoBuilder(vidListArray[i].vidObj);
        let plugElement = document.querySelector(".plug-container");
        mainBody.insertBefore(vidElements[0], plugElement);
        vidElements[0].classList.add("video-page");
        vidElements[4].classList.add("video");

        let listElements = Array.from(document.getElementsByClassName("item"));
        for (let y = 0; y < listElements.length; y++) {
          listElements[y].classList.remove("item-selected");
        }
        vidListArray[i].vidListItem.classList.add("item-selected");
        titleChange(`${vidListArray[i].vidObj.title} | NMMC`);
        scroll(0, 0);
      }
    );
  }

  let videoContainer = document.getElementsByClassName("video-container");
  for (let i = 0; i < videoContainer.length; i++) {
    videoContainer[i].classList.add("video-page");
  }
};

export { Videos };
