const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
  siteNav.classList.toggle("is-open", open);
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

// Lightbox della gallery: ogni <button> dentro .gallery apre il <dialog class="lightbox">
const lightbox = document.querySelector(".lightbox");
const gallery = document.querySelector(".gallery");

if (lightbox && gallery && typeof lightbox.showModal === "function") {
  const lightboxImg = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox__text");

  gallery.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const thumb = button.querySelector("img");
    const caption = button.closest("figure").querySelector("figcaption");
    lightboxImg.src = button.dataset.full || thumb.src;
    lightboxImg.alt = thumb.alt;
    lightboxCaption.textContent = caption ? caption.textContent : "";
    lightbox.showModal();
  });

  lightbox.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  lightbox.addEventListener("close", () => {
    lightboxImg.removeAttribute("src");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) {
      lightbox.close();
    }
  });
}
