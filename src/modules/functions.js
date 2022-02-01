
function elementBuilder(elType, className, parent) {
    const newElement = document.createElement(elType);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    return newElement;
  }
  
  function linkBuilder(linkArray, ulVar, className, openNewTab) {
    let linkElementArray = [];
    for (let i = 0; i < linkArray.length; i++) {
      let linkElements = [];
      let linkLi = elementBuilder("li", className, ulVar);
      linkElements.push(linkLi);
      let linkAnchor = elementBuilder("a", "nav-anchor", linkLi);
      linkAnchor.textContent = linkArray[i].name;
      linkAnchor.href = linkArray[i].link;
      linkElements.push(linkAnchor);
      linkLi.setAttribute("id", `${linkArray[i].name.toLowerCase()}`);
  
      if (openNewTab === true) {
        linkAnchor.rel = "noreferrer noopener";
        linkAnchor.target = "blank";
      }
  
      linkElementArray.push(linkElements);
    }
  
    return linkElementArray;
  }
  
  function spaceCreator(parent) {
    let spaceDiv = elementBuilder("div", "spacer", parent);
    return spaceDiv;
  }
  
  function randomGenerator(thingArray) {
    let thingNum = thingArray.length - 1;
    let num = Math.round(Math.random() * thingNum);
    return thingArray[num];
  }
  
  // for videos and streams
  function videoBuilder(newVideoData) {
    let mainBody = document.querySelector(".main-body")
    let newVideoContainer = elementBuilder("div", "video-container", mainBody);
    let newVideoHead = elementBuilder("h2", "video-head", newVideoContainer);
    newVideoHead.textContent = newVideoData.title;
    let newVideoDescription = elementBuilder(
      "article",
      "video-para",
      newVideoContainer
    );
    if (newVideoData.description === undefined) {
      newVideoData.description = "";
    }
    newVideoDescription.innerHTML = newVideoData.description;
    let vidDiv = elementBuilder("div", "vid-div", newVideoContainer);
    vidDiv.innerHTML = `<iframe src="${newVideoData.iframeRef}" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    let spacer = spaceCreator(mainBody);
    let videoElements = [
      newVideoContainer,
      newVideoHead,
      newVideoDescription,
      vidDiv,
      spacer,
    ];
    return videoElements;
  }
  
  function videoArrayHandler(videoArray) {
    let videoElementsArray = [];
    for (let i = 0; i < videoArray.length; i++) {
      let videoElements = videoBuilder(videoArray[i]);
      let video = document.getElementsByTagName("iframe")[i];
      videoElements.push(video);
      video.classList.add("video");
      videoElementsArray.push(videoElements);
    }
    return videoElementsArray;
  }
  
  // for pods
  
  function podBuilder(newPodData) {
    let mainBody = document.querySelector(".main-body")
    let newPodContainer = elementBuilder("div", "pod-container", mainBody);
    let newPodHead = elementBuilder("h2", "pod-head", newPodContainer);
    newPodHead.textContent = newPodData.title;
    let newPodDescription = elementBuilder("p", "pod-para", newPodContainer);
    newPodDescription.textContent = newPodData.description;
    let newPodcast = iframeHelper(
      newPodContainer,
      "podcast",
      newPodData.iframeRef
    );
    newPodcast.title = newPodData.title;
    newPodcast.loading = "lazy";
    let spacer = spaceCreator(mainBody);
    let podElements = [
      newPodContainer,
      newPodHead,
      newPodDescription,
      newPodcast,
      spacer,
    ];
    return podElements;
  }
  
  function podListBuilder(myPodArray) {
    let podElementsArray = [];
    for (let i = 0; i < myPodArray.length; i++) {
      let podElements = podBuilder(myPodArray[i]);
      podElementsArray.push(podElements);
    }
    return podElementsArray;
  }
  
  // for music
  
  function musicBuilder(newMusicArray, parent, home=false) {
    let musicElementArray = [];
    if (home) {
      for (let i = 0; i < newMusicArray.length; i++) {
        let musicElements = [];
        let newMusicContainer = elementBuilder("div", "track-container", parent);
        musicElements.push(newMusicContainer);
        let newMusic = iframeHelper(
          newMusicContainer,
          `new-music`,
          newMusicArray[i].iframeRef
        );
        newMusic.setAttribute("id", `${newMusicArray[i].id}`);
        newMusic.loading = "lazy";
        newMusic.title = newMusicArray[i].track;
        musicElements.push(newMusic);
        musicElementArray.push(musicElements);
      }
      return musicElementArray;
    } else {
      for (let i = 0; i < newMusicArray.length; i++) {
        let musicElements = [];
        let musicPage = elementBuilder("div", "music-container", parent);
        let newMusicContainer = elementBuilder("div", "track-container", musicPage);
        musicElements.push(newMusicContainer);
        let newMusic = iframeHelper(
          newMusicContainer,
          `new-music`,
          newMusicArray[i].iframeRef
        );
        newMusic.setAttribute("id", `${newMusicArray[i].id}`);
        newMusic.loading = "lazy";
        newMusic.title = newMusicArray[i].track;
        musicElements.push(newMusic);
        musicElementArray.push(musicElements);
      }
      return musicElementArray;
    }

  }
  
  function randomImageGenerator(imagesObject) {
    let imageKeys = Object.keys(imagesObject);
    let imageProps = Object.values(imagesObject);
    let imageNum = imageKeys.length - 1;
    let num = Math.round(Math.random() * imageNum);
    let newImageArray = [imageKeys[num], imageProps[num]];
    return newImageArray;
  }
  
  function iframeHelper(container, className, link) {
    let item = elementBuilder("iframe", className, container);
    item.src = link;
    item.seamless = true;
    return item; /*add more properties */
  }
  
  function albumBuilder(newAlbumArray) {
    let albumElementArray = [];
    let albumSection = document.querySelector(".album-section")
    for (let i = 0; i < newAlbumArray.length; i++) {
      let newAlbumContainer = elementBuilder(
        "div",
        "album-container",
        albumSection
      );
      newAlbumContainer.innerHTML = newAlbumArray[i].iframeRef;
      newAlbumContainer.setAttribute("id", `${newAlbumArray[i].title}`);
      albumElementArray.push(newAlbumContainer);
    }
    return albumElementArray;
  }
  
  function bandcampBuilder(newBandcampData) {
    let patreonPlug = document.querySelector(".patreon")
    let bandcampDiv = elementBuilder("div", "kofi-div", patreonPlug);
    let bandcampHead = elementBuilder("h2", "kofi-head", bandcampDiv);
    bandcampHead.textContent = newBandcampData.lede;
    let bandcampPlugDiv = elementBuilder("div", "kofi-plug-div", bandcampDiv);
    let bandcampPara = elementBuilder("span", "kofi-para", bandcampPlugDiv);
    bandcampPara.textContent = newBandcampData.copy;
  
    let bandcampButton = elementBuilder("button", "kofi-button", bandcampPlugDiv);
    let bandcampButtonLink = elementBuilder(
      "a",
      "kofi-button-link",
      bandcampButton
    );
    bandcampButtonLink.href = newBandcampData.buttonLink;
    bandcampButtonLink.setAttribute("target", "_blank");
    bandcampButtonLink.setAttribute("rel", "noreferrer noopener");
    bandcampButtonLink.textContent = newBandcampData.buttonCopy;
  
    let bandcampArray = [
      bandcampDiv,
      bandcampHead,
      bandcampPlugDiv,
      bandcampPara,
      bandcampButton,
    ];
    return bandcampArray;
  }
  
  function patreonPlugBuilder(tierArray) {
    let patreonPlugArray = [];
    let patreonPlug = document.querySelector(".patreon")
  
    for (let i = 0; i < tierArray.length; i++) {
      let patreonPlugElements = [];
  
      let patreonTier = elementBuilder("div", "patreon-tier", patreonPlug);
      patreonTier.setAttribute("id", tierArray[i].id);
      patreonPlugElements.push(patreonTier);
  
      let tierHead = elementBuilder("h3", "tier-head", patreonTier);
      tierHead.textContent = tierArray[i].title;
      patreonPlugElements.push(tierHead);
  
      let tierCost = elementBuilder("p", "tier-cost", patreonTier);
      tierCost.textContent = tierArray[i].cost;
      patreonPlugElements.push(tierCost);
  
      let tierDesc = elementBuilder("p", "tier-description", patreonTier);
      tierDesc.textContent = tierArray[i].description;
      patreonPlugElements.push(tierDesc);
  
      let signUp = elementBuilder("button", "sign-up", patreonTier);
      patreonPlugElements.push(signUp);
  
      let signUpLink = elementBuilder("a", "sign-up-link", signUp);
      signUpLink.href = tierArray[i].signUpLink;
      signUpLink.textContent = tierArray[i].signUp;
      signUpLink.setAttribute("target", "_blank");
      signUpLink.setAttribute("rel", "noreferrer noopener");
      patreonPlugElements.push(signUpLink);
      patreonPlugArray.push(patreonPlugElements);
    }
  
    return patreonPlugArray;
  }
  
  function koFiBuilder(koFiData) {
    let patreonPlug = document.querySelector(".patreon")
    let koFiDiv = elementBuilder("div", "kofi-div", patreonPlug);
    let koFiHead = elementBuilder("h2", "kofi-head", koFiDiv);
    koFiHead.textContent = koFiData.lede;
    let koFiPlugDiv = elementBuilder("div", "kofi-plug-div", koFiDiv);
    let koFiPara = elementBuilder("span", "kofi-para", koFiPlugDiv);
    koFiPara.textContent = koFiData.copy;
  
    let koFiButton = elementBuilder("button", "kofi-button", koFiPlugDiv);
    let koFiButtonLink = elementBuilder("a", "kofi-button-link", koFiButton);
    koFiButtonLink.href = koFiData.buttonLink;
    koFiButtonLink.setAttribute("target", "_blank");
    koFiButtonLink.setAttribute("rel", "noreferrer noopener");
    koFiButtonLink.textContent = koFiData.buttonCopy;
  
    let koFiArray = [koFiDiv, koFiHead, koFiPlugDiv, koFiPara, koFiButton];
  
    return koFiArray;
  }

  function tabSelect(tabArray) {
    for (let i = 0; i < tabArray.length; i++) {
      let tab = tabArray[i]
      let tabElement = document.getElementById(tab + "-tab");
      tabElement.classList.remove("selected");
    }
  }

  function removeExistingPage(parent, parentTwo) {
    let contentChildren1 = Array.from(parent.childNodes);
    let contentChildren2 = Array.from(parentTwo.childNodes);
    let allContent = contentChildren1.concat(contentChildren2);
    for (let i = 0; i < allContent.length; i++) {
      allContent[i].remove()
    }

  }
export {  elementBuilder, spaceCreator, linkBuilder, videoBuilder, videoArrayHandler, randomGenerator, podBuilder, podListBuilder, musicBuilder, randomImageGenerator, iframeHelper, albumBuilder, bandcampBuilder, patreonPlugBuilder, koFiBuilder, tabSelect, removeExistingPage }  