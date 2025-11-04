const routes = {
  404: "/src/pages/404.html",
  "/": "/src/pages/home.html",
  "/bikes": "/src/pages/bikes.html",
  "/contact": "/src/pages/contact.html",
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

    setTimeout(() => {
      const carousel = document.querySelector(".carousel");
      const leftBtn = document.querySelector("#left");
      const rightBtn = document.querySelector("#right");
      console.log("Buttons found", leftBtn, rightBtn);

      if (leftBtn && rightBtn && carousel) {
        leftBtn.addEventListener("click", () => {
          carousel.scrollBy({ left: -200, behavior: "smooth" });
        });
        rightBtn.addEventListener("click", () => {
          carousel.scrollBy({ left: 200, behavior: "smooth" });
        });
      }
    });
  } catch (err) {
    app.innerHTML = `<h1>404 - Page Not Found</h1>`;
  }
}

window.addEventListener("popstate", renderRoute);
