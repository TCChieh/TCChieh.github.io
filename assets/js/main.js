// Shared behaviour for every page
(function () {
  const navbar = document.querySelector(".navbar");
  const backToTop = document.getElementById("backToTop");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onScroll() {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle("scrolled", y > 80);
    if (backToTop) backToTop.style.display = y > 200 ? "block" : "none";
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  // Photo gallery (portfolio page only).
  // photos.json may list plain paths ("img/a.jpg") or objects ({"src": "img/a.jpg", "alt": "Sunset over Taroko"}).
  const gallery = document.querySelector(".gallery-grid");
  if (gallery) {
    fetch(gallery.dataset.source || "photos.json")
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        (data.photos || []).forEach((item) => {
          const photo = typeof item === "string" ? { src: item } : item;
          const img = document.createElement("img");
          img.src = photo.src;
          img.alt = photo.alt || "Photograph by Tzu-Chi Chieh";
          img.loading = "lazy";
          img.decoding = "async";
          gallery.appendChild(img);
        });
        if (!gallery.children.length) {
          gallery.closest("section")?.setAttribute("hidden", "");
        }
      })
      .catch((err) => {
        console.error("Failed to load gallery:", err);
        gallery.closest("section")?.setAttribute("hidden", "");
      });
  }
})();
