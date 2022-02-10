import {randomGenerator, randomImageGenerator} from '../modules/functions.js'
import { quotes } from '../data/quotes.js'
import Skull from '../assets/images/illustrations/skull.png'
import Alien from '../assets/images/illustrations/ALIEN.png'
import Television from '../assets/images/illustrations/TELEVISION.png'

const Footer = () => {
    const mainContainer = document.querySelector(".main-container")
    const footer = document.createElement("footer");
    mainContainer.appendChild(footer);

    /* Random Quote Generator */

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

}

export { Footer }