import Data from "../data/data.json5";
import Play from "../assets/images/icons/play.webp";
import { elementBuilder, linkBuilder } from "../modules/functions.js";
import "../style/reset.css";
import "../style/style.css";

const Sidebar = () => {
  const sectionContainer = document.querySelector(".section-container");
  const sideNavContainer = elementBuilder(
    "div",
    "side-nav-container",
    sectionContainer
  );

  const sideNav = elementBuilder("nav", "side-nav", sideNavContainer);
  const sideNavDropdown = elementBuilder(
    "div",
    "side-nav-dropdown",
    sideNavContainer
  );

  const sideNavList = elementBuilder("ul", "side-nav-list", sideNav);

  let sideNavLinkArray = [];
  for (let prop in Data.sideNavLinks) {
    sideNavLinkArray.push(Data.sideNavLinks[prop]);
  }
  linkBuilder(sideNavLinkArray, sideNavList, "side-nav-li", true);

  const playlistButton = elementBuilder(
    "button",
    "playlist-button",
    sideNavDropdown
  );
  playlistButton.textContent = "Playlists";

  const playlistIcon = elementBuilder("img", "playlist-icon", playlistButton);
  playlistIcon.src = Play;
  playlistIcon.alt = "playlist icon";

  const playlistDropdown = elementBuilder(
    "div",
    "playlist-dropdown",
    sideNavDropdown
  );
  playlistDropdown.classList.add("hidden");

  playlistButton.addEventListener("click", () => {
    playlistDropdown.classList.toggle("hidden");
  });

  const playlistList = elementBuilder("ul", "playlist-list", playlistDropdown);

  let playlistArray = [];
  for (let prop in Data.playlist) {
    playlistArray.push(Data.playlist[prop]);
  }

  const playlistLinks = linkBuilder(
    playlistArray,
    playlistList,
    "playlist-links",
    true
  );
};

export { Sidebar };
