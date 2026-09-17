// Mobile hamburger menu
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  });
});

// Donor list
const donorBtn = document.getElementById("donorBtn");
const donorList = document.getElementById("donorList");

donorBtn.addEventListener("click", () => {
  const willOpen = donorList.hidden;
  donorList.hidden = !willOpen;
  donorBtn.textContent = willOpen
    ? "দাতা সদস্যদের তালিকা লুকান"
    : "দাতা সদস্যদের তালিকা দেখুন";
  donorBtn.setAttribute("aria-expanded", String(willOpen));
});

// Back to top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 450 ? "grid" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gallery modal
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeImage = document.getElementById("closeImage");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    modalImage.src = item.dataset.image;
    modalImage.alt = item.dataset.title || "Gallery image";
    modalCaption.textContent = item.dataset.title || "";
    imageModal.classList.add("show");
    imageModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

function closeModal() {
  imageModal.classList.remove("show");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.classList.remove("modal-open");
}

closeImage.addEventListener("click", closeModal);

imageModal.addEventListener("click", event => {
  if (event.target === imageModal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
    navLinks.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});

// Active navigation link
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(anchor => {
        anchor.classList.toggle(
          "active",
          anchor.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));
