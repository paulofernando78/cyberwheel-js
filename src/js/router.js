const routes = {
  404: "/pages/404.hmtl",
  "/": "/pages/home.html",
  "/bikes": "/pages/bikes.html",
  "/contact": "/pages/contact.html",
};

export function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderRoute();
}

export async function renderRoute() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;
  const route = routes[path] || routes["404"];

  try {
    const response = await fetch(route);
    if (!response.ok) throw new Error("Page not found");
    const html = await response.text();
    app.innerHTML = html;
  } catch (err) {
    app.innerHTML = `<h1>404 - Page Not Found</h1>`
  }
}

window.addEventListener("popstate", renderRoute);
