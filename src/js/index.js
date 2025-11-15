const darkModeBtn = document.querySelector("wc-button[icon='lightMode']");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const newTheme = current === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    darkModeBtn.setAttribute(
      "icon",
      newTheme === "dark" ? "lightMode" : "darkMode"
    );
  });
}
