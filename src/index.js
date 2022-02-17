import './style/reset.css'
import './style/style.css'
import Data from './data/data.json5';
import { elementBuilder, titleChange, linkBuilder, tabSelect, removeExistingPage } from './modules/functions.js';
import { Home } from './modules/home.js'
import { Music } from './modules/music.js'
import { Podcast } from './modules/podcast.js'
import { Streams } from './modules/streams.js'
import { Videos } from './modules/videos.js'
import { Contact } from './modules/contact.js'
import { Plugs } from './modules/plug.js'
import Logo from './assets/images/logo.webp'
import Favicon from './assets/images/icons/favicon.png'
import Play from './assets/images/icons/play.webp'
import { Footer } from './modules/footer';
import { GBox } from './assets/vendors/glightbox.js'

let media = window.matchMedia("(max-width: 900px)")

const head = document.querySelector("head");
const body = document.querySelector("body");
const mainContainer = elementBuilder("div", "main-container", body);

const favIcon = elementBuilder("link", "favicon", head);
favIcon.rel = "shortcut icon";
favIcon.type = "image/png";
favIcon.href = Favicon

const header = elementBuilder("header", "head-nav", mainContainer);
const homelink = elementBuilder("a", "home-link", header);
homelink.style.cursor = "pointer";
const logo = elementBuilder("img", "logo", homelink);
logo.src = Logo
logo.alt = `NMMC logo`;

const linkNav = elementBuilder("nav", "link-nav", header);
const linkList = elementBuilder("ul", "nav-list", linkNav);

const navLi = document.getElementsByClassName("nav-li");

const sectionContainer = elementBuilder(
  "section",
  "section-container",
  mainContainer
);

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

const mainBody = elementBuilder("main", "main-body", sectionContainer);
const juniorBody = elementBuilder("div", "junior-body", sectionContainer);

const sideNavList = elementBuilder("ul", "side-nav-list", sideNav);

let sideNavLinkArray = []
for (let prop in Data.sideNavLinks) {
  sideNavLinkArray.push(Data.sideNavLinks[prop])
}
linkBuilder(sideNavLinkArray, sideNavList, "side-nav-li", true);

const playlistButton = elementBuilder(
  "button",
  "playlist-button",
  sideNavDropdown
);
playlistButton.textContent = "Playlists";

const playlistIcon = elementBuilder("img", "playlist-icon", playlistButton);
playlistIcon.src = Play
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

let playlistArray = []
for (let prop in Data.playlist) {
  playlistArray.push(Data.playlist[prop])
}

const playlistLinks = linkBuilder(
  playlistArray,
  playlistList,
  "playlist-links",
  true
);

const TabBuilder = (() => {
    const tabs = ['videos', 'podcast', 'music', 'streams', 'contact']

    homelink.id = "home-tab"
    titleChange("Home | NMMC")
    homelink.addEventListener("click", function goHome() {
      tabSelect(['music', "videos", "podcast", "streams", "contact"]);
      titleChange("Home | NMMC")
      removeExistingPage(mainBody, juniorBody)
      mainBody.removeAttribute('id')
      juniorBody.removeAttribute('id')
      Home()
    })

    Home()

    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let tabElement = elementBuilder('li', "nav-li", linkList);
        tabElement.id = tab + "-tab"
        tabElement.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
        
        tabElement.addEventListener('click', function goToPage() {
            tabElement.classList.add("selected");

            switch (tab) {
              case 'videos':
                tabSelect(["home", "music", "podcast", "streams", "contact"]);
                homelink.classList.remove("home-special")
                titleChange("Videos | NMMC")
                removeExistingPage(mainBody, juniorBody)
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Videos()
                if (media.matches) { Plugs(mainBody) }

                break;
              case 'podcast':
                tabSelect(["home", "videos", 'music', "streams", "contact"]);
                homelink.classList.remove("home-special")
                titleChange("Podcast | NMMC")
                removeExistingPage(mainBody, juniorBody) 
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Podcast()
                Plugs(mainBody)
                break;
              case 'music':
                tabSelect(["home", "videos", "podcast", "streams", "contact"]);
                titleChange("Music | NMMC")
                removeExistingPage(mainBody, juniorBody)
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Music()
                break;
              case 'streams':
                tabSelect(["home", "videos", "podcast", "contact", "music"]);
                homelink.classList.remove("home-special")
                titleChange("Streams | NMMC")
                removeExistingPage(mainBody, juniorBody)
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Streams()
                if (media.matches) { Plugs(mainBody) }
                break;
              case 'contact':
                tabSelect(["home", "videos", "podcast", "streams", "music"]);
                homelink.classList.remove("home-special")
                titleChange("Contact | NMMC")
                removeExistingPage(mainBody, juniorBody)
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Plugs(juniorBody, true)
                Contact()
                
                break;
            }
        });
    }
})();

Footer()

/*
GBox()

const lightbox = GLightbox({
    href: Data.vids[0].iframeRef,
    type: "video",
    source: "youtube", //vimeo, youtube or local
    width: 900,
    autoPlayVideos: "true",
});
*/
