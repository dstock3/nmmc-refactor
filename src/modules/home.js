import { elementBuilder, videoBuilder, podBuilder, musicBuilder, spaceCreator, tabSelect, removeExistingPage } from './functions.js'
import { Videos } from './videos.js'
import { Podcast } from './podcast.js'
import { Music } from './music.js'
import { Plugs } from './plug.js'
import Data from '../data/data.json5'

const Home = () => {
  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");

  let mainBody = document.querySelector(".main-body")
  let juniorBody = document.querySelector(".junior-body")
  
  /* Video Section */
  
  let videoArray = []
  for (let prop in Data.vids) {
    videoArray.push(Data.vids[prop])
  }
  let video = videoArray[0];
  videoBuilder(video);
  const videoContainer = document.getElementsByClassName("video-container")[0];
  const iframe = document.getElementsByTagName("iframe")[0];
  iframe.classList.add("video");
  
  const mainHead = document.getElementsByTagName("h2")[0];
  mainHead.setAttribute("id", "main-head");
  
  const vidButtonDiv = elementBuilder("div", "more-vids", videoContainer);
  const moreVideos = elementBuilder("button", "vid-button", vidButtonDiv);
  const vidAnchor = elementBuilder("div", "vid-link", moreVideos);
  vidAnchor.textContent = "More Vids >";

  vidAnchor.addEventListener("click", function goVid() {
    tabSelect(["music", "podcast", "streams", "contact"]);

    removeExistingPage(mainBody, juniorBody) 
    Plugs()
    Videos()

  })
  
  /* Podcast Section */
  
  let podArray = []
  for (let prop in Data.pods) {
    podArray.push(Data.pods[prop])
  }
  
  const podData = podArray[0];
  podBuilder(podData);
  
  const podContainer = document.getElementsByClassName("pod-container")[0];
  const podButtonDiv = elementBuilder("div", "more-pods", podContainer);
  const morePods = elementBuilder("button", "pod-button", podButtonDiv);
  const podAnchor = elementBuilder("div", "vid-link", morePods);
  podAnchor.textContent = "More Pods >";

  podAnchor.addEventListener("click", function goVid() {
    tabSelect(["home", "videos", 'music', "streams", "contact"]);

    removeExistingPage(mainBody, juniorBody) 
    Plugs()
    Podcast()
  })

  
  /* Music Section */
  
  let musicArray = []
  for (let prop in Data.music) {
    musicArray.push(Data.music[prop])
  }
  
  const musicPage = elementBuilder("div", "music-container", juniorBody);
  const musicHead = elementBuilder("h2", "music-head", musicPage);
  musicHead.textContent = `Freshest Tracks`;
  const newMmusic = musicArray[0];
  const newArray = [newMmusic];
  
  musicBuilder(newArray);
  
  const moreMusic = elementBuilder("button", "music-button", musicPage);
  const musicAnchor = elementBuilder("div", "music-link", moreMusic);
  musicAnchor.textContent = "More Music >";

  musicAnchor.addEventListener("click", function goVid() {
    tabSelect(["home", "videos", "podcast", "streams", "contact"]);
                
    removeExistingPage(mainBody, juniorBody)
    Plugs() 
    Music()
  })
  
  spaceCreator(juniorBody);
  
  
  /* Blog Section */
  /*
  
  const newBlog = blogArray[0];
  
  const blogContainer = elementBuilder("div", "blog-container", juniorBody);
  const blog = elementBuilder("article", "blog", blogContainer);
  const blogHead = elementBuilder("h2", "blog-head", blog);
  blogHead.textContent = newBlog.head;
  
  const blogTitle = elementBuilder("h3", "blog-title", blog);
  blogTitle.textContent = newBlog.title;
  
  const blogDate = elementBuilder("p", "blog-date", blog);
  blogDate.textContent = newBlog.date;
  
  const blogBody = elementBuilder("article", "blog-body", blog);
  blogBody.innerHTML = newBlog.preview;
  
  const readMore = elementBuilder("button", "read-more-button", blog);
  const readLink = elementBuilder("a", "read-link", readMore);
  readLink.textContent = "Read More >";
  readLink.href = "blog.html";
  
  spaceCreator(juniorBody);*/
  
  /* Announcements */
  
  const announcementsContainer = elementBuilder("div", "a-container", juniorBody);
  const announcements = elementBuilder(
    "article",
    "announcements",
    announcementsContainer
  );
  const announcementsHead = elementBuilder("h2", "a-head", announcements);
  announcementsHead.textContent = Data.announcements.head;
  
  const announcementsBody = elementBuilder("p", "a-body", announcements);
  announcementsBody.textContent = Data.announcements.text;
  const announcementsLink = elementBuilder("a", "a-link", announcements);
  announcementsLink.href = Data.announcements.link;
  announcementsLink.setAttribute("target", "_blank");
  announcementsLink.setAttribute("rel", "noreferrer noopener");
  announcementsLink.textContent = Data.announcements.desc
  
  const buttons = document.getElementsByTagName("button");
  for (let i = 1; i < buttons.length; i++) {
    buttons[i].classList.add("home-buttons");
  }
}

export { Home }

