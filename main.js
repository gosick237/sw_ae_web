const tabsContainer = document.getElementsByClassName("jsMainTab");
const tabContent = document.getElementsByClassName("jsTabContent");
const tabs = document.getElementsByClassName("jsTabLinks");
const storySelectionPage = document.getElementsByClassName("jsStorySelectPage");
const storyPage = document.getElementsByClassName("jsStoriesPage");
const stories = document.getElementsByClassName("jsStories");

function openStory(e, storyName) {
  console.log(storyName);
  //turn select page off
  storySelectionPage[0].style.display = "none";
  storyPage[0].style.display = "block";

  //turn stories off
  for (i = 0; i < stories.length; i++) {
    stories[i].style.display = "none";
  }
  /*
  //set all stories non active
  for (i = 0; i < stories.length; i++) {
    stories[i].className = stories[i].className.replace(" active", "");
  }
  */
  //turn on target story on
  document.getElementById(storyName).style.display = "block";
  //for (i = 0; i < stories.length; i++) {
  //  console.log(stories[i].style.display);
  //}
}

function openTab(e, tabName) {
  console.log(tabName);
  storySelectionPage[0].style.display = "block";
  storyPage[0].style.display = "none";

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  e.target.className += " active";

  //for (i = 0; i < tabs.length; i++) {
  //  console.log(tabs[i].className);
  //}
}

document.getElementById("defaultOpen").click();
