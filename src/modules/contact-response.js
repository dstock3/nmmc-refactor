import { elementBuilder } from "./functions";
import Cube from "../assets/images/illustrations/cube.png"

const responseContainer = elementBuilder("div", "response-container", mainBody);
const responseHead = elementBuilder("h1", "response-head", responseContainer);
responseHead.setAttribute("id", "main-head");
responseHead.textContent = "Thank you! Your message has been sent to the CUBE.";

const cube = elementBuilder("img", "response-image", responseContainer);
cube.src = Cube;
cube.alt = "an extradimensional cube";

const responseDescription = elementBuilder(
  "article",
  "response-para",
  responseContainer
);
responseDescription.textContent =
  `<p>Unfortunately, I'm not always able to respond to every inquiry I receive. Nonetheless, I do appreciate any suggestions you might offer. ` +
  `And if a response is warranted, I will do my best to get back to you soon. For future reference, you can follow up with me at ` +
  `<a href="mailto: NightmareMasterclass@gmail.com">NightmareMasterclass@gmail.com</a>. Thanks again!</p>`;
