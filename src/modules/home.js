import {
  elementBuilder,
  videoBuilder,
  musicBuilder,
  tabSelect,
  removeExistingPage,
} from "./functions.js";
import { Videos } from "./videos.js";
import { Music } from "./music.js";
import { Plugs } from "./plug.js";
import Data from "../data/data.json5";
import { musicArray } from "../data/tracks.js";

const Home = () => {
  let media = window.matchMedia("(max-width: 900px)");
  let sideNavContainer = document.querySelector(".side-nav-container");
  sideNavContainer.setAttribute("id", "side-nav-unfixed");

  let mainBody = document.querySelector(".main-body");
  let juniorBody = document.querySelector(".junior-body");

  /* Video Section */

  let videoArray = [];
  for (let prop in Data.vids) {
    videoArray.push(Data.vids[prop]);
  }
  let video = videoArray[0];
  videoBuilder(video);
  const videoContainer = document.getElementsByClassName("video-container")[0];
  const iframe = document.getElementsByTagName("iframe")[0];
  iframe.classList.add("video");

  const mainHead = document.getElementsByTagName("h2")[0];
  mainHead.setAttribute("id", "main-head");

  const vidButtonDiv = elementBuilder("div", "more-vids", videoContainer);
  const moreVideos = elementBuilder("button", "vid-button", vidButtonDiv);
  moreVideos.classList.add("home-buttons");
  const vidAnchor = elementBuilder("div", "vid-link", moreVideos);
  vidAnchor.textContent = "More Vids >";

  vidAnchor.addEventListener("click", function goVid() {
    tabSelect(["music", "streams", "contact"]);

    removeExistingPage(mainBody, juniorBody);
    mainBody.removeAttribute("id");
    juniorBody.removeAttribute("id");
    scroll(0, 0);
    Videos();
    if (media.matches) {
      Plugs(mainBody);
    }
  });

  /* Announcements */

  const announcementsContainer = elementBuilder(
    "div",
    "a-container",
    juniorBody
  );
  const announcements = elementBuilder(
    "article",
    "announcements",
    announcementsContainer
  );
  const announcementsHead = elementBuilder("h2", "a-head", announcements);
  announcementsHead.textContent = Data.announcements.head;

  const announcementsBody = elementBuilder("p", "a-body", announcements);
  announcementsBody.textContent = Data.announcements.text;
  const announcementsLink = elementBuilder("a", "a-link", announcements);
  announcementsLink.href = Data.announcements.link;
  announcementsLink.setAttribute("target", "_blank");
  announcementsLink.setAttribute("rel", "noreferrer noopener");
  announcementsLink.textContent = Data.announcements.desc;

  const buttons = document.getElementsByTagName("button");
  for (let i = 1; i < buttons.length; i++) {
    buttons[i].classList.add("home-buttons");
  }

  /* Music Section */

  const musicPage = elementBuilder("div", "music-container", juniorBody);

  const musicHead = elementBuilder("h2", "music-head", musicPage);
  musicHead.textContent = `Freshest Tracks`;
  const newArray = [musicArray[0]];

  musicBuilder(newArray, musicPage, media, true);

  const moreMusic = elementBuilder("button", "music-button", musicPage);
  const musicAnchor = elementBuilder("div", "music-link", moreMusic);
  musicAnchor.textContent = "More Music >";

  musicAnchor.addEventListener("click", function goMusic() {
    tabSelect(["videos", "podcast", "streams", "contact"]);

    removeExistingPage(mainBody, juniorBody);
    mainBody.removeAttribute("id");
    juniorBody.removeAttribute("id");
    scroll(0, 0);
    Music();
    Plugs();
  });
};

export { Home };
