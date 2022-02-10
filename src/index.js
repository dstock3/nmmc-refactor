import './style/reset.css'
import './style/style.css'
import Data from './data/data.json5';
import { elementBuilder, linkBuilder, tabSelect, removeExistingPage } from './modules/functions.js';
import { Home } from './modules/home.js'
import { Music } from './modules/music.js'
import { Podcast } from './modules/podcast.js'
import { Streams } from './modules/streams.js'
import { Videos } from './modules/videos.js'
import { Contact } from './modules/contact.js'
import { Plugs } from './modules/plug.js'
import Logo from './assets/images/logo.png'
import Favicon from './assets/images/icons/favicon.png'
import Play from './assets/images/icons/play.png'
import { Footer } from './modules/footer';

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

const tabBuilder = (() => {
    const tabs = ['videos', 'podcast', 'music', 'streams', 'contact']
    
    homelink.id = "home-tab"
    homelink.addEventListener("click", function goHome() {
      tabSelect(['music', "videos", "podcast", "streams", "contact"]);

      removeExistingPage(mainBody, juniorBody) 
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

                removeExistingPage(mainBody, juniorBody) 
                Plugs()
                Videos()
                
                break;
              case 'podcast':
                tabSelect(["home", "videos", 'music', "streams", "contact"]);
                homelink.classList.remove("home-special")

                removeExistingPage(mainBody, juniorBody) 
                Plugs()
                Podcast()
                break;
              case 'music':
                tabSelect(["home", "videos", "podcast", "streams", "contact"]);
                
                removeExistingPage(mainBody, juniorBody)
                Plugs() 
                Music()
                break;
              case 'streams':
                tabSelect(["home", "videos", "podcast", "contact", "music"]);
                homelink.classList.remove("home-special")
              
                removeExistingPage(mainBody, juniorBody)
                Plugs()
                Streams()
                break;
              case 'contact':
                tabSelect(["home", "videos", "podcast", "streams", "music"]);
                homelink.classList.remove("home-special")
              
                removeExistingPage(mainBody, juniorBody)
                Plugs()
                Contact()
                break;
            }
        });
    }
})();

Footer()
