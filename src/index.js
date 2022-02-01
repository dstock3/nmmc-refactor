import './style/reset.css'
import './style/style.css'
import Data from './data/data.json5';
import { elementBuilder, linkBuilder, tabSelect, removeExistingPage, randomGenerator, randomImageGenerator } from './modules/functions.js';
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
import Skull from './assets/images/illustrations/skull.png'
import Alien from './assets/images/illustrations/ALIEN.png'
import Television from './assets/images/illustrations/TELEVISION.png'

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
        
        const home = document.getElementById("home-tab");
        home.classList.add("selected");

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

/* Footer */

const footer = document.createElement("footer");
mainContainer.appendChild(footer);

/* Random Quote Generator */

let quotes = [
  '"The tradition of all dead generations weighs like a nightmare on the brains of the living." ―Karl Marx',
  '"Capital is dead labour, which, vampire-like, lives only by sucking living labour, and lives the more, the more labour it sucks." ―Karl Marx',
  "“By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired.” ―Franz Kafka",
  '"Freedom is always and exclusively freedom for the one who thinks differently." ―Rosa Luxemburg',
  '"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom." ―Isaac Asimov',
  '"It is sometimes an appropriate response to reality to go insane." ―Philip K. Dick',
  '"Monsters in movies are us, always us, one way or the other." ―John Carpenter',
  "\"We're all like detectives in life. There's something at the end of the trail that we're all looking for.\" ―David Lynch",
  '"A concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window." ―Gilles Deleuze',
  '"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." —Malcolm X',
  '"We live in a world where there is more and more information, and less and less meaning." ―Jean Baudrillard',
  '"Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand." ―Ada Lovelace',
  '"The film is the first art form capable of demonstrating how matter plays tricks on man." ―Walter Benjamin',
  '"The role of the storyteller is to awaken the storyteller in others." ―Jack Zipes',
  '"Lowering our expectations, we are told, is a small price to pay for being protected from terror and totalitarianism." ―Mark Fisher',
  '"In the end we are always rewarded for our good will, our patience, fair-mindedness, and gentleness with what is strange." ―Friedrich Nietzsche',
  '"So when the ship goes down, so too do the first class passengers." ―Amadeo Bordiga',
  '"Words have no power to impress the mind without the exquisite horror of their reality." ―Edgar Allan Poe',
  '"I cannot be an optimist but I am a prisoner of hope." —Cornel West',
  '"I would rather be without a state than without a voice." —Edward Snowden',
  '"Life and death appeared to me ideal bounds, which I should first break through, and pour a torrent of light into our dark world." ―Mary Shelley',
  "“Spectacle is the sun that never sets over the empire of modern passivity.” ―Guy Debord",
  '"One day, in retrospect, the years of struggle will strike you as the most beautiful." —Sigmund Freud',
  '"Zombies cannot run. I say this definitively as the godfather of zombies. Zombies cannot run." —George Romero',
  '"HATE. LET ME TELL YOU HOW MUCH I\'VE COME TO HATE YOU SINCE I BEGAN TO LIVE." —AM',
  '"The important thing is not to stop questioning. Curiosity has its own reason for existing." —Albert Einstein',
  '"In and of itself, nothing really matters. What matters is that nothing is ever in and of itself." —Chuck Klosterman',
  '"If we take eternity to mean not infinite temporal duration but timelessness, then eternal life belongs to those who live in the present."  —Ludwig Wittgenstein',
  '"The truth will set you free. But not until it is finished with you." —David Foster Wallace',
  '"Like everything, what compels one to put pen to paper is a great question." —Todd Solondz',
  '"When we can\'t dream any longer we die." ―Emma Goldman',
  '"Nothing is more impotent than an unread library." —John Waters',
  '"All oppression creates a state of war." —Simone de Beauvoir',
  '"I am no longer accepting the things I cannot change. I am changing the things I cannot accept." —Angela Davis',
  '"We live in a culture where everything tastes good but nothing satisfies." —Daniel Pinchbeck',
  '"Under conditions of tyranny it is far easier to act than to think." —Hannah Arendt',
  '"It has always seemed to me that my existence consisted purely and exclusively of nothing but the most outrageous nonsense." —Thomas Ligotti',
  '"The medium is the message." —Marshall McLuhan',
  "\"To some extent I happily don't know what I'm doing. I feel that it's an artist's responsibility to trust that.\" —David Byrne",
  '"History always constitutes the relation between a present and its past. Consequently fear of the present leads to mystification of the past." —John Berger',
  `"Art respects the masses, by confronting them as that which they could be, rather than conforming to them in their degraded state."  —Theodor Adorno`,
  `"It is only for the sake of those without hope that hope is given to us." —Herbert Marcuse`,
  `"Talk is cheap. Show me the code." —Linus Torvalds`,
  `"A despot easily forgives his subjects for not loving him, provided they do not love one another." —Alexis de Tocqueville`,
  `"Well, once there was only dark. If you ask me, the light's winning." —Rustin Cohle`,
  `""I never told a joke in my life." —Andy Kaufman`,
];

const quoteContent = document.createElement("div");
quoteContent.classList.add("quote");
const quote = randomGenerator(quotes);
quoteContent.textContent = quote;
footer.appendChild(quoteContent);

const footContent = document.createElement("div");
footContent.classList.add("copyright");
const date = new Date();
const copyright = `Copyright © ${date.getFullYear()} by David Stockdale.`;
footContent.textContent = copyright;
footer.appendChild(footContent);

const images = {
  "an old television": Television,
  "a rad skull": Skull,
  "a grey alien": Alien,
};

const footImage = document.createElement("img");
footImage.classList.add("foot-image");
const image = randomImageGenerator(images);
footImage.src = image[1];
footImage.alt = image[0];

footer.appendChild(footImage);