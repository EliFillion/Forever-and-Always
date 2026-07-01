const links = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
const sections = document.querySelectorAll<HTMLElement>("section[id]");

const initNavigation = () => {
  const mobileToggle = document.querySelector<HTMLButtonElement>("#mobile-nav-toggle");
  const mobileMenu = document.querySelector<HTMLElement>("#mobile-nav-menu");

  if (mobileToggle && mobileMenu) {
    const setMenuState = (isOpen: boolean) => {
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.classList.toggle("hidden", !isOpen);
      mobileMenu.classList.toggle("flex", isOpen);
    };

    mobileToggle.addEventListener("click", (event) => {
      event.preventDefault();
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isExpanded);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        links.forEach((link) => {
          link.classList.remove("text-amber-300");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("text-amber-300");
          }
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-80px 0px -40% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavigation);
} else {
  initNavigation();
}