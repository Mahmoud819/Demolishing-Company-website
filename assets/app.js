const PHONE = "(613) 618-3477";
const PHONE_HREF = "tel:+16136183477";
const EMAIL = "hello@northlinestudio.ca";
const SITE = "https://northlinestudio.ca";
const BRAND = "OCR Design";
const BRAND_LONG = "Ottawa Construction and Renovation";

const PHOTO = {
  exteriorBefore: "assets/work/exterior-before.png",
  exteriorAfter: "assets/work/exterior-after.png",
  kitchen: "assets/work/kitchen-done.png",
  bathroom: "assets/work/bathroom.png",
};

function photoTag(src, alt, extra = "") {
  return `<img src="${src}" alt="${alt}" width="1200" height="800" decoding="async" ${extra}>`;
}

const DECKS = {
  kitchen: {
    title: "Kitchen",
    photos: [
      "assets/work/deck/kitchen-quartz.png",
      "assets/work/deck/kitchen-island.png",
      "assets/work/deck/kitchen-cabinets.png",
      "assets/work/deck/kitchen-set.png",
    ],
  },
  bathroom: {
    title: "Bathroom",
    photos: [
      "assets/work/deck/bath-tile.png",
      "assets/work/deck/bath-field.png",
      "assets/work/deck/bath-open.png",
      "assets/work/deck/bath-rough.png",
    ],
  },
  exterior: {
    title: "Elevation",
    photos: [
      "assets/work/deck/elev-wrap.png",
      "assets/work/deck/elev-windows.png",
      "assets/work/deck/elev-framing.png",
      "assets/work/deck/elev-open.png",
      "assets/work/deck/elev-drywall.png",
      "assets/work/deck/elev-demo.png",
    ],
  },
};

function deckMarkup(key) {
  const deck = DECKS[key];
  if (!deck) return "";
  const peek = deck.photos.slice(0, 3);
  return `
    <button type="button" class="deck" data-deck="${key}" aria-label="More ${deck.title} photos">
      ${peek
        .map(
          (src, i) =>
            `<span class="deck-card" style="--i:${i}"><img src="${src}" alt="" width="400" height="280" decoding="async"></span>`,
        )
        .join("")}
      <span class="deck-more">${deck.photos.length} more photos</span>
    </button>`;
}

const projects = {
  "exterior-envelope": {
    name: "Exterior",
    phase: "Finished elevation",
    type: "Stone, siding, and windows",
    year: "2026",
    summary: "The same elevation from open OSB to stone, dark siding, and black-framed windows.",
    story:
      "This is the house after the envelope is on: stone on the first floor, dark lap siding above, and the window package set. Drag the slider on the home page to see it against the open sheathing.",
    scope: ["Exterior demolition", "Window package", "Stone masonry", "Lap siding"],
    image: PHOTO.exteriorAfter,
    before: PHOTO.exteriorBefore,
    after: PHOTO.exteriorAfter,
  },
  "kitchen-calacatta": {
    name: "Kitchen",
    phase: "Finished",
    type: "Kitchen renovation",
    year: "2026",
    summary: "Quartz, shaker cabinets, and a peninsula built to cook in.",
    story:
      "One kitchen, finished. Stone, cabinets, and the range landed after the mechanicals were closed.",
    scope: ["Custom cabinets", "Quartz counters", "Undermount sink", "Range and hood"],
    image: PHOTO.kitchen,
  },
  "bathroom-tile": {
    name: "Bathroom",
    phase: "On site",
    type: "Bathroom renovation",
    year: "2026",
    summary: "Tile set on a wet-room wall — the job, not a showroom board.",
    story:
      "One bathroom frame. Waterproofing and large-format tile in the order that keeps the field from moving later.",
    scope: ["Waterproofing", "Large-format tile", "Leveling system", "Plumbing rough-in"],
    image: PHOTO.bathroom,
  },
};

