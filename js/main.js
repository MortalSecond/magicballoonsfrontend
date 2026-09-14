// Menú en celulares: abre y cierra la lista de enlaces.
const toggle = document.querySelector(".header__toggle");
const nav = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("nav--open");
  toggle.setAttribute("aria-expanded", open);
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("nav--open");
    toggle.setAttribute("aria-expanded", false);
  }
});

// Galería: al tocar una foto se abre en grande.
// Solo existe en index.html; en las demás páginas esta parte no hace nada.
const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImage = lightbox.querySelector(".lightbox__image");

  document.querySelectorAll(".gallery__image").forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.showModal();
    });
  });

  // Se cierra con la X, con Esc, o tocando fuera de la foto.
  lightbox.addEventListener("click", (event) => {
    if (event.target !== lightboxImage) lightbox.close();
  });
}
