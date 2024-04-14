// Blog Tabs Start
function openTab(evt, tabName) {
  var i, tabContent, tabButtons;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");

  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  evt.currentTarget.classList.add("active");

  // If 'allTabs' is clicked, show content of all tabs
  if (tabName === 'allTabs') {
    var allTabsContent = "";
    for (i = 1; i <= 3; i++) {
      var tabContent = document.getElementById('tab' + i).innerHTML;
      allTabsContent += tabContent;
    }
    document.getElementById('allTabs').innerHTML = allTabsContent;
  }
}
window.onload = function () {
  // Open the 'allTabs' tab by default
  document.getElementById("allTabs").classList.add("active");
  document.getElementsByClassName("tab-button")[0].classList.add("active");

  // Populate the 'All Tabs' section with default content
  var allTabsContent = "";
  for (var i = 1; i <= 3; i++) {
    var tabContent = document.getElementById('tab' + i).innerHTML;
    allTabsContent += tabContent;
  }
  document.getElementById('allTabs').innerHTML = allTabsContent;
}
// Blog Tabs End