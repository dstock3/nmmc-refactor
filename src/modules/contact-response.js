import { elementBuilder } from "./functions";
import "../style/contact-response.css";
import Cube from "../assets/images/illustrations/cube.webp";

const ContactResponse = () => {
  let media = window.matchMedia("(max-width: 900px)")
  const mainBody = document.querySelector(".main-body");
  const responseContainer = elementBuilder(
    "div",
    "response-container",
    mainBody
  );
  if (media.matches) {
    let resLine = elementBuilder("div", "res-line", responseContainer);
  }
  
  const responseHead = elementBuilder("h1", "response-head", responseContainer);
  responseHead.setAttribute("id", "main-head");
  responseHead.textContent =
    "Thank you! Your message has been sent to the CUBE.";

  const cube = elementBuilder("img", "response-image", responseContainer);
  cube.src = Cube;
  cube.alt = "an extradimensional cube";

  const responseDescription = elementBuilder("article", "response-para", responseContainer);

  responseDescription.innerHTML =
    `<p>Unfortunately, I'm not always able to respond to every inquiry I receive. Nonetheless, I do appreciate any suggestions you might offer. ` +
    `And if a response is warranted, I will do my best to get back to you soon. For future reference, you can follow up with me at ` +
    `<a href="mailto: NightmareMasterclass@gmail.com">NightmareMasterclass@gmail.com</a>. Thanks again!</p>`;

  if (media.matches) {
    let newResLine = elementBuilder("div", "res-line", responseContainer);
  }
};

export { ContactResponse };