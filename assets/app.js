const PHONE = "(613) 728-4410";
const PHONE_HREF = "tel:+16137284410";
const EMAIL = "hello@northlinestudio.ca";
const ADDRESS = "412 Richmond Road, Suite 200, Ottawa, ON K2A 0G6";
const SITE = "https://northlinestudio.ca";

const PHOTO = {
  frame: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200",
  house: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  westboro: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  glebe: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
  glebeAfter: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200",
  kanata: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200",
  kanataBefore: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200",
  rockcliffe: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bath: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

function photoTag(src, alt, extra = "") {
  return `<img src="${src}" alt="${alt}" width="1200" height="800" decoding="async" ${extra} onerror="this.onerror=null;this.src='${PHOTO.frame}'">`;
}

const projects = {
  "westboro-highland": {
    name: "The Highland Modern",
    neighbourhood: "Westboro",
    street: "Highland Avenue",
    type: "Full home renovation",
    year: "2025",
    summary: "A 1960s bungalow opened to the river light — kitchen, living, and a quiet primary suite.",
    story:
      "The clients wanted to stay on Highland rather than chase a new listing. We kept the roof line, moved two bearing walls, and rebuilt the kitchen as a long gallery facing west. Procurement happened in week two, not week twelve, which is why the quartz and millwork arrived before the drywall closed.",
    scope: ["Open-concept kitchen", "Primary ensuite", "Hardwood throughout", "Panel upgrade"],
    image: PHOTO.westboro,
    before: PHOTO.frame,
    after: PHOTO.westboro,
  },
  "glebe-first-avenue": {
    name: "Heritage Restoration",
    neighbourhood: "The Glebe",
    street: "First Avenue",
    type: "Addition & restoration",
    year: "2025",
    summary: "A rear addition that defers to the street, with a kitchen that finally matches how the family cooks.",
    story:
      "Heritage overlay meant the façade stayed honest. The new work is behind: a two-storey addition, restored trim, and a kitchen that does not pretend the house was built last year. We sat with the City early, which saved a redesign cycle most Glebe jobs still pay for.",
    scope: ["Rear addition", "Kitchen", "Trim restoration", "Permit package"],
    image: PHOTO.glebe,
    before: PHOTO.frame,
    after: PHOTO.glebeAfter,
  },
  "kanata-march-road": {
    name: "Tech HQ Fit-Up",
    neighbourhood: "Kanata North",
    street: "March Road",
    type: "Commercial office",
    year: "2024",
    summary: "An 8,400 sq.ft. office that opened on a Monday because the fire plan was written in week one.",
    story:
      "The brief was speed without a punch-list hangover. We sequenced after-hours trades, locked the millwork shop drawings before demolition, and treated the sprinkler and alarm drawings as the schedule, not an afterthought.",
    scope: ["Open studio floor", "Meeting rooms", "Fire-code package", "After-hours build"],
    image: PHOTO.kanata,
    before: PHOTO.kanataBefore,
    after: PHOTO.kanata,
  },
  "rockcliffe-new-build": {
    name: "Cedar Court House",
    neighbourhood: "Rockcliffe Park",
    street: "Cedar Court",
    type: "Custom new home",
    year: "2025",
    summary: "A quiet new house that sits in the trees rather than performing for the street.",
    story:
      "New build on a constrained lot. The architecture is restrained; the engineering is not. Geothermal, a hidden garage, and millwork that was ordered while the foundation was still a drawing. Occupancy landed in the week we wrote on the first schedule.",
    scope: ["Custom new home", "Geothermal", "Site-specific millwork", "Landscape coordination"],
    image: PHOTO.rockcliffe,
    before: PHOTO.frame,
    after: PHOTO.house,
  },
};

function mountChrome() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = `
      <div class="wrap header-inner">
        <a class="logo" href="index.html">NORTHLINE<span>.</span></a>
        <nav class="nav">
          <a href="work.html">Projects</a>
          <a href="greater-ottawa.html">Greater Ottawa</a>
          <a href="index.html#services">Services</a>
          <a href="contact.html">Contact us</a>
        </nav>
        <div class="header-cta">
          <a class="btn btn-outline" href="index.html#visit">Get a quote</a>
        </div>
        <button class="menu-toggle" type="button" id="menu-toggle">Menu</button>
      </div>
      <div class="wrap mobile-nav hidden" id="mobile-nav">
        <a href="work.html">Projects</a>
        <a href="greater-ottawa.html">Greater Ottawa</a>
        <a href="index.html#services">Services</a>
        <a href="contact.html">Contact us</a>
        <a href="index.html#visit">Get a quote</a>
      </div>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="wrap footer-grid">
        <div>
          <p class="kicker">NORTHLINE.</p>
          <h2>Building dreams, constructing realities.</h2>
        </div>
        <div>
          <p style="color:#fff">Visit the design centre</p>
          <p>${ADDRESS}</p>
          <p><a href="${PHONE_HREF}">${PHONE}</a><br><a href="mailto:${EMAIL}">${EMAIL}</a></p>
        </div>
        <div>
          <p><a href="work.html">Selected work</a></p>
          <p><a href="greater-ottawa.html">Greater Ottawa areas</a></p>
          <p><a href="index.html#visit">Book an in-home visit</a></p>
          <p><a href="contact.html">Contact</a></p>
          <p class="fine">Serving Greater Ottawa — Westboro, The Glebe, Kanata, Barrhaven, Orléans, Nepean, Stittsville, Rockcliffe Park, and nearby communities. Fully insured. WSIB covered. Fixed-price contracts.</p>
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
    name: "Northline",
    url: SITE,
    telephone: PHONE,
    email: EMAIL,
    image: PHOTO.house,
    address: {
      "@type": "PostalAddress",
      streetAddress: "412 Richmond Road, Suite 200",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      postalCode: "K2A 0G6",
      addressCountry: "CA",
    },
    areaServed: [
      "Greater Ottawa",
      "Ottawa",
      "Westboro",
      "The Glebe",
      "Kanata",
      "Barrhaven",
      "Orléans",
      "Nepean",
      "Stittsville",
      "Rockcliffe Park",
      "Manotick",
      "Hintonburg",
      "New Edinburgh",
    ].map((name) => ({ "@type": "Place", name })),
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
        <div class="bubble">Hello — this is Alex at the design centre. Tell us what you are building. We are online right now, and a specialist always follows up within 24 hours.</div>
      </div>
      <form class="chat-form" id="chat-form">
        <input class="field" name="name" placeholder="Your name" required>
        <textarea class="field" name="message" rows="2" placeholder="Kitchen, addition, custom home…" required></textarea>
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
       <div class="bubble">Received, ${data.get("name")}. A project specialist will continue this conversation shortly — usually within the hour, always within 24 hours. No commitment to proceed.</div>`,
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
      form.outerHTML = `<div class="success"><p class="kicker">Visit booked</p><h3>We will confirm your in-home appointment by email.</h3><p>A specialist will come to your home to review the work and give you an exact price. Email is how we confirm — there is no obligation to proceed.</p></div>`;
    });
  });
}

