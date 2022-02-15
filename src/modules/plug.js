import { elementBuilder, patreonPlugBuilder, koFiBuilder } from "./functions";
import Data from '../data/data.json5'

/* Patreon Plug */

const Plugs = (parent) => {
    let myTiers = []
    for (let prop in Data.plugs) {
        myTiers.push(Data.plugs[prop])
    }

    let patreonPlug = elementBuilder("div", "patreon", parent);
    let patreonHead = elementBuilder("h2", "patreon-head", patreonPlug);
    
    let tabDiv = elementBuilder("div", "tab-div", patreonPlug);
    
    let babyTab = elementBuilder("div", "tab", tabDiv);
    babyTab.classList.add("plug-selected");
    let babySelect = elementBuilder("span", "tab-select", babyTab);
    babySelect.textContent = Data.plugs.tierOne.cost;
    
    let associateTab = elementBuilder("div", "tab", tabDiv);
    
    let associateSelect = elementBuilder("span", "tab-select", associateTab);
    associateSelect.textContent = Data.plugs.tierTwo.cost;
    
    let colleageTab = elementBuilder("div", "tab", tabDiv);
    let colleageSelect = elementBuilder("span", "tab-select", colleageTab);
    colleageSelect.textContent = Data.plugs.tierThree.cost;
    
    let masterTab = elementBuilder("div", "tab", tabDiv);
    let masterSelect = elementBuilder("span", "tab-select", masterTab);
    masterSelect.textContent = Data.plugs.tierFour.cost;
    
    function selectTab(selectedTab, otherTab, anotherTab, yetAnotherTab) {
      selectedTab.classList.add("plug-selected");
      otherTab.classList.remove("plug-selected");
      anotherTab.classList.remove("plug-selected");
      yetAnotherTab.classList.remove("plug-selected");
    }
    
    const patreonPlugArray = patreonPlugBuilder(myTiers);
    
    const patreonTiers = document.getElementsByClassName("patreon-tier");
    
    const babies = patreonTiers[0];
    
    const associates = patreonTiers[1];
    associates.classList.add("hidden");
    
    const colleagues = patreonTiers[2];
    colleagues.classList.add("hidden");
    
    const masters = patreonTiers[3];
    masters.classList.add("hidden");
    
    babies.setAttribute("id", "babies-active");
    associates.setAttribute("id", "associates-inactive");
    colleagues.setAttribute("id", "colleagues-inactive");
    masters.setAttribute("id", "masters-inactive");
    
    babyTab.addEventListener("click", () => {
      selectTab(babyTab, associateTab, colleageTab, masterTab);
      babies.classList.remove("hidden");
      associates.classList.add("hidden");
      colleagues.classList.add("hidden");
      masters.classList.add("hidden");
    
      babies.setAttribute("id", "babies-active");
      associates.setAttribute("id", "associates-inactive");
      colleagues.setAttribute("id", "colleagues-inactive");
      masters.setAttribute("id", "masters-inactive");
    });
    
    associateTab.addEventListener("click", () => {
      selectTab(associateTab, babyTab, colleageTab, masterTab);
      associates.classList.remove("hidden");
      babies.classList.add("hidden");
      colleagues.classList.add("hidden");
      masters.classList.add("hidden");
    
      associates.setAttribute("id", "associates-active");
      babies.setAttribute("id", "babies-inactive");
      colleagues.setAttribute("id", "colleagues-inactive");
      masters.setAttribute("id", "masters-inactive");
    });
    
    colleageTab.addEventListener("click", () => {
      selectTab(colleageTab, associateTab, babyTab, masterTab);
      colleagues.classList.remove("hidden");
      babies.classList.add("hidden");
      masters.classList.add("hidden");
      associates.classList.add("hidden");
    
      colleagues.setAttribute("id", "colleagues-active");
      babies.setAttribute("id", "babies-inactive");
      associates.setAttribute("id", "associates-inactive");
      masters.setAttribute("id", "masters-inactive");
    });
    
    masterTab.addEventListener("click", () => {
      selectTab(masterTab, associateTab, colleageTab, babyTab);
      masters.classList.remove("hidden");
      associates.classList.add("hidden");
      colleagues.classList.add("hidden");
      babies.classList.add("hidden");
    
      masters.setAttribute("id", "masters-active");
      babies.setAttribute("id", "babies-inactive");
      associates.setAttribute("id", "associates-inactive");
      colleagues.setAttribute("id", "colleagues-inactive");
    });
    
    patreonHead.textContent = "Support Me on Patreon";
    
    /* Ko-Fi Plug */
    
    const koFi = {
      lede: "Buy Me a Coffee!",
      copy: `If you find value in my content and want to throw me a few bucks, buy me a coffee at Ko-Fi!`,
      buttonCopy: "Support Me",
      buttonLink: `https://ko-fi.com/A0A260RL`,
    };
    
    let koFiArray = koFiBuilder(koFi);

}
export { Plugs }