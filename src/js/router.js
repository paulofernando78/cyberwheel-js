export function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderRoute();
}

export async function renderRoute() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;

  switch (path) {
    case "/":
      app.innerHTML = "";
      const homeModule = await import("/src/pages/home.js");
      homeModule.Home(app);
      break;
    case "/bikes":
      app.innerHTML = "";
      const bikesModule = await import("/src/pages/bikes.js");
      bikesModule.Bikes(app);
      break;
    //
    case "/bikes/rider-a1":
      app.innerHTML = "";
      const bikeRiderA1 = await import("/src/pages/bikes/riderA1.js");
      bikeRiderA1.riderA1(app);
      break;

    case "/bikes/urban-z3":
      app.innerHTML = "";
      const bikeUrbanZ3 = await import("/src/pages/bikes/urbanZ3.js");
      bikeUrbanZ3.urbanZ3(app);
      break;

    case "/bikes/ares-x10":
      app.innerHTML = "";
      const bikeAresX10 = await import("/src/pages/bikes/aresX10.js");
      bikeAresX10.aresX10(app);
      break;
    default:
      app.innerHTML = "";
      const notFoundModule = await import("/src/pages/404.js");
      notFoundModule.NotFound(app);
  }
}

window.addEventListener("popstate", renderRoute);
