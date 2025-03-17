const Settings = document.getElementById("settings");
const FollMenu = document.getElementById("foll-menu");
const Close = document.getElementById("close");

Settings.addEventListener("click", () => {
  FollMenu.style.opacity = 1;
  Close.style.opacity = 1;
  Close.style.transition = "1s";
  FollMenu.style.transition = "1s";
});

Close.addEventListener("click", () => {
  FollMenu.style.opacity = 0;
  Close.style.opacity = 0;
  Close.style.transition = "1s";
  FollMenu.style.transition = "1s";
});
