export function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderRoute();
}

export async function renderRoute() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;

  switch (path) {
    case "/":
      const homeModule = await import("/src/pages/home.js");
      homeModule.Home(app);
      break;
    case "/bikes":
      const bikesModule = await import("/src/pages/bikes.js");
      bikesModule.Bikes(app);
      break;
    case "/contact":
      const contactModule = await import("/src/pages/contact.js");
      contactModule.Contact(app);
      break;
    default:
      const notFoundModule = await import("/src/pages/404.js");
      notFoundModule.NotFound(app);
  }
}

window.addEventListener("popstate", renderRoute);
