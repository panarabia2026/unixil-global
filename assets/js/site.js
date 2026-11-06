/* Unixil Global — shared layout, content and behaviour. */
(() => {
  const ART = window.UNIXIL_ART;
  const chev = '<svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>';
  const CONTACT = { email: 'info@unixil.com', tel: '+971 4 328821', telHref: '+9714328821', company: 'Unixil Global FZCO' };

  const ICON = {
    instrumentation: '<circle cx="12" cy="13" r="8"/><path d="M12 13l4-3M7 18h10M12 5V3"/>',
    electrical: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    telecom: '<path d="M12 10v12M8 22l4-12 4 12M7 6a7 7 0 0 1 10 0M4 3a11 11 0 0 1 16 0"/><circle cx="12" cy="9" r="1.5"/>',
    mechanical: '<path d="M2 16L14 4M10 20L22 8M2 16l8 4M14 4l8 4M5 14.5l8 4M8 12.5l8 4M11 10.5l8 4"/>',
    hazardous: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 8v5M12 16h.01"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    shield: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    cog: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c1-4 4-6 7-6s6 2 7 6M16 4.5a3.5 3.5 0 0 1 0 7M19 14c1.6.8 2.6 2.8 3 6"/>',
    leaf: '<path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16zM4 20l8-8"/>',
    check: '<path d="M4 12l5 5L20 6"/>',
    box: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
  };
  const icon = (n, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n] || ''}</svg>`;

  const DIVISIONS = [
    { id: 'instrumentation', name: 'Instrumentation', short: 'Instrumentation & Control',
      blurb: 'Field instruments, tubing, fittings and instrument cabling — supplied, installed and loop-checked for reliable process control.',
      scope: ['Pressure, flow, level & temperature instruments', 'Control & isolation valves', 'Instrument tubing & compression fittings', 'Instrument & control cables', 'Calibration & loop checking', 'Installation & commissioning'] },
    { id: 'electrical', name: 'Electrical', short: 'Electrical Systems',
      blurb: 'Power distribution from source to load: cables, glands, panels, lighting and earthing for industrial and commercial facilities.',
      scope: ['LV / MV power & control cables', 'Cable glands & termination accessories', 'Distribution boards & MCC panels', 'Industrial & Ex-rated lighting', 'Earthing & lightning protection', 'Installation, testing & inspection'] },
    { id: 'telecom', name: 'Telecom', short: 'Telecom & ELV',
      blurb: 'Communication and safety systems that keep sites connected — from fiber backbones to CCTV, PA/GA and radio infrastructure.',
      scope: ['Fiber optic & structured cabling', 'CCTV & access control', 'Public address & general alarm (PA/GA)', 'Radio & telecom tower infrastructure', 'Network & ELV integration', 'Testing & certification'] },
    { id: 'mechanical', name: 'Mechanical', short: 'Mechanical & GRP',
      blurb: 'Corrosion-resistant GRP cable management and mechanical support systems built for harsh, coastal and chemical environments.',
      scope: ['GRP ladder cable trays', 'GRP perforated & solid-bottom trays', 'Covers, bends, tees & fittings', 'GRP strut channel & supports', 'GRP gratings & handrails', 'Pipe & equipment supports'] },
    { id: 'hazardous', name: 'Hazardous Area', short: 'Hazardous Area Equipment',
      blurb: 'Junction boxes, enclosures and control stations for explosive atmospheres — specified for Zone 1 and Zone 2 installations.',
      scope: ['Ex e / Ex d / Ex ia junction boxes', 'GRP, SS316 & aluminium enclosures', 'Local control stations', 'Ex cable glands & accessories', 'Ex lighting fixtures', 'Custom-built Ex assemblies'] },
  ];

  const INDUSTRIES = [
    { id: 'oil-gas', name: 'Oil & Gas', note: 'Upstream, midstream & downstream facilities' },
    { id: 'petrochemical', name: 'Petrochemical & Refining', note: 'Process plants in classified hazardous areas' },
    { id: 'power', name: 'Power & Utilities', note: 'Generation, substations & distribution' },
    { id: 'marine', name: 'Marine & Offshore', note: 'Platforms, vessels & coastal terminals' },
    { id: 'water', name: 'Water & Wastewater', note: 'Treatment, desalination & pumping stations' },
    { id: 'infrastructure', name: 'Infrastructure & Construction', note: 'Industrial buildings, transport & smart cities' },
    { id: 'data', name: 'Telecom & Data', note: 'Networks, towers & data facilities' },
  ];

  const PRODUCTS = [
    { d: 'mechanical', art: 'ladder', name: 'GRP Ladder Cable Trays', desc: 'Lightweight, non-conductive and corrosion-free ladder trays for heavy cable runs.', pts: ['Widths 150–900 mm, multiple side-rail heights', 'UV-stabilised, fire-retardant resin systems', 'Bends, tees, risers & reducers'] },
    { d: 'mechanical', art: 'perforated', name: 'GRP Perforated & Solid Trays', desc: 'Ventilated or solid-bottom GRP trays for instrument and control cabling.', pts: ['Perforated or solid base', 'Snap-on and bolted covers', 'Ideal for coastal & chemical sites'] },
    { d: 'mechanical', art: 'channel', name: 'GRP Strut & Support Systems', desc: 'Channel, brackets and hangers to support trays, conduits and equipment.', pts: ['GRP & stainless steel options', 'Cantilever arms & hold-down clamps', 'Non-magnetic, maintenance-free'] },
    { d: 'mechanical', art: 'grating', name: 'GRP Gratings & Handrails', desc: 'Anti-slip moulded and pultruded gratings for walkways and platforms.', pts: ['Moulded & pultruded gratings', 'Handrail & ladder systems', 'Fire-retardant, high load capacity'] },
    { d: 'hazardous', art: 'jbGrp', name: 'GRP Ex Junction Boxes', desc: 'Increased-safety (Ex e) and intrinsically safe (Ex ia) terminal boxes in GRP.', pts: ['Zone 1 & Zone 2 applications', 'High ingress protection ratings', 'Configured terminals & glands'] },
    { d: 'hazardous', art: 'jbSs', name: 'Stainless Steel Ex Enclosures', desc: 'SS316 junction boxes and enclosures for offshore and corrosive environments.', pts: ['Electropolished SS316', 'Ex e, Ex ia and Ex d options', 'Custom drilling & assembly'] },
    { d: 'hazardous', art: 'station', name: 'Ex Local Control Stations', desc: 'Push-button, selector and indicator stations for motors and process equipment.', pts: ['Start / stop / E-stop configurations', 'GRP or stainless steel housings', 'Pilot lights & ammeters'] },
    { d: 'hazardous', art: 'gland', name: 'Ex Cable Glands', desc: 'Certified glands and accessories for armoured and unarmoured cables.', pts: ['Brass, nickel-plated & SS options', 'Barrier and compound glands', 'Shrouds, locknuts & earth tags'] },
    { d: 'hazardous', art: 'light', name: 'Ex Lighting', desc: 'Explosion-protected LED luminaires and floodlights for hazardous areas.', pts: ['Linear, well-glass & flood fittings', 'Emergency variants', 'Low-maintenance LED'] },
    { d: 'instrumentation', art: 'gauge', name: 'Pressure & Temperature Gauges', desc: 'Process gauges, thermometers and accessories for local indication.', pts: ['Bourdon, diaphragm & bimetal types', 'Glycerine-filled for vibration', 'Siphons, snubbers & manifolds'] },
    { d: 'instrumentation', art: 'transmitter', name: 'Transmitters & Field Instruments', desc: 'Pressure, flow, level and temperature transmitters from approved makers.', pts: ['4–20 mA, HART & fieldbus', 'Hazardous-area certified versions', 'Supply, install & loop check'] },
    { d: 'instrumentation', art: 'valve', name: 'Valves & Manifolds', desc: 'Instrument valves, ball valves and manifolds for isolation and control.', pts: ['Needle, ball & check valves', '2-, 3- and 5-valve manifolds', 'SS316 and alloy materials'] },
    { d: 'instrumentation', art: 'tubing', name: 'Tubing & Compression Fittings', desc: 'Seamless instrument tubing with twin-ferrule fittings and supports.', pts: ['SS316 seamless tubing', 'Twin-ferrule compression fittings', 'Tube trays & clamps'] },
    { d: 'electrical', art: 'drum', name: 'Power, Control & Instrument Cables', desc: 'LV/MV, armoured, fire-resistant and instrumentation cables to project specs.', pts: ['XLPE / PVC / LSZH insulation', 'Armoured & fire-resistant types', 'Cut-to-length supply'] },
    { d: 'electrical', art: 'panel', name: 'Distribution Boards & MCC Panels', desc: 'Panels designed, built and tested for industrial power distribution.', pts: ['LV switchboards & MCCs', 'Ex-rated distribution boards', 'Factory acceptance testing'] },
    { d: 'electrical', art: 'earthing', name: 'Earthing & Lightning Protection', desc: 'Complete earthing and lightning protection systems for plants and structures.', pts: ['Earth rods, bars & pits', 'Air terminals & down conductors', 'Testing & certification'] },
    { d: 'telecom', art: 'fiber', name: 'Fiber Optic & Structured Cabling', desc: 'Backbone and horizontal cabling, termination, splicing and testing.', pts: ['Armoured outdoor fiber', 'Patch panels & cabinets', 'OTDR testing & reports'] },
    { d: 'telecom', art: 'cctv', name: 'CCTV & Security Systems', desc: 'Surveillance and access control for industrial and hazardous sites.', pts: ['Ex-rated & standard cameras', 'NVR / VMS integration', 'Access control & intercom'] },
    { d: 'telecom', art: 'speaker', name: 'PA/GA & Radio Systems', desc: 'Public address, general alarm and radio communication infrastructure.', pts: ['Ex horn speakers & beacons', 'Amplifier & control racks', 'Radio towers & antennas'] },
  ];

  const PAGES = [['index.html', 'Home'], ['solutions.html', 'Solutions'], ['products.html', 'Products'], ['industries.html', 'Industries'], ['about.html', 'About'], ['contact.html', 'Contact']];
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHere = (h) => h === here;

  /* ---------- Header & footer ---------- */
  function header() {
    const top = document.createElement('div');
    top.className = 'topbar';
    top.innerHTML = `<div class="container">
      <div class="tb-left"><a href="tel:${CONTACT.telHref}">${CONTACT.tel}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>
      <div class="tb-right"><span class="regions">UAE · USA · India · China</span></div></div>`;
    const nav = document.createElement('header');
    nav.className = 'nav';
    nav.innerHTML = `<div class="container nav-inner">
        <a class="brand" href="index.html" aria-label="Unixil Global home"><img src="assets/img/unixil-logo.png" alt="Unixil" width="186" height="56" /></a>
        <nav class="nav-links" aria-label="Primary">${PAGES.slice(1).map(([h, t]) => `<a href="${h}"${isHere(h) ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
        <div class="nav-cta"><a class="btn btn-primary" href="contact.html#enquiry">Send enquiry ${chev}</a></div>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>
      </div>
      <div class="mobile-menu" id="mobile-menu" hidden>
        ${PAGES.map(([h, t]) => `<a href="${h}"${isHere(h) ? ' aria-current="page"' : ''}>${t}<span aria-hidden="true">›</span></a>`).join('')}
        <a class="btn btn-primary" href="contact.html#enquiry">Send enquiry ${chev}</a>
      </div>`;
    const skip = Object.assign(document.createElement('a'), { className: 'skip', href: '#main', textContent: 'Skip to content' });
    document.body.prepend(skip, top, nav);

    const toggle = nav.querySelector('.nav-toggle'), menu = nav.querySelector('.mobile-menu');
    const set = (open) => { toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); menu.hidden = !open; };
    toggle.addEventListener('click', () => set(menu.hidden));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { set(false); toggle.focus(); } });
    window.addEventListener('resize', () => { if (innerWidth > 1140) set(false); });
    const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
    onScroll(); addEventListener('scroll', onScroll, { passive: true });
  }

  function footer() {
    const f = document.createElement('footer');
    f.className = 'footer';
    f.innerHTML = `<div class="container footer-top">
        <div><a class="brand" href="index.html"><img src="assets/img/unixil-logo-white.png" alt="Unixil" width="186" height="56" /></a>
          <p>Industrial technical solutions across instrumentation, electrical, telecom and mechanical — from a single, accountable partner.</p>
          <div class="footer-regions">UAE · USA · INDIA · CHINA</div></div>
        <div><h4>Solutions</h4>${DIVISIONS.map((d) => `<a href="solutions.html#${d.id}">${d.short}</a>`).join('')}</div>
        <div><h4>Company</h4><a href="about.html">About Unixil</a><a href="industries.html">Industries</a><a href="products.html">Product range</a><a href="about.html#hse">Quality &amp; HSE</a><a href="contact.html">Contact</a></div>
        <div><h4>Get in touch</h4><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><a href="tel:${CONTACT.telHref}">${CONTACT.tel}</a><a href="contact.html#enquiry">Send an enquiry</a></div>
      </div>
      <div class="footer-bottom"><div class="container"><span>© ${new Date().getFullYear()} ${CONTACT.company}. All rights reserved.</span><a href="#top">Back to top ↑</a></div></div>`;
    document.body.append(f);
    document.body.id = 'top';
  }

  /* ---------- Renderers ---------- */
  const $ = (s) => document.querySelector(s);
  const each = (s, fn) => document.querySelectorAll(s).forEach(fn);

  function render() {
    each('[data-hero-art]', (el) => { el.innerHTML = ART.hero(); });
    each('[data-div-art]', (el) => { const f = ART.DIV[el.dataset.divArt]; if (f) el.innerHTML = f(); });
    each('[data-icon]', (el) => { el.innerHTML = icon(el.dataset.icon); });
    each('[data-cta-hex]', (el) => { el.innerHTML = `<svg viewBox="0 0 120 120" fill="currentColor">${ART.hex(60, 60, 58)}</svg>`; });

    const bar = $('#disc-bar');
    if (bar) bar.innerHTML = DIVISIONS.map((d) => `<a href="solutions.html#${d.id}">${icon(d.id)}${d.name}</a>`).join('');

    const grid = $('#div-grid');
    if (grid) {
      grid.innerHTML = DIVISIONS.map((d, i) => `<a class="div-card reveal" style="--d:${(i % 3) * .07}s" href="solutions.html#${d.id}">
          <div class="div-art">${ART.DIV[d.id]()}<span class="div-num">0${i + 1}</span></div>
          <div class="div-body"><h3>${d.short}</h3><p>${d.blurb}</p><span class="link">Learn more ${chev}</span></div></a>`).join('') +
        `<div class="div-cta reveal" style="--d:.14s"><div><h3>One partner. Every discipline.</h3><p style="margin-top:14px">Tell us your scope — we'll engineer, source and deliver it end to end.</p></div><a class="btn" href="contact.html#enquiry">Start a project ${chev}</a></div>`;
    }

    const ind = $('#ind-list');
    if (ind) ind.innerHTML = INDUSTRIES.map((x) => `<li><a href="industries.html#${x.id}"><span class="chevs">&gt;&gt;</span>${x.name}<small>${x.note}</small></a></li>`).join('');

    const sols = $('#solutions');
    if (sols) {
      sols.innerHTML = DIVISIONS.map((d, i) => `<section class="sol" id="${d.id}">
          <div class="reveal"><span class="kicker">0${i + 1} — ${d.name}</span><h2>${d.short}</h2>
            <div class="prose"><p>${d.blurb}</p></div>
            <ul class="scope">${d.scope.map((s) => `<li>${s}</li>`).join('')}</ul>
            <div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-dark" href="products.html?d=${d.id}">View products ${chev}</a><a class="btn btn-line" href="contact.html?topic=${encodeURIComponent(d.short)}#enquiry">Enquire</a></div></div>
          <div class="sol-art reveal" style="--d:.1s">${ART.DIV[d.id]()}</div></section>`).join('');
    }
    const solNav = $('#sol-nav');
    if (solNav) {
      solNav.innerHTML = DIVISIONS.map((d) => `<a href="#${d.id}">${d.short}</a>`).join('');
      const links = [...solNav.querySelectorAll('a')];
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.hash === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
      DIVISIONS.forEach((d) => io.observe(document.getElementById(d.id)));
    }

    const pg = $('#prod-grid');
    if (pg) {
      const filter = $('#prod-filter');
      filter.innerHTML = `<button data-f="all" aria-pressed="true">All products</button>` + DIVISIONS.map((d) => `<button data-f="${d.id}" aria-pressed="false">${d.name}</button>`).join('');
      pg.innerHTML = PRODUCTS.map((p) => { const d = DIVISIONS.find((x) => x.id === p.d); return `<article class="prod" data-d="${p.d}">
          <div class="prod-art">${ART.PROD[p.art]()}</div>
          <div class="prod-body"><span class="prod-tag">${d.short}</span><h3>${p.name}</h3><p>${p.desc}</p>
          <ul>${p.pts.map((t) => `<li>${t}</li>`).join('')}</ul>
          <a class="link" href="contact.html?topic=${encodeURIComponent(p.name)}#enquiry">Request a quote ${chev}</a></div></article>`; }).join('');
      const apply = (f) => {
        filter.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === f)));
        pg.querySelectorAll('.prod').forEach((c) => { c.hidden = f !== 'all' && c.dataset.d !== f; });
        $('#prod-count').textContent = `${pg.querySelectorAll('.prod:not([hidden])').length} product lines`;
        history.replaceState(null, '', f === 'all' ? location.pathname : `?d=${f}`);
      };
      filter.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) apply(b.dataset.f); });
      const initial = new URLSearchParams(location.search).get('d');
      apply(DIVISIONS.some((d) => d.id === initial) ? initial : 'all');
    }

    const msg = $('#enquiry textarea');
    const topic = new URLSearchParams(location.search).get('topic');
    const disc = $('#enquiry select[name="discipline"]');
    if (disc) disc.innerHTML = DIVISIONS.map((d) => `<option>${d.short}</option>`).join('') + '<option>Multi-discipline project</option><option>Other</option>';
    if (msg && topic) {
      msg.value = `Enquiry regarding: ${topic}\n\n`;
      const d = DIVISIONS.find((x) => topic === x.short || PRODUCTS.some((p) => p.name === topic && p.d === x.id));
      if (d) disc.value = d.short;
    }
  }

  /* ---------- Behaviour ---------- */
  function reveals() {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(e.target);
    }), { threshold: .1, rootMargin: '0px 0px -40px 0px' });
    each('.reveal', (el) => io.observe(el));
  }
  function countUp(el) {
    const end = +el.dataset.count, t0 = performance.now();
    const step = (t) => { const p = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); else el.textContent = end; };
    requestAnimationFrame(step);
    setTimeout(() => { el.textContent = end; }, 1500);
  }
  function forms() {
    each('form[data-mailto]', (form) => {
      const note = form.querySelector('.form-note');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let ok = true;
        form.querySelectorAll('[required]').forEach((f) => { const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value)); f.classList.toggle('invalid', bad); if (bad) ok = false; });
        if (!ok) { note.textContent = 'Please complete the highlighted fields.'; form.querySelector('.invalid').focus(); return; }
        const data = [...new FormData(form)].filter(([, v]) => String(v).trim());
        const body = data.map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join('\n');
        location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Enquiry — ' + (form.elements.discipline ? form.elements.discipline.value : 'Unixil Global'))}&body=${encodeURIComponent(body)}`;
        note.textContent = 'Opening your email app with your enquiry…';
      });
      form.querySelectorAll('[required]').forEach((f) => f.addEventListener('input', () => f.classList.remove('invalid')));
    });
  }

  document.documentElement.classList.remove('no-js');
  header();
  footer();
  render();
  reveals();
  forms();
  addEventListener('load', () => {
    const t = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (t) setTimeout(() => t.scrollIntoView({ behavior: 'instant', block: 'start' }), 0);
  });
})();
