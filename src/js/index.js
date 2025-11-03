const darkModeBtn = document.querySelector("wc-button[icon='lightMode']");

darkModeBtn.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  darkModeBtn.setAttribute(
    "icon",
    newTheme === "dark" ? "darkMode" : "lightMode"
  );
});
