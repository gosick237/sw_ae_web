const tabsContainer = document.getElementsByClassName("jsMainTab");
const tabContent = document.getElementsByClassName("jsTabContent");
const tabs = document.getElementsByClassName("jsTabLinks");
const storySelectionPage = document.getElementsByClassName("jsStorySelectPage");
const storyPage = document.getElementsByClassName("jsStoriesPage");
const stories = document.getElementsByClassName("jsStories");

const storyWindow = document.getElementsByClassName("storySection");
const editorWindow = document.getElementsByClassName("editorSection");

function openStory(e, storyName) {
  console.log(storyName);

  let data = null;
  storyName === "jelly"
    ? (data = jellyData)
    : storyName === "dragon"
    ? (data = dragonData)
    : (data = chickenData);
  //open story data(JSON)
  const storyJson = JSON.parse(data)[0];
  const title = storyJson.name;
  const content = storyJson.text;
  const code = storyJson.code;
  //turn select page off
  storySelectionPage[0].style.display = "none";
  //turn story page on
  storyPage[0].style.display = "flex";
  storyPage[0].style.flexDirection = "column";
  //get story/editor section DOM's chile nodes
  st = storyWindow[0].children;
  //put title (put context later) when have concrete part more than one; h1,p,div etc
  for (i = 0; i < st.length; i++) {
    console.log(st[i].tagName);
    if (st[i].tagName === "H3") {
      st[i].innerText = title;
    } else if (st[i].tagName === "P") {
      st[i].innerHTML = content;
    }
  }
  editorWindow[0].innerHTML = code;
  /*
  //put story
  for (i = 0; i < stories.length; i++) {
    console.log(stories[i].style.display);
  }
  */
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
