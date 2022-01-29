import { elementBuilder, videoArrayHandler } from "./functions";

const streamsTab = document.getElementById("streams");
streamsTab.setAttribute(
  "style",
  "background-color: #027bb348; border-radius: 5px;"
);

sideNavContainer.setAttribute("id", "side-nav-special");

const streamsPageHead = elementBuilder("h1", "streams-page-head", mainBody);
streamsPageHead.textContent = "NMMC Live";

videoArrayHandler(streamArray);
