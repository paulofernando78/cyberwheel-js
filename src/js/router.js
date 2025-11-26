export function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderRoute();
}

const routes = [
  // Home
  {
    pattern: /^\/$/,
    load: () => import("../pages/home.js"),
    handler: (mod, app) => mod.Home(app)
  },

  {
    pattern: /^\/contacts$/,
    load: () => import("../pages/contacts.js"),
    handler: (mod, app) => mod.Contacts(app)
  },

  // Lista de bikes
  {
    pattern: /^\/bikes$/,
    load: () => import("../pages/bikes.js"),
    handler: (mod, app) => mod.Bikes(app)
  },

  // Página de bike com parâmetro dinâmico
  // /bikes/alguma-coisa
  {
    pattern: /^\/bikes\/([^\/]+)$/,
    load: () => import("../pages/bikes/bikeDetail.js"),
    handler: (mod, app, params) => mod.handler(app, params)
    // params[1] => ID ou slug da bike
  },

  // Checkout com parâmetro dinâmico
  // /checkout/123
  {
    pattern: /^\/checkout\/([^\/]+)$/,
    load: () => import("../pages/checkout.js"),
    handler: (mod, app, params) => mod.Checkout(app, params)
  }
];

export async function renderRoute() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;

  for (const route of routes) {
    const match = path.match(route.pattern);

    if (match) {
      app.innerHTML = "";
      const module = await route.load();
      route.handler(module, app, match);
      return;
    }
  }

  app.innerHTML = "";
  const notFound = await import("/src/pages/404.js");
  notFound.NotFound(app);
}

// Suporte ao botão voltar/avançar
window.addEventListener("popstate", renderRoute);