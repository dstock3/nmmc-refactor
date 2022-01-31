import { elementBuilder, videoBuilder, podBuilder } from './functions.js'
import Data from '../data/data.json5'

const Home = () => {
  let sideNavContainer = document.querySelector(".side-nav-container")
  sideNavContainer.setAttribute("id", "side-nav-unfixed");
  
  /* Video Section */
  
  let video = videoArray[0];
  videoBuilder(video);
  const videoContainer = document.getElementsByClassName("video-container")[0];
  const iframe = document.getElementsByTagName("iframe")[0];
  iframe.classList.add("video");
  
  const mainHead = document.getElementsByTagName("h2")[0];
  mainHead.setAttribute("id", "main-head");
  
  const vidButtonDiv = elementBuilder("div", "more-vids", videoContainer);
  const moreVideos = elementBuilder("button", "vid-button", vidButtonDiv);
  const vidAnchor = elementBuilder("a", "vid-link", moreVideos);
  vidAnchor.textContent = "More Vids >";
  vidAnchor.href = "videos.html";
  
  /* Podcast Section */
  
  podData = podArray[0];
  podBuilder(podData);
  
  const podContainer = document.getElementsByClassName("pod-container")[0];
  const podButtonDiv = elementBuilder("div", "more-pods", podContainer);
  const morePods = elementBuilder("button", "pod-button", podButtonDiv);
  const podAnchor = elementBuilder("a", "vid-link", morePods);
  podAnchor.textContent = "More Pods >";
  podAnchor.href = "podcast.html";
  
  /* Music Section */
  
  const musicPage = elementBuilder("div", "music-container", juniorBody);
  const musicHead = elementBuilder("h2", "music-head", musicPage);
  musicHead.textContent = `Freshest Tracks`;
  const newMmusic = musicArray[0];
  const newArray = [newMmusic];
  
  musicBuilder(newArray);
  
  const moreMusic = elementBuilder("button", "music-button", musicPage);
  const musicAnchor = elementBuilder("a", "music-link", moreMusic);
  musicAnchor.textContent = "More Music >";
  musicAnchor.href = "music.html";
  
  spaceCreator(juniorBody);
  
  /* Blog Section */
  
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
  
  spaceCreator(juniorBody);
  
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
  announcementsLink = elementBuilder("a", "a-link", announcements);
  announcementsLink.href = Data.announcements.link;
  announcementsLink.setAttribute("target", "_blank");
  announcementsLink.setAttribute("rel", "noreferrer noopener");
  announcementsLink.textContent = Data.announcements.desc
  
  const buttons = document.getElementsByTagName("button");
  for (i = 1; i < buttons.length; i++) {
    buttons[i].classList.add("home-buttons");
  }
}

export { Home }