function mountChrome() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = `
      <div class="wrap header-inner">
        <a class="logo" href="index.html">OCR DESIGN<span>.</span><small>${BRAND_LONG}</small></a>
        <nav class="nav">
          <a href="work.html">Projects</a>
          <a href="index.html#services">Services</a>
          <a href="index.html#transition">Exterior</a>
          <a href="contact.html">Contact us</a>
        </nav>
        <div class="header-cta">
          <a class="btn btn-outline" href="${PHONE_HREF}">${PHONE}</a>
        </div>
        <button class="menu-toggle" type="button" id="menu-toggle">Menu</button>
      </div>
      <div class="wrap mobile-nav hidden" id="mobile-nav">
        <a href="work.html">Projects</a>
        <a href="index.html#services">Services</a>
        <a href="index.html#transition">Exterior</a>
        <a href="contact.html">Contact us</a>
        <a href="${PHONE_HREF}">Call ${PHONE}</a>
      </div>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="wrap footer-grid">
        <div>
          <p class="kicker">${BRAND}.</p>
          <h2>Building dreams, constructing realities.</h2>
          <p class="fine" style="margin-top:12px">${BRAND_LONG}</p>
        </div>
        <div>
          <p style="color:#fff">Book a site visit</p>
          <p>By phone appointment only.<br>We come to the job site.</p>
          <p><a href="${PHONE_HREF}">${PHONE}</a><br><a href="mailto:${EMAIL}">${EMAIL}</a></p>
        </div>
        <div>
          <p><a href="work.html">Selected work</a></p>
          <p><a href="index.html#transition">Exterior transition</a></p>
          <p><a href="index.html#visit">Request a callback</a></p>
          <p><a href="contact.html">Contact</a></p>
          <p class="fine">Fully insured. WSIB covered. Fixed-price contracts. Site visits by appointment on the phone.</p>
        </div>
      </div>`;
  }
  document.getElementById("menu-toggle")?.addEventListener("click", () => {
    document.getElementById("mobile-nav")?.classList.toggle("hidden");
  });
  mountSchema();
  mountChat();
}

function mountSchema() {
  if (document.getElementById("org-schema")) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "org-schema";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BRAND,
    alternateName: BRAND_LONG,
    url: SITE,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE}/assets/work/kitchen-done.png`,
    areaServed: { "@type": "City", name: "Ottawa" },
  });
  document.head.appendChild(script);
}

function mountChat() {
  const root = document.createElement("div");
  root.className = "chat-wrap";
  root.innerHTML = `
    <div class="chat-panel hidden" id="chat-panel">
      <div class="chat-head">
        <div>
          <div class="kicker">Live chat</div>
          <div>A specialist is available now</div>
        </div>
        <button type="button" id="chat-close" style="background:none;border:0;color:inherit;cursor:pointer">Close</button>
      </div>
      <div class="chat-body" id="chat-body">
        <div class="bubble">Hello — this is OCR Design, Ottawa Construction and Renovation. Call ${PHONE} to book a site visit, or tell us what you are building here.</div>
      </div>
      <form class="chat-form" id="chat-form">
        <input class="field" name="name" placeholder="Your name" required>
        <input class="field" name="phone" type="tel" placeholder="Phone (required)" required>
        <textarea class="field" name="message" rows="2" placeholder="Kitchen, bathroom, exterior…" required></textarea>
        <button class="btn" type="submit">Send to a specialist</button>
      </form>
    </div>
    <button class="btn" id="chat-open" type="button">Live chat — online</button>`;
  document.body.appendChild(root);
  const panel = document.getElementById("chat-panel");
  document.getElementById("chat-open").onclick = () => {
    const open = !panel.classList.contains("hidden");
    panel.classList.toggle("hidden", open);
    document.getElementById("chat-open").textContent = open ? "Live chat — online" : "Hide chat";
  };
  document.getElementById("chat-close").onclick = () => {
    panel.classList.add("hidden");
    document.getElementById("chat-open").textContent = "Live chat — online";
  };
  document.getElementById("chat-form").onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const body = document.getElementById("chat-body");
    body.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble me">${data.get("message")}</div>
       <div class="bubble">Received, ${data.get("name")}. We will call ${data.get("phone")} to set the site visit. Usually within the hour, always within 24 hours.</div>`,
    );
    event.target.classList.add("hidden");
    body.scrollTop = body.scrollHeight;
  };
}

function mountSlider(id) {
  const root = document.getElementById(id);
  if (!root) return;
  const input = root.querySelector("input");
  const before = root.querySelector(".compare-before");
  const line = root.querySelector(".compare-line");
  const update = () => {
    const pos = Number(input.value);
    before.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    line.style.left = pos + "%";
  };
  input.addEventListener("input", update);
  update();
}

function mountQuoteForms() {
  document.querySelectorAll("[data-quote-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.outerHTML = `<div class="success"><p class="kicker">Request received</p><h3>We will call to confirm the site visit.</h3><p>A specialist comes to the job site by appointment. Phone is how we confirm — there is no office drop-in, and no obligation to proceed.</p></div>`;
    });
  });
}

