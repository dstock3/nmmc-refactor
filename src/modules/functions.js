
function elementBuilder(elType, className, parent) {
    const newElement = document.createElement(elType);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    return newElement;
  }

  function titleChange(newTitle) {
    let titleElement = document.querySelector("title")
    titleElement.textContent = newTitle
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
      newVideoDescription.remove()
    } else {
      newVideoDescription.innerHTML = newVideoData.description;
    }
    
    let vidDiv = elementBuilder("div", "vid-div", newVideoContainer);
    vidDiv.innerHTML = `<iframe src="${newVideoData.iframeRef}" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    let videoElements = [
      newVideoContainer,
      newVideoHead,
      newVideoDescription,
      vidDiv,
      vidDiv.firstChild
    ];
    return videoElements;
  }
  
  function videoArrayHandler(videoArray, media) {
    let videoElementsArray = [];

    let listParent
    let vidListContainer
    if (media.matches) {
      listParent = document.querySelector(".main-body")
      vidListContainer = document.createElement("div");
      vidListContainer.classList.add("list-container")
      vidListContainer.id =  "mobile-list"
      listParent.insertBefore(vidListContainer, document.querySelector(".video-container"));
    } else {
      listParent = document.querySelector(".junior-body")
      listParent.classList.add("vid-page")
      vidListContainer = elementBuilder("div", "list-container", listParent)
    }

    let vidListHead = elementBuilder("h4", "list-head", vidListContainer)
    vidListHead.textContent = "Recent Vids"
    let vidList = elementBuilder("ul", "list", vidListContainer)
    let vidListArray = []

    for (let i = 0; i < videoArray.length; i++) {
      if (i === 0) {
        let videoElements = videoBuilder(videoArray[i]);
        let video = document.getElementsByTagName("iframe")[i];
        videoElements.push(video);
        video.classList.add("video");
        videoElementsArray.push(videoElements);
        let vidListItem = elementBuilder("li", "item", vidList)
        vidListItem.classList.add("item-selected");
        vidListItem.textContent = videoArray[i].title
        let vidObj = videoArray[i]
        vidListArray.push({vidListItem, vidObj})
      } else {
        let vidListItem = elementBuilder("li", "item", vidList)
        vidListItem.textContent = videoArray[i].title
        let vidObj = videoArray[i]
        vidListArray.push({vidListItem, vidObj})
      }
    }
    return { videoElementsArray, vidListArray }
  }
  
  // for pods
  
  function podBuilder(newPodData, parent) {
    let newPodContainer = elementBuilder("div", "pod-container", parent);
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
    let podElements = [
      newPodContainer,
      newPodHead,
      newPodDescription,
      newPodcast,
    ];
    return podElements;
  }
  
  function podListBuilder(myPodArray, parent, media) {
    let podElementsArray = [];
    let juniorBody = document.querySelector(".junior-body")

    let listParent
    let podListContainer
    if (media.matches) {
      listParent = parent
      podListContainer = document.createElement("div");
      podListContainer.classList.add("list-container")
      podListContainer.id =  "mobile-list"
      listParent.insertBefore(podListContainer, document.querySelector(".pod-container"));
    } else {
      podListContainer = elementBuilder("div", "list-container", juniorBody)
    }

    let podListHead = elementBuilder("h4", "list-head", podListContainer)
    podListHead.textContent = "Recent Episodes"
    let podList = elementBuilder("ul", "list", podListContainer)
    let podItems = []

    for (let i = 0; i < myPodArray.length; i++) {
      if (i === 0) {
        let podElements = podBuilder(myPodArray[i], parent);
        podElementsArray.push(podElements);
        let podItem = elementBuilder("li", "item", podList)
        podItem.classList.add("item-selected")
        podItem.textContent = myPodArray[i].title
        let podObj = myPodArray[i]
        podItems.push({podItem, podObj})

      } else {
        let podItem = elementBuilder("li", "item", podList)
        podItem.textContent = myPodArray[i].title
        let podObj = myPodArray[i]
        podItems.push({podItem, podObj})

      }

    }
    return {podElementsArray, podItems};
  }
  
  // for music
  
  function musicBuilder(newMusicArray, parent, media, home=false) {
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
      let juniorBody = document.querySelector(".junior-body")

      let musicListContainer
      let listParent
      if (media.matches) {
        listParent = document.querySelector(".main-body")
        musicListContainer = document.createElement("div");
        musicListContainer.classList.add("list-container")
        musicListContainer.id =  "mobile-list"
        document.querySelector(".music-page").insertBefore(musicListContainer, document.querySelector(".music-container"));
      } else {
        listParent = document.querySelector(".junior-body")
        musicListContainer = elementBuilder("div", "list-container", listParent)
      }

      let musicHead = elementBuilder("h4", "list-head", musicListContainer)
      musicHead.textContent = "Recent Tracks"
      let trackList = elementBuilder("ul", "list", musicListContainer)
      let trackListArray = []

      for (let i = 0; i < newMusicArray.length; i++) {
        if (i === 0) {
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
          let trackListItem = elementBuilder("li", "item", trackList)
          trackListItem.classList.add("item-selected")
          trackListItem.textContent = newMusicArray[i].track
          let trackObj = newMusicArray[i]
          trackListArray.push({trackListItem, trackObj})
        } else {
          let trackListItem = elementBuilder("li", "item", trackList)
          trackListItem.textContent = newMusicArray[i].track
          let trackObj = newMusicArray[i]
          trackListArray.push({trackListItem, trackObj})
        }
      }
      return { musicElementArray, trackListArray};
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
  
  function bandcampBuilder(newBandcampData, parent) {
    let bandcampDiv = elementBuilder("div", "kofi-div", parent);
    bandcampDiv.id = "bandcamp-plug"
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
  
  function koFiBuilder(koFiData, parent) {
    let patreonPlug = document.querySelector(".patreon")
    let koFiDiv = elementBuilder("div", "kofi-div", parent);
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
export {  elementBuilder, titleChange, linkBuilder, videoBuilder, videoArrayHandler, randomGenerator, podBuilder, podListBuilder, musicBuilder, randomImageGenerator, iframeHelper, albumBuilder, bandcampBuilder, patreonPlugBuilder, koFiBuilder, tabSelect, removeExistingPage }  