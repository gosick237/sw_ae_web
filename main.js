const tabContent = document.getElementsByClassName("jsTabContent");
const tabLinks = document.getElementsByClassName("jsTabLinks");

function openTab(e, tabName) {
  let i;
  console.log(tabName);

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  e.target.className += "active";
}

document.getElementById("defaultOpen").click();