function mountProjectPage() {
  const root = document.getElementById("project-page");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("slug");
  const project = projects[slug];
  if (!project) {
    document.title = `Project not found | ${BRAND}`;
    root.innerHTML = `<div class="wrap page-hero"><h1 class="display">Project not found.</h1><p><a href="work.html">Back to work</a></p></div>`;
    return;
  }
  document.title = `${project.name} | ${BRAND}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", `${project.summary} ${project.type} by ${BRAND_LONG}.`);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", `${SITE}/project.html?slug=${slug}`);
  root.innerHTML = `
    <section class="hero-dark" style="padding-bottom:48px">
      <div class="wrap">
        <p class="kicker">${project.phase}</p>
        <h1 style="font-size:clamp(40px,6vw,64px);margin:12px 0 8px">${project.name}</h1>
        <p style="color:rgb(255 255 255 / 0.75)">${project.type} · ${project.year}</p>
      </div>
    </section>
    <div class="wrap" style="padding:32px 0 0">
      ${photoTag(project.image, project.name + " by " + BRAND, 'style="width:100%;border-radius:28px;aspect-ratio:16/9;object-fit:cover"')}
    </div>
    <section class="section">
      <div class="wrap split">
        <div>
          <p class="kicker">The story</p>
          <p class="lede">${project.story}</p>
        </div>
        <ul style="margin:0;padding:0;list-style:none">${project.scope.map((item) => `<li style="padding:14px 0;border-bottom:1px solid var(--line);font-size:18px">${item}</li>`).join("")}</ul>
      </div>
    </section>
    ${
      project.before && project.after
        ? `<section class="section band-dark">
      <div class="wrap">
        <h2>The elevation, before and after</h2>
        <div class="compare" id="project-compare">
          ${photoTag(project.after, project.name + " finished")}
          <div class="compare-before">${photoTag(project.before, project.name + " during construction")}</div>
          <div class="compare-line"><span class="compare-handle">↔</span></div>
          <input type="range" min="2" max="98" value="48" aria-label="Compare construction stages">
          <span class="compare-label left">BEFORE</span>
          <span class="compare-label right">AFTER</span>
        </div>
      </div>
    </section>`
        : ""
    }
    <section class="section">
      <div class="wrap" style="display:flex;justify-content:space-between;align-items:center">
        <a href="work.html">All projects</a>
        <a class="btn" href="${PHONE_HREF}">Call to start a similar job →</a>
      </div>
    </section>`;
  mountSlider("project-compare");
}

function workCards() {
  return Object.entries(projects)
    .map(([slug, project]) => {
      const deckKey = slug.startsWith("kitchen") ? "kitchen" : slug.startsWith("bathroom") ? "bathroom" : "";
      return `
      <article>
        <a class="shot-main" href="project.html?slug=${slug}">
          ${photoTag(project.image, project.name + " — " + project.type, 'loading="lazy"')}
        </a>
        ${deckKey ? deckMarkup(deckKey) : ""}
        <a href="project.html?slug=${slug}">
          <div class="work-meta">
            <div>
              <p class="kicker">${project.phase}</p>
              <h3>${project.name}</h3>
            </div>
          </div>
          <p class="fine">${project.type}</p>
        </a>
      </article>`;
    })
    .join("");
}

function fillDecks() {
  document.querySelectorAll(".deck[data-deck]").forEach((el) => {
    if (el.querySelector(".deck-card")) return;
    el.outerHTML = deckMarkup(el.dataset.deck);
  });
}

function mountDecks() {
  fillDecks();
  document.querySelectorAll(".deck[data-deck]").forEach((btn) => {
    btn.addEventListener("click", () => openDeck(btn.dataset.deck));
  });
}

function openDeck(key) {
  const deck = DECKS[key];
  if (!deck) return;
  let index = 0;
  const root = document.createElement("div");
  root.className = "lightbox";
  root.setAttribute("role", "dialog");
  const draw = () => {
    root.innerHTML = `
      <div class="lightbox-bar">
        <div>
          <p class="kicker">${deck.title}</p>
          <div>${index + 1} / ${deck.photos.length}</div>
        </div>
        <button type="button" data-close>Close</button>
      </div>
      <div class="lightbox-stage">
        <img src="${deck.photos[index]}" alt="${deck.title} photo ${index + 1}">
      </div>
      <div class="lightbox-nav">
        <button type="button" data-prev>Previous</button>
        <button type="button" data-next>Next</button>
      </div>`;
  };
  draw();
  const onKey = (event) => {
    if (event.key === "Escape") close();
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };
  const step = (dir) => {
    index = (index + dir + deck.photos.length) % deck.photos.length;
    draw();
  };
  const close = () => {
    document.removeEventListener("keydown", onKey);
    root.remove();
  };
  root.addEventListener("click", (event) => {
    const t = event.target;
    if (t.dataset.close !== undefined) close();
    if (t.dataset.next !== undefined) step(1);
    if (t.dataset.prev !== undefined) step(-1);
  });
  document.addEventListener("keydown", onKey);
  document.body.appendChild(root);
}

document.addEventListener("DOMContentLoaded", () => {
  mountChrome();
  mountSlider("home-compare");
  mountQuoteForms();
  mountProjectPage();
  const grid = document.getElementById("work-grid");
  if (grid) grid.innerHTML = workCards();
  mountDecks();
});
