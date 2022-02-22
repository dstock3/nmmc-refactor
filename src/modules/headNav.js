import { elementBuilder } from '../modules/functions.js'
import Logo from '../assets/images/logo.webp'

const HeadNav = () => {
  const mainContainer = document.querySelector(".main-container");
  const header = elementBuilder("header", "head-nav", mainContainer);
  const homelink = elementBuilder("a", "home-link", header);
  homelink.style.cursor = "pointer";
  const logo = elementBuilder("img", "logo", homelink);
  logo.src = Logo;
  logo.alt = `NMMC logo`;

  const linkNav = elementBuilder("nav", "link-nav", header);
  const linkList = elementBuilder("ul", "nav-list", linkNav);

  return { homelink, linkList }
};

export { HeadNav };
