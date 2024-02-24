import './style/reset.css'
import './style/style.css'
import { elementBuilder, updateMetaKeywords, titleChange, tabSelect, removeExistingPage } from './modules/functions.js';
import { Home } from './modules/home.js'
import { Music } from './modules/music.js'
import { Streams } from './modules/streams.js'
import { Videos } from './modules/videos.js'
import { Contact } from './modules/contact.js'
import { Plugs } from './modules/plug.js'
import { Sidebar } from './modules/sidebar.js'

import Favicon from './assets/images/icons/favicon.png'

import { Footer } from './modules/footer';
import { HeadNav } from './modules/headNav';

let media = window.matchMedia("(max-width: 900px)")

const head = document.querySelector("head");
const body = document.querySelector("body");
const mainContainer = elementBuilder("div", "main-container", body);

const favIcon = elementBuilder("link", "favicon", head);
favIcon.rel = "shortcut icon";
favIcon.type = "image/png";
favIcon.href = Favicon

const headNav = HeadNav()
const homelink = headNav.homelink
const linkList = headNav.linkList

updateMetaKeywords("nightmare masterclass,horror youtuber,horror commentary, horror analysis,arg,arg explained,game theory arg,arg secret,arg solved,top arg,best arg,fnaf arg,muse arg,scary arg,funny arg,arg scary,arg gaming,analog arg,arg horror,matpat arg,inside arg,reddit arg,arg iceberg,arg coverage,arg tutorial, horror,horror stories,horror movie,horror story,horror short film,best horror,horror movies,horror channel,new horror movie,best horror movies,alter horror channel,free horror,full horror,horror 2023,horror real,horror short,horror video,horror facts,horror videos,modern horror,horror podcast");

const sectionContainer = elementBuilder(
  "section",
  "section-container",
  mainContainer
);

const mainBody = elementBuilder("main", "main-body", sectionContainer);
const juniorBody = elementBuilder("div", "junior-body", sectionContainer);

Sidebar()

const TabBuilder = (() => {
    const tabs = ['videos', 'music', 'streams', 'contact']

    homelink.id = "home-tab"
    titleChange("Home | NMMC")
    homelink.addEventListener("click", function goHome() {
      tabSelect(['music', "videos", "streams", "contact"]);
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
                tabSelect(["home", "music", "streams", "contact"]);
                homelink.classList.remove("home-special")
                titleChange("Videos | NMMC")
                removeExistingPage(mainBody, juniorBody)
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Videos()
                if (media.matches) { Plugs(mainBody) }
                break;
              case 'music':
                tabSelect(["home", "videos", "streams", "contact"]);
                titleChange("Music | NMMC")
                removeExistingPage(mainBody, juniorBody)
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Music()
                break;
              case 'streams':
                tabSelect(["home", "videos", "contact", "music"]);
                homelink.classList.remove("home-special")
                titleChange("Streams | NMMC")
                removeExistingPage(mainBody, juniorBody)
                mainBody.removeAttribute('id')
                juniorBody.removeAttribute('id')
                Streams()
                if (media.matches) { Plugs(mainBody) }
                break;
              case 'contact':
                tabSelect(["home", "videos", "streams", "music"]);
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
