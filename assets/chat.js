/**
 * OCR Design — project inquiry chatbot.
 * Guides visitors through a structured intake. No pricing or availability guarantees.
 */
(function () {
  const PHONE = "(613) 618-3477";
  const PHONE_HREF = "tel:+16136183477";
  const EMAIL = "info@ocrdesign.ca";
  const STORE = "ocr-inquiry-v2";

  const STEPS = ["location", "property", "area", "describe", "priority", "timeline", "contact", "review"];

  const ICONS = {
    interior:
      '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M9 21v-7h6v7"/>',
    exterior:
      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/><path d="M16 8.5V5h3"/>',
    residential:
      '<path d="M4 11 12 4l8 7v9H4z"/><path d="M9 20v-6h6v6"/>',
    commercial:
      '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h8"/>',
    kitchen:
      '<path d="M5 3v7a3 3 0 0 0 6 0V3"/><path d="M8 3v18"/><path d="M16 8v13"/><path d="M14 8h4a2 2 0 0 1 0 4h-4"/>',
    bathroom:
      '<path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M8 12V7a2 2 0 0 1 4 0"/><path d="M6 20h12"/>',
    basement: '<path d="M4 4h16v6H4z"/><path d="M4 14h16v6H4z"/><path d="M12 10v4"/><path d="M9 14l3 3 3-3"/>',
    bedroom: '<path d="M3 18V9a2 2 0 0 1 2-2h6v11"/><path d="M11 11h8a2 2 0 0 1 2 2v5"/><path d="M3 18h18"/>',
    living: '<path d="M4 11h16v7H4z"/><path d="M6 11V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/><path d="M4 18v2M20 18v2"/>',
    office: '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',
    laundry: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6h2"/>',
    attic: '<path d="M3 19 12 5l9 14z"/><path d="M9 19v-5h6v5"/>',
    stairs: '<path d="M3 20h5v-4h4v-4h4V8h5"/>',
    house: '<path d="M4 11 12 4l8 7v9H4z"/><path d="M9 20v-6h6v6"/>',
    hammer: '<path d="M14 5 9 10l5 5 5-5-5-5z"/><path d="M9 10 4 20"/>',
    addition: '<path d="M4 11 12 4l8 7v9H4z"/><path d="M12 11v6M9 14h6"/>',
    plumbing: '<path d="M12 3v6"/><path d="M8 9h8l-1 4H9z"/><path d="M10 13v8M14 13v8"/><path d="M8 21h4M12 21h4"/>',
    electrical: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    hvac: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
    insulation: '<path d="M4 6h16M4 12h16M4 18h16"/><path d="M8 4v16M16 4v16"/>',
    windows: '<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M12 4v16M4 12h16"/>',
    framing: '<path d="M4 20V6l8-3 8 3v14"/><path d="M4 10h16M12 3v17"/>',
    foundation: '<path d="M3 10h18v10H3z"/><path d="M7 10V6h10v4"/><path d="M3 15h18"/>',
    other: '<circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/>',
    roofing: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/>',
    siding: '<path d="M4 5h16M4 10h16M4 15h16M4 20h16"/>',
    facade: '<path d="M4 20V8l8-5 8 5v12"/><path d="M9 20v-6h6v6"/><path d="M9 10h.01M15 10h.01"/>',
    deck: '<path d="M4 14h16v6H4z"/><path d="M7 14V8h10v6"/><path d="M4 17h16"/>',
    patio: '<rect x="3" y="10" width="18" height="10" rx="1"/><path d="M8 10V6h8v4"/>',
    balcony: '<path d="M4 14h16v6H4z"/><path d="M6 14V8h12v6"/><path d="M6 11h12"/>',
    garage: '<path d="M3 20V10l9-6 9 6v10"/><path d="M6 20v-6h12v6"/>',
    driveway: '<path d="M6 4h12l4 16H2z"/><path d="M12 4v16"/>',
    landscaping: '<path d="M12 21V11"/><path d="M12 11c-4 0-7-2-7-5 4 0 7 2 7 5"/><path d="M12 11c4 0 7-2 7-5-4 0-7 2-7 5"/>',
    outdoor: '<path d="M12 22v-7"/><path d="M7 10a5 5 0 0 1 10 0c0 4-5 7-5 7s-5-3-5-7z"/>',
    garden: '<path d="M12 21v-6"/><path d="M8 8c0-2 1.5-4 4-4s4 2 4 4-4 6-4 6-4-4-4-6z"/>',
    restaurant: '<path d="M4 4v8a2 2 0 0 0 4 0V4"/><path d="M6 12v8"/><path d="M16 4v16"/><path d="M14 8h4"/>',
    retail: '<path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    warehouse: '<path d="M3 20V9l9-5 9 5v11"/><path d="M3 12h18"/>',
    parking: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 16V8h4a3 3 0 0 1 0 6H9"/>',
    entrance: '<rect x="6" y="3" width="12" height="18" rx="1"/><path d="M10 12h.01"/>',
    lighting: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a5 5 0 0 1 3 9c0 2-1 3-1 3H10s-1-1-1-3a5 5 0 0 1 3-9z"/>',
    structural: '<path d="M4 20V8h4v12M16 20V8h4v12M4 8l8-4 8 4"/>',
    storage: '<path d="M4 8h16v12H4z"/><path d="M4 8l8-4 8 4"/><path d="M12 4v16"/>',
    renovation: '<path d="M14 6 8 12l4 4 6-6-4-4z"/><path d="M8 12 4 20"/><path d="M14 18h6"/>',
    standard: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    urgent: '<path d="M12 4 3 19h18z"/><path d="M12 9v5M12 16h.01"/>',
    emergency: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
    soon: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    month: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
    planning: '<path d="M4 19h16M6 16l4-8 4 5 4-9"/>',
    send: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    chat: '<path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>',
  };

  function svg(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.other}</svg>`;
  }

  const AREAS = {
    Interior: {
      Residential: {
        question: "Which area of your home needs work?",
        options: [
          ["Kitchen", "kitchen"],
          ["Bathroom / Washroom", "bathroom"],
          ["Basement", "basement"],
          ["Bedroom", "bedroom"],
          ["Living Room / Family Room", "living"],
          ["Home Office", "office"],
          ["Laundry Room", "laundry"],
          ["Attic", "attic"],
          ["Staircases", "stairs"],
          ["Full Home Renovation", "house"],
          ["Gut Renovation", "hammer"],
          ["Home Addition", "addition"],
          ["Plumbing", "plumbing"],
          ["Electrical", "electrical"],
          ["HVAC", "hvac"],
          ["Insulation", "insulation"],
          ["Windows & Doors", "windows"],
          ["Framing", "framing"],
          ["Foundation Repair", "foundation"],
          ["Other", "other"],
        ],
      },
      Commercial: {
        question: "Which area of your commercial space needs work?",
        options: [
          ["Office Space", "office"],
          ["Retail Space", "retail"],
          ["Restaurant / Hospitality", "restaurant"],
          ["Washrooms", "bathroom"],
          ["Kitchen / Commercial Kitchen", "kitchen"],
          ["Storage Area", "storage"],
          ["Warehouse", "warehouse"],
          ["Basement", "basement"],
          ["Interior Renovation", "renovation"],
          ["Full Commercial Renovation", "commercial"],
          ["Plumbing", "plumbing"],
          ["Electrical", "electrical"],
          ["HVAC", "hvac"],
          ["Framing", "framing"],
          ["Insulation", "insulation"],
          ["Windows & Doors", "windows"],
          ["Other", "other"],
        ],
      },
    },
    Exterior: {
      Residential: {
        question: "Which exterior area needs work?",
        options: [
          ["Roofing", "roofing"],
          ["Siding", "siding"],
          ["Exterior Facade", "facade"],
          ["Deck", "deck"],
          ["Patio", "patio"],
          ["Balcony", "balcony"],
          ["Garage", "garage"],
          ["Driveway", "driveway"],
          ["Landscaping", "landscaping"],
          ["Windows & Doors", "windows"],
          ["Foundation", "foundation"],
          ["Exterior Addition", "addition"],
          ["Outdoor Structures", "outdoor"],
          ["Garden / Yard", "garden"],
          ["Other", "other"],
        ],
      },
      Commercial: {
        question: "Which exterior area needs work?",
        options: [
          ["Commercial Roofing", "roofing"],
          ["Building Facade", "facade"],
          ["Exterior Renovation", "renovation"],
          ["Parking Area", "parking"],
          ["Driveway / Access Area", "driveway"],
          ["Commercial Entrance", "entrance"],
          ["Windows & Doors", "windows"],
          ["Exterior Lighting", "lighting"],
          ["Landscaping", "landscaping"],
          ["Outdoor Commercial Area", "outdoor"],
          ["Structural Work", "structural"],
          ["Other", "other"],
        ],
      },
    },
  };

  const HINTS = [
    { labels: ["Kitchen", "Kitchen / Commercial Kitchen"], words: ["kitchen", "cabinets", "countertop", "quartz", "island", "backsplash", "range", "appliance"] },
    { labels: ["Bathroom / Washroom", "Washrooms"], words: ["bathroom", "washroom", "shower", "bathtub", "tub", "toilet", "vanity", "tile"] },
    { labels: ["Basement"], words: ["basement", "lower level", "unfinished basement"] },
    { labels: ["Bedroom"], words: ["bedroom", "primary suite", "master"] },
    { labels: ["Living Room / Family Room"], words: ["living room", "family room", "great room"] },
    { labels: ["Home Office", "Office Space"], words: ["home office", "office"] },
    { labels: ["Laundry Room"], words: ["laundry"] },
    { labels: ["Attic"], words: ["attic"] },
    { labels: ["Staircases"], words: ["stair", "staircase"] },
    { labels: ["Full Home Renovation", "Full Commercial Renovation", "Gut Renovation", "Interior Renovation"], words: ["whole home", "full renovation", "gut reno", "entire house", "from the studs"] },
    { labels: ["Home Addition", "Exterior Addition"], words: ["addition", "add a room", "extend", "bump out"] },
    { labels: ["Plumbing"], words: ["plumb", "pipe", "leak", "leaking", "drain", "faucet", "water heater", "sewage", "clog"] },
    { labels: ["Electrical"], words: ["electrical", "outlet", "wiring", "panel", "breaker", "no power", "spark", "lights"] },
    { labels: ["HVAC"], words: ["hvac", "furnace", "air condition", "heat pump", "no heat", "duct"] },
    { labels: ["Insulation"], words: ["insulation", "draft", "spray foam"] },
    { labels: ["Windows & Doors"], words: ["window", "door", "entry", "slider"] },
    { labels: ["Framing"], words: ["framing", "studs", "load bearing"] },
    { labels: ["Foundation Repair", "Foundation"], words: ["foundation", "settling", "crack in the foundation"] },
    { labels: ["Roofing", "Commercial Roofing"], words: ["roof", "shingle", "eavestrough", "gutter", "ice dam", "missing shingles"] },
    { labels: ["Siding", "Exterior Facade", "Building Facade"], words: ["siding", "facade", "stucco", "brick", "stone veneer", "cladding"] },
    { labels: ["Deck", "Patio", "Balcony"], words: ["deck", "patio", "balcony", "porch"] },
    { labels: ["Garage"], words: ["garage"] },
    { labels: ["Driveway", "Driveway / Access Area", "Parking Area"], words: ["driveway", "parking", "asphalt", "interlock"] },
    { labels: ["Landscaping", "Garden / Yard"], words: ["landscap", "garden", "yard", "grading"] },
    { labels: ["Retail Space"], words: ["retail", "storefront", "shop"] },
    { labels: ["Restaurant / Hospitality", "Kitchen / Commercial Kitchen"], words: ["restaurant", "hospitality", "commercial kitchen"] },
    { labels: ["Warehouse", "Storage Area"], words: ["warehouse", "storage"] },
    { labels: ["Structural Work"], words: ["structural", "beam", "load-bearing", "collapse"] },
    { labels: ["Exterior Lighting"], words: ["exterior light", "outdoor lighting", "pot lights outside"] },
  ];

  const EMERGENCY_RE = /\b(flood(?:ing)?|burst pipe|gas leak|active leak|water everywhere|ceiling cav(?:e|ing)|collaps(?:e|ing)|sparking|live wire|smoke damage|fire damage|sewage backup|no heat)\b/i;
  const URGENT_RE = /\b(leak(?:ing)?|water damage|roof damage|electrical (?:issue|problem|fault)|no power|broken (?:pipe|window|furnace)|mould|mold|structural|crack(?:s|ed)?|not working|needs inspection)\b/i;

  const blank = () => ({
    location: "",
    property: "",
    area: "",
    description: "",
    priority: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    contactMethod: "Either",
    insight: null,
    step: 0,
    returnToReview: false,
    submitted: false,
    emailSent: false,
    sending: false,
  });

  let state = blank();
  let root;
  let panel;
  let bodyEl;
  let lastFocus;

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function persist() {
    try {
      sessionStorage.setItem(STORE, JSON.stringify(state));
    } catch {
      /* private mode */
    }
  }

  function restore() {
    try {
      const raw = sessionStorage.getItem(STORE);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved.submitted) {
        state = blank();
        persist();
        return;
      }
      state = { ...blank(), ...saved, submitted: false, sending: false };
    } catch {
      state = blank();
    }
  }

  function areaSet() {
    return AREAS[state.location]?.[state.property];
  }

  function analyze(text) {
    const hay = text.toLowerCase();
    const available = (areaSet()?.options || []).map(([label]) => label);
    const scores = new Map();

    HINTS.forEach((hint) => {
      const hits = hint.words.filter((word) => hay.includes(word)).length;
      if (!hits) return;
      hint.labels.forEach((label) => {
        scores.set(label, (scores.get(label) || 0) + hits);
      });
    });

    const ranked = [...scores.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([label, score]) => ({
        label,
        score,
        inScope: available.includes(label),
      }));

    let suggestedPriority = "";
    if (EMERGENCY_RE.test(text)) suggestedPriority = "Emergency";
    else if (URGENT_RE.test(text)) suggestedPriority = "Urgent";

    const bestInScope = ranked.find((item) => item.inScope);
    const bestAny = ranked[0];
    const trades = new Set([
      "Plumbing",
      "Electrical",
      "HVAC",
      "Roofing",
      "Commercial Roofing",
      "Foundation Repair",
      "Foundation",
      "Structural Work",
      "Framing",
    ]);
    const mismatch =
      bestInScope && state.area && bestInScope.label !== state.area && bestInScope.score >= 1
        ? bestInScope
        : ranked.find((item) => item.inScope && item.label !== state.area && trades.has(item.label) && item.score >= 1) ||
          null;
    const otherTrack =
      !mismatch && bestAny && !bestAny.inScope && bestAny.score >= 2 ? bestAny : null;

    const notes = [];
    if (suggestedPriority === "Emergency") {
      notes.push(
        "Some of the wording you used can indicate a time-sensitive issue. If there is immediate danger to people or property, contact emergency services. Our team will review the request — we cannot guarantee an immediate on-site response.",
      );
    } else if (suggestedPriority === "Urgent") {
      notes.push(
        "This sounds like it may need prompt attention. You can choose Standard, Urgent, or Emergency. We do not diagnose the cause from a description alone.",
      );
    }

    return { mismatch, otherTrack, suggestedPriority, notes };
  }

  function iconWrap(name) {
    return `<span class="iq-ico">${svg(name)}</span>`;
  }

  function progressMarkup() {
    const current = Math.min(state.step, STEPS.length - 1);
    const done = state.submitted ? STEPS.length : current;
    return `
      <div class="iq-progress" role="progressbar" aria-valuemin="0" aria-valuemax="${STEPS.length}" aria-valuenow="${done + 1}" aria-label="Inquiry progress">
        ${STEPS.map((_, i) => `<span class="${i <= done ? "is-on" : ""}"></span>`).join("")}
      </div>
      <p class="iq-step-label">${state.submitted ? "Request received" : `Step ${current + 1} of ${STEPS.length}`}</p>`;
  }

  function choice(value, title, text, icon, selected) {
    return `
      <button type="button" class="iq-card ${selected ? "is-on" : ""}" data-value="${esc(value)}">
        ${iconWrap(icon)}
        <span>
          <strong>${esc(title)}</strong>
          ${text ? `<em>${esc(text)}</em>` : ""}
        </span>
      </button>`;
  }

  function gridChoice(label, icon, selected) {
    return `
      <button type="button" class="iq-tile ${selected ? "is-on" : ""}" data-value="${esc(label)}">
        ${iconWrap(icon)}
        <strong>${esc(label)}</strong>
      </button>`;
  }

  function renderLocation() {
    return `
      <p class="iq-ask">Where is the work needed?</p>
      <p class="iq-hint">One question at a time. You can go back and change any answer.</p>
      <div class="iq-stack" data-pick="location">
        ${choice("Interior", "Interior Work", "Work inside the building, including rooms, systems, and interior renovations.", "interior", state.location === "Interior")}
        ${choice("Exterior", "Exterior Work", "Work outside the building, including the structure, property, and outdoor areas.", "exterior", state.location === "Exterior")}
      </div>`;
  }

  function renderProperty() {
    return `
      <p class="iq-ask">What type of property is this?</p>
      <div class="iq-stack" data-pick="property">
        ${choice("Residential", "Residential", "Homes, apartments, condos, townhouses, and other residential properties.", "residential", state.property === "Residential")}
        ${choice("Commercial", "Commercial", "Offices, retail stores, restaurants, warehouses, buildings, and commercial spaces.", "commercial", state.property === "Commercial")}
      </div>`;
  }

  function renderArea() {
    const set = areaSet();
    if (!set) {
      return `<p class="iq-ask">Please go back and choose interior or exterior, then the property type.</p>`;
    }
    return `
      <p class="iq-ask">${esc(set.question)}</p>
      <div class="iq-grid" data-pick="area">
        ${set.options.map(([label, icon]) => gridChoice(label, icon, state.area === label)).join("")}
      </div>`;
  }

  function renderDescribe() {
    const insight = state.insight;
    let extra = "";
    if (insight) {
      extra = `<div class="iq-insight" role="status">`;
      if (insight.mismatch) {
        extra += `<p>Your notes also sound related to <strong>${esc(insight.mismatch.label)}</strong>. You selected <strong>${esc(state.area)}</strong>. That can be right if both apply — or you can switch the category.</p>
          <div class="iq-insight-actions">
            <button type="button" class="iq-mini" data-switch-area="${esc(insight.mismatch.label)}">Switch to ${esc(insight.mismatch.label)}</button>
            <button type="button" class="iq-mini is-quiet" data-keep-area>Keep ${esc(state.area)}</button>
          </div>`;
      } else if (insight.otherTrack) {
        extra += `<p>This description may fit a different category than the list you used. We will still send it as <strong>${esc(state.area)}</strong>. Add any extra detail below if that helps our team.</p>`;
      }
      insight.notes.forEach((note) => {
        extra += `<p>${esc(note)}</p>`;
      });
      extra += `</div>`;
    }
    return `
      <p class="iq-ask">Tell us more about the work you need.</p>
      <p class="iq-hint">A short description is enough. We use it to brief the team — not to diagnose the problem or quote a price.</p>
      <label class="iq-sr" for="iq-desc">Project description</label>
      <textarea class="field iq-desc" id="iq-desc" rows="5" maxlength="2000" placeholder="Please describe the project, issue, damage, repair, renovation, or improvements you need. Include as much detail as possible.">${esc(state.description)}</textarea>
      ${extra}`;
  }

  function renderPriority() {
    const emergencyNote =
      state.priority === "Emergency"
        ? `<p class="iq-warn">If there is an immediate danger to people or property, please contact emergency services or the appropriate emergency service provider. Submitting this request does not guarantee that a contractor will be available immediately.</p>`
        : "";
    const notes = (state.insight?.notes || []).map((note) => `<p class="iq-hint">${esc(note)}</p>`).join("");
    const tip =
      !notes &&
      state.insight?.suggestedPriority &&
      state.insight.suggestedPriority !== state.priority
        ? `<p class="iq-hint">From your description, <strong>${esc(state.insight.suggestedPriority)}</strong> may be a better fit — the choice is yours.</p>`
        : "";
    return `
      <p class="iq-ask">How soon do you need this addressed?</p>
      ${notes}${tip}
      <div class="iq-stack" data-pick="priority">
        ${choice("Standard", "Standard", "This is a planned project or can be scheduled normally.", "standard", state.priority === "Standard")}
        ${choice("Urgent", "Urgent", "I need assistance as soon as possible.", "urgent", state.priority === "Urgent")}
        ${choice("Emergency", "Emergency", "There is an immediate issue that may require immediate attention.", "emergency", state.priority === "Emergency")}
      </div>
      ${emergencyNote}`;
  }

  function renderTimeline() {
    const options = [
      ["As soon as possible", "soon"],
      ["Within 1 month", "month"],
      ["Within 1–3 months", "month"],
      ["Within 3–6 months", "month"],
      ["Just planning / exploring options", "planning"],
    ];
    return `
      <p class="iq-ask">When would you ideally like the work to begin?</p>
      <p class="iq-hint">This helps us plan. It is not a booking or a completion date.</p>
      <div class="iq-stack" data-pick="timeline">
        ${options.map(([label, icon]) => choice(label, label, "", icon, state.timeline === label)).join("")}
      </div>`;
  }

  function renderContact() {
    return `
      <p class="iq-ask">How should we reach you?</p>
      <p class="iq-hint">We visit the job site by phone appointment. Phone is the best way to confirm.</p>
      <form class="iq-form" id="iq-contact-form">
        <label>Full Name<input class="field" name="name" autocomplete="name" required value="${esc(state.name)}"></label>
        <label>Phone Number<input class="field" name="phone" type="tel" autocomplete="tel" required value="${esc(state.phone)}"></label>
        <label>Email Address<input class="field" name="email" type="email" autocomplete="email" required value="${esc(state.email)}"></label>
        <label>Property Address or Project Location<input class="field" name="address" autocomplete="street-address" required value="${esc(state.address)}"></label>
        <p class="iq-label">Preferred Contact Method <span class="hint">(optional)</span></p>
        <div class="iq-pills" data-pick="contactMethod">
          ${["Phone", "Email", "Either"]
            .map(
              (method) =>
                `<button type="button" class="iq-pill ${state.contactMethod === method ? "is-on" : ""}" data-value="${method}">${method}</button>`,
            )
            .join("")}
        </div>
      </form>`;
  }

  function row(label, value, step) {
    return `
      <button type="button" class="iq-row" data-jump="${step}">
        <span>${esc(label)}</span>
        <strong>${esc(value || "—")}</strong>
      </button>`;
  }

  function renderReview() {
    return `
      <p class="iq-ask">Project Request Summary</p>
      <p class="iq-hint">Tap any row to change it.</p>
      <div class="iq-summary">
        ${row("Work Location", state.location, 0)}
        ${row("Property Type", state.property, 1)}
        ${row("Area", state.area, 2)}
        ${row("Project Description", state.description, 3)}
        ${row("Priority", state.priority, 4)}
        ${row("Timeline", state.timeline, 5)}
        ${row("Name", state.name, 6)}
        ${row("Phone", state.phone, 6)}
        ${row("Email", state.email, 6)}
        ${row("Project location", state.address, 6)}
        ${row("Preferred contact", state.contactMethod, 6)}
      </div>`;
  }

  function renderThanks() {
    return `
      <div class="iq-thanks">
        <h3 class="iq-ask">Thank You!</h3>
        <p>Your project request has been received. Our team will review the details and contact you as soon as possible.</p>
        <p class="iq-hint">For a faster appointment, call <a href="${PHONE_HREF}">${PHONE}</a>. Site visits are booked by phone.${state.emailSent ? ` A copy of this request was sent to our team.` : ` You can also send the details to <a href="${mailtoHref()}">${EMAIL}</a>.`}</p>
        <a class="btn" href="${PHONE_HREF}">Call ${PHONE}</a>
        ${state.emailSent ? "" : `<a class="iq-mini is-quiet" href="${mailtoHref()}">Email this request</a>`}
        <button type="button" class="iq-mini is-quiet" data-reset>Start another inquiry</button>
      </div>`;
  }

  function footMarkup() {
    if (state.submitted) return "";
    const step = STEPS[state.step];
    const showBack = state.step > 0;
    const needsGo =
      step === "describe" ||
      step === "contact" ||
      step === "review" ||
      (step === "priority" && state.priority === "Emergency");
    let goLabel = "Continue";
    if (step === "review") goLabel = "Request a Consultation →";
    if (step === "describe") goLabel = "Continue";
    return `
      <div class="iq-foot">
        <div class="iq-foot-left">
          ${showBack ? `<button type="button" class="iq-back" data-back>Back</button>` : ""}
          ${step === "review" ? `<button type="button" class="iq-text-btn" data-edit>Edit information</button>` : ""}
        </div>
        ${
          needsGo
            ? `<button type="button" class="btn iq-go" data-go>${goLabel}</button>`
            : `<span class="iq-foot-hint">Select an option to continue</span>`
        }
      </div>`;
  }

  function render() {
    if (!bodyEl) return;
    const headProg = root.querySelector(".iq-head-prog");
    if (headProg) headProg.innerHTML = progressMarkup();

    if (state.submitted) {
      bodyEl.innerHTML = renderThanks();
      root.querySelector(".iq-foot-slot").innerHTML = "";
      return;
    }

    const views = {
      location: renderLocation,
      property: renderProperty,
      area: renderArea,
      describe: renderDescribe,
      priority: renderPriority,
      timeline: renderTimeline,
      contact: renderContact,
      review: renderReview,
    };
    const view = views[STEPS[state.step]];
    bodyEl.innerHTML = view ? view() : "";
    root.querySelector(".iq-foot-slot").innerHTML = footMarkup();
    bodyEl.scrollTop = 0;

    const first = bodyEl.querySelector("textarea, input, .iq-card, .iq-tile");
    if (first && panel.classList.contains("is-open")) {
      try {
        first.focus({ preventScroll: true });
      } catch {
        /* ignore */
      }
    }
  }

  function goTo(index, opts = {}) {
    state.step = Math.max(0, Math.min(STEPS.length - 1, index));
    persist();
    if (opts.instant) {
      render();
      return;
    }
    bodyEl.classList.add("is-leave");
    window.setTimeout(() => {
      render();
      bodyEl.classList.remove("is-leave");
    }, 140);
  }

  function afterPick() {
    if (state.returnToReview) {
      state.returnToReview = false;
      goTo(STEPS.indexOf("review"));
      return;
    }
    goTo(state.step + 1);
  }

  function pick(field, value) {
    state[field] = value;
    if (field === "location" || field === "property") {
      const set = areaSet();
      if (set && !set.options.some(([label]) => label === state.area)) state.area = "";
    }
    persist();
    render();
    if (field === "priority" && value === "Emergency") return;
    if (field === "contactMethod") return;
    window.setTimeout(afterPick, 180);
  }

  function continueFromDescribe() {
    const text = (bodyEl.querySelector("#iq-desc")?.value || "").trim();
    if (text.length < 4) {
      bodyEl.querySelector("#iq-desc")?.focus();
      bodyEl.querySelector("#iq-desc")?.classList.add("is-invalid");
      return;
    }
    state.description = text;
    const insightVisible = Boolean(bodyEl.querySelector(".iq-insight"));
    if (insightVisible) {
      persist();
      if (state.returnToReview) {
        state.returnToReview = false;
        goTo(STEPS.indexOf("review"));
        return;
      }
      goTo(state.step + 1);
      return;
    }
    state.insight = analyze(text);
    persist();
    if (state.returnToReview) {
      state.returnToReview = false;
      goTo(STEPS.indexOf("review"));
      return;
    }
    if (state.insight.mismatch) {
      render();
      return;
    }
    goTo(state.step + 1);
  }

  function continueFromContact() {
    const form = bodyEl.querySelector("#iq-contact-form");
    if (!form) return;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const address = String(data.get("address") || "").trim();
    if (!form.reportValidity()) return;
    if (name.length < 2 || phone.length < 7 || !email.includes("@") || address.length < 4) {
      form.reportValidity();
      return;
    }
    state.name = name;
    state.phone = phone;
    state.email = email;
    state.address = address;
    persist();
    if (state.returnToReview) {
      state.returnToReview = false;
      goTo(STEPS.indexOf("review"));
      return;
    }
    goTo(state.step + 1);
  }

  function summaryText() {
    return [
      `Project request — ${state.area || "General"} (${state.priority || "Standard"})`,
      "",
      `Work location: ${state.location}`,
      `Property type: ${state.property}`,
      `Area: ${state.area}`,
      `Priority: ${state.priority}`,
      `Timeline: ${state.timeline}`,
      "",
      "Description:",
      state.description,
      "",
      `Name: ${state.name}`,
      `Phone: ${state.phone}`,
      `Email: ${state.email}`,
      `Project location: ${state.address}`,
      `Preferred contact: ${state.contactMethod}`,
    ].join("\n");
  }

  function mailtoHref() {
    const subject = encodeURIComponent(
      `Project inquiry — ${state.area} — ${state.priority} — ${state.name}`,
    );
    const body = encodeURIComponent(summaryText());
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  async function submit() {
    if (state.sending || state.submitted) return;
    state.sending = true;
    persist();
    const go = root.querySelector("[data-go]");
    if (go) {
      go.disabled = true;
      go.textContent = "Sending…";
    }
    const payload = {
      _subject: `Project inquiry — ${state.area} — ${state.priority} — ${state.name}`,
      name: state.name,
      email: state.email,
      phone: state.phone,
      address: state.address,
      workLocation: state.location,
      propertyType: state.property,
      area: state.area,
      priority: state.priority,
      timeline: state.timeline,
      preferredContact: state.contactMethod,
      message: state.description,
    };
    const send = window.sendInquiryEmail;
    state.emailSent = send ? await send(payload) : false;
    state.submitted = true;
    persist();
    render();
  }

  function open() {
    lastFocus = document.activeElement;
    panel.classList.add("is-open");
    panel.classList.remove("hidden");
    root.querySelector(".iq-launch")?.setAttribute("aria-expanded", "true");
    document.body.classList.add("iq-lock");
    if (location.hash !== "#inquiry") {
      history.replaceState(null, "", `${location.pathname}${location.search}#inquiry`);
    }
    render();
  }

  function close() {
    panel.classList.remove("is-open");
    panel.classList.add("hidden");
    root.querySelector(".iq-launch")?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("iq-lock");
    if (location.hash === "#inquiry") {
      history.replaceState(null, "", `${location.pathname}${location.search}`);
    }
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function reset() {
    state = blank();
    persist();
    render();
  }

  function onPanelClick(event) {
    const t = event.target.closest("[data-value], [data-back], [data-go], [data-jump], [data-edit], [data-reset], [data-switch-area], [data-keep-area], [data-close]");
    if (!t) return;

    if (t.dataset.close !== undefined) {
      close();
      return;
    }
    if (t.dataset.back !== undefined) {
      if (STEPS[state.step] === "describe") {
        const live = bodyEl.querySelector("#iq-desc");
        if (live) state.description = live.value;
      }
      goTo(state.step - 1);
      return;
    }
    if (t.dataset.edit !== undefined) {
      state.returnToReview = false;
      goTo(0);
      return;
    }
    if (t.dataset.reset !== undefined) {
      reset();
      return;
    }
    if (t.dataset.jump !== undefined) {
      state.returnToReview = true;
      goTo(Number(t.dataset.jump));
      return;
    }
    if (t.dataset.switchArea !== undefined) {
      state.area = t.dataset.switchArea;
      if (state.insight) state.insight.mismatch = null;
      persist();
      if (state.returnToReview) {
        state.returnToReview = false;
        goTo(STEPS.indexOf("review"));
      } else {
        goTo(state.step + 1);
      }
      return;
    }
    if (t.dataset.keepArea !== undefined) {
      if (state.insight) state.insight.mismatch = null;
      persist();
      goTo(state.step + 1);
      return;
    }
    if (t.dataset.go !== undefined) {
      const step = STEPS[state.step];
      if (step === "describe") continueFromDescribe();
      else if (step === "contact") continueFromContact();
      else if (step === "review") submit();
      else if (step === "priority") afterPick();
      return;
    }
    if (t.dataset.value !== undefined) {
      const pack = t.closest("[data-pick]");
      const field = pack?.dataset.pick;
      if (field) pick(field, t.dataset.value);
    }
  }

  function mount() {
    if (document.querySelector(".iq-wrap")) return;
    restore();
    root = document.createElement("div");
    root.className = "iq-wrap";
    root.innerHTML = `
      <div class="iq-panel hidden" id="iq-panel" role="dialog" aria-modal="true" aria-labelledby="iq-title">
        <div class="iq-head">
          <div>
            <p class="kicker">OCR Design</p>
            <h2 id="iq-title">Project inquiry</h2>
          </div>
          <button type="button" class="iq-x" data-close aria-label="Close inquiry">Close</button>
        </div>
        <div class="iq-head-prog"></div>
        <div class="iq-body" id="iq-body"></div>
        <div class="iq-foot-slot"></div>
      </div>
      <button type="button" class="iq-launch" aria-expanded="false" aria-controls="iq-panel">
        <span class="iq-launch-ico">${svg("chat")}</span>
        <span>Project inquiry</span>
      </button>`;
    document.body.appendChild(root);
    panel = root.querySelector("#iq-panel");
    bodyEl = root.querySelector("#iq-body");

    root.querySelector(".iq-launch").addEventListener("click", () => {
      if (panel.classList.contains("is-open")) close();
      else open();
    });
    panel.addEventListener("click", onPanelClick);
    panel.addEventListener("submit", (event) => {
      event.preventDefault();
      if (STEPS[state.step] === "contact") continueFromContact();
    });
    panel.addEventListener("input", (event) => {
      if (event.target.id === "iq-desc") {
        event.target.classList.remove("is-invalid");
        state.description = event.target.value;
      }
    });

    document.addEventListener("click", (event) => {
      const opener = event.target.closest("[data-open-inquiry], a[href='#inquiry']");
      if (!opener) return;
      event.preventDefault();
      open();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("is-open")) {
        if (event.target.tagName === "TEXTAREA") return;
        close();
      }
    });

    window.addEventListener("hashchange", () => {
      if (location.hash === "#inquiry") open();
    });

    render();
    if (location.hash === "#inquiry") open();
  }

  window.OCRInquiry = { mount, open, close, reset };
})();