function mountProjectPage() {
  const root = document.getElementById("project-page");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("slug");
  const project = projects[slug];
  if (!project) {
    document.title = "Project not found | Northline";
    root.innerHTML = `<div class="wrap page-hero"><h1 class="display">Project not found.</h1><p><a href="work.html">Back to work</a></p></div>`;
    return;
  }
  document.title = `${project.name} | ${project.neighbourhood}, Greater Ottawa | Northline`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", `${project.summary} ${project.type} in ${project.neighbourhood}, Greater Ottawa.`);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", `${SITE}/project.html?slug=${slug}`);
  root.innerHTML = `
    <section class="hero-dark" style="padding-bottom:48px">
      <div class="wrap">
        <p class="kicker">${project.neighbourhood} · ${project.street}</p>
        <h1 style="font-size:clamp(40px,6vw,64px);margin:12px 0 8px">${project.name}</h1>
        <p style="color:rgb(255 255 255 / 0.75)">${project.type} · ${project.year}</p>
      </div>
    </section>
    <div class="wrap" style="padding:32px 0 0">
      ${photoTag(project.image, project.name + " in " + project.neighbourhood + ", Greater Ottawa", 'style="width:100%;border-radius:28px;aspect-ratio:16/8;object-fit:cover"')}
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
    <section class="section band-dark">
      <div class="wrap">
        <h2>From raw to refined</h2>
        <div class="compare" id="project-compare">
          ${photoTag(project.after, project.name + " completed in Greater Ottawa")}
          <div class="compare-before">${photoTag(project.before, project.name + " during construction in Greater Ottawa")}</div>
          <div class="compare-line"><span class="compare-handle">↔</span></div>
          <input type="range" min="2" max="98" value="48" aria-label="Compare construction and completion">
          <span class="compare-label left">IN PROGRESS</span>
          <span class="compare-label right">COMPLETE</span>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap" style="display:flex;justify-content:space-between;align-items:center">
        <a href="work.html">All projects</a>
        <a class="btn" href="contact.html">Start a similar project →</a>
      </div>
    </section>`;
  mountSlider("project-compare");
}

function workCards() {
  return Object.entries(projects)
    .map(
      ([slug, project]) => `
      <a href="project.html?slug=${slug}">
        ${photoTag(project.image, project.name + " — " + project.type + " in " + project.neighbourhood + ", Greater Ottawa", 'loading="lazy"')}
        <div class="work-meta">
          <div>
            <p class="kicker">${project.neighbourhood}</p>
            <h3>${project.name}</h3>
          </div>
          <p class="fine">${project.street}</p>
        </div>
        <p class="fine">${project.type}</p>
      </a>`,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  mountChrome();
  mountSlider("home-compare");
  mountQuoteForms();
  mountProjectPage();
  const grid = document.getElementById("work-grid");
  if (grid) grid.innerHTML = workCards();
});
