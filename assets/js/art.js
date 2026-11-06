/* Unixil Global illustration set — inline SVG so artwork stays crisp and on-brand. */
window.UNIXIL_ART = (() => {
  const O = '#ff3514', O2 = '#ff6a3d', BG = '#191d22', L1 = '#2e343b', L2 = '#454d56', L3 = '#9aa3ad', W = '#e9ecef';

  const hex = (cx, cy, r, attrs = '') => {
    const p = [...Array(6)].map((_, i) => { const a = Math.PI / 3 * i; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(' ');
    return `<polygon points="${p}" ${attrs}/>`;
  };
  const grid = (w, h, s = 40) => `<g stroke="${L1}" stroke-width="1" opacity=".55">${[...Array(Math.ceil(w / s))].map((_, i) => `<path d="M${i * s} 0V${h}"/>`).join('')}${[...Array(Math.ceil(h / s))].map((_, i) => `<path d="M0 ${i * s}H${w}"/>`).join('')}</g>`;
  const wrap = (vb, body, bg = BG) => `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true"><rect width="100%" height="100%" fill="${bg}"/>${body}</svg>`;

  /* ---------- Hero: process plant skyline ---------- */
  function hero() {
    const column = (x, w, h, base) => `<g><rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="${w / 2}" fill="#20252b" stroke="${L2}" stroke-width="2"/>
      ${[...Array(Math.floor(h / 60))].map((_, i) => `<path d="M${x - 6} ${base - h + 50 + i * 60}h${w + 12}" stroke="${L2}" stroke-width="3"/>`).join('')}
      <path d="M${x + w / 2} ${base - h}v-30" stroke="${L2}" stroke-width="3"/><circle class="blink" cx="${x + w / 2}" cy="${base - h - 34}" r="5" fill="${O}"/></g>`;
    const sphere = (cx, r, base) => `<g><path d="M${cx - r * .7} ${base}l${r * .2} -${r}M${cx + r * .7} ${base}l-${r * .2} -${r}M${cx} ${base}v-${r * .9}" stroke="${L2}" stroke-width="3"/>
      <circle cx="${cx}" cy="${base - r - r * .55}" r="${r}" fill="#20252b" stroke="${L2}" stroke-width="2"/><path d="M${cx - r} ${base - r - r * .55}h${r * 2}" stroke="${L2}" stroke-width="1.5"/></g>`;
    const tower = (x, base, h) => {
      let s = `<path d="M${x} ${base}L${x + 40} ${base - h}L${x + 80} ${base}" stroke="${L3}" stroke-width="2.5"/>`;
      for (let i = 1; i < 9; i++) { const y = base - h * i / 9, dx = 40 * (1 - i / 9); s += `<path d="M${x + 40 - dx} ${y}L${x + 40 + dx} ${y}" stroke="${L2}" stroke-width="1.5"/>`; if (i < 8) { const y2 = base - h * (i + 1) / 9, dx2 = 40 * (1 - (i + 1) / 9); s += `<path d="M${x + 40 - dx} ${y}L${x + 40 + dx2} ${y2}M${x + 40 + dx} ${y}L${x + 40 - dx2} ${y2}" stroke="${L1}" stroke-width="1.2"/>`; } }
      s += `<rect x="${x + 28}" y="${base - h * .82}" width="10" height="30" fill="${L3}"/><rect x="${x + 44}" y="${base - h * .82}" width="10" height="30" fill="${L3}"/>`;
      s += `<circle class="blink b2" cx="${x + 40}" cy="${base - h - 6}" r="6" fill="${O}"/>`;
      s += `<g stroke="${O2}" stroke-width="2" opacity=".7"><path d="M${x + 62} ${base - h + 20}a26 26 0 0 1 0 36"/><path d="M${x + 72} ${base - h + 10}a42 42 0 0 1 0 56"/><path d="M${x + 18} ${base - h + 20}a26 26 0 0 0 0 36"/><path d="M${x + 8} ${base - h + 10}a42 42 0 0 0 0 56"/></g>`;
      return s;
    };
    const base = 640;
    return `<svg viewBox="0 0 1600 800" preserveAspectRatio="xMaxYMid slice" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14171b"/><stop offset=".7" stop-color="#1d2228"/><stop offset="1" stop-color="#2a2420"/></linearGradient>
        <radialGradient id="glowO" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${O}" stop-opacity=".35"/><stop offset="1" stop-color="${O}" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1600" height="800" fill="url(#sky)"/>
      ${grid(1600, 800, 64)}
      <circle cx="1180" cy="520" r="360" fill="url(#glowO)" opacity=".5"/>
      <!-- far silhouettes -->
      <path d="M600 ${base}V560h40v-60h30v60h60v-30h50v30h40V470h30v170" fill="#1b1f24"/>
      ${column(900, 56, 330, base)}${column(980, 44, 250, base)}${column(1050, 70, 400, base)}
      ${sphere(1210, 64, base)}${sphere(1345, 52, base)}
      <!-- storage tank -->
      <g><rect x="1420" y="${base - 150}" width="170" height="150" fill="#20252b" stroke="${L2}" stroke-width="2"/><path d="M1420 ${base - 150}q85-30 170 0" stroke="${L2}" stroke-width="2" fill="#20252b"/>${[1, 2, 3, 4].map((i) => `<path d="M1420 ${base - 150 + i * 30}h170" stroke="${L1}"/>`).join('')}<path d="M1600 ${base - 160}l-30 0" stroke="${L2}"/></g>
      <!-- flare stack -->
      <g><path d="M1160 ${base}V250" stroke="${L3}" stroke-width="6"/><path d="M1140 ${base}l20-120 20 120" stroke="${L2}" stroke-width="2"/>
        <path class="flame" d="M1160 248c-18-20-6-44 0-64 6 20 22 30 10 52 8-6 10-14 10-22 8 18 0 30-20 34z" fill="${O}"/>
        <path class="flame" d="M1160 246c-8-10-2-22 0-30 4 10 10 16 4 26z" fill="#ffb199"/></g>
      ${tower(740, base, 380)}
      <!-- pipe rack with GRP ladder tray -->
      <g>
        <path d="M560 ${base - 70}H1600M560 ${base - 52}H1600" stroke="${L3}" stroke-width="3"/>
        ${[...Array(27)].map((_, i) => `<path d="M${570 + i * 38} ${base - 70}v18" stroke="${L2}" stroke-width="3"/>`).join('')}
        <path d="M560 ${base - 61}H1600" stroke="${O}" stroke-width="3" class="pulse-line"/>
        <path d="M560 ${base - 104}H1600" stroke="#3b434c" stroke-width="12"/><path d="M560 ${base - 124}H1600" stroke="#323941" stroke-width="10"/>
        ${[...Array(9)].map((_, i) => `<g><path d="M${600 + i * 120} ${base - 130}V${base}" stroke="${L3}" stroke-width="5"/><path d="M${560 + i * 120} ${base - 40}h${80}" stroke="${L2}" stroke-width="3"/></g>`).join('')}
      </g>
      <!-- junction box on rack -->
      <g><rect x="1290" y="${base - 46}" width="64" height="46" rx="4" fill="#262c33" stroke="${L3}" stroke-width="2"/>${hex(1322, base - 23, 12, `fill="${O}"`)}<text x="1322" y="${base - 19}" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="700" font-size="11" fill="#fff">Ex</text></g>
      <rect x="0" y="${base}" width="1600" height="${800 - base}" fill="#121519"/>
      <path d="M0 ${base}H1600" stroke="${L2}" stroke-width="2"/>
      <circle class="blink b3" cx="1050" cy="${base - 416}" r="5" fill="${O}"/>
    </svg>`;
  }

  /* ---------- Division artwork (dark) ---------- */
  const DIV = {
    instrumentation: () => wrap('0 0 800 500', `${grid(800, 500)}
      <path d="M0 330H800" stroke="${L2}" stroke-width="34"/><path d="M0 316H800" stroke="${L3}" stroke-width="2" opacity=".5"/>
      <path d="M150 330V250" stroke="${L3}" stroke-width="14"/><circle cx="150" cy="170" r="88" fill="#22272d" stroke="${L3}" stroke-width="8"/>
      <circle cx="150" cy="170" r="70" fill="${W}"/>
      ${[...Array(11)].map((_, i) => { const a = (-210 + i * 24) * Math.PI / 180; return `<path d="M${150 + 56 * Math.cos(a)} ${170 + 56 * Math.sin(a)}L${150 + 66 * Math.cos(a)} ${170 + 66 * Math.sin(a)}" stroke="${BG}" stroke-width="${i % 5 ? 2 : 4}"/>`; }).join('')}
      <path d="M150 170L196 140" stroke="${O}" stroke-width="6" stroke-linecap="round"/><circle cx="150" cy="170" r="9" fill="${BG}"/>
      <path d="M200 205a64 64 0 0 1-100 0" stroke="${O}" stroke-width="5" opacity=".9"/>
      <path d="M420 330V270" stroke="${L3}" stroke-width="12"/><rect x="360" y="150" width="120" height="120" rx="10" fill="#262c33" stroke="${L3}" stroke-width="3"/>
      <circle cx="420" cy="210" r="38" fill="#1b1f24" stroke="${L2}" stroke-width="3"/><rect x="396" y="196" width="48" height="26" rx="3" fill="#0f2a1f"/><text x="420" y="215" text-anchor="middle" font-family="monospace" font-size="16" fill="#3ee08f">12.6</text>
      <path d="M480 180h70v150" stroke="${L3}" stroke-width="6"/>
      <path d="M600 330V230h120" stroke="${L3}" stroke-width="6"/><rect x="690" y="200" width="60" height="60" fill="#262c33" stroke="${L3}" stroke-width="3"/><circle cx="720" cy="230" r="14" fill="${O}"/>
      <path d="M0 430H800" stroke="${O}" stroke-width="3" class="pulse-line"/>`),
    electrical: () => wrap('0 0 800 500', `${grid(800, 500)}
      <rect x="110" y="70" width="420" height="380" fill="#22272d" stroke="${L3}" stroke-width="4"/>
      <path d="M320 70v380" stroke="${L3}" stroke-width="3"/>
      ${[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((c) => `<rect x="${136 + c * 34}" y="${104 + r * 74}" width="22" height="46" rx="3" fill="#2f363e" stroke="${L2}"/><rect x="${141 + c * 34}" y="${(c + r) % 3 ? 112 : 128}" width="12" height="14" fill="${(c + r) % 4 ? W : O}" transform="translate(0 ${r * 74})"/>`).join('')).join('')}
      ${[0, 1, 2].map((i) => `<circle class="blink ${['', 'b2', 'b3'][i]}" cx="${360 + i * 50}" cy="116" r="11" fill="${['#3ee08f', O, '#ffd23f'][i]}"/>`).join('')}
      <rect x="350" y="160" width="150" height="70" rx="4" fill="#1b1f24" stroke="${L2}"/><path d="M360 210l20-28 20 18 20-30 20 22 20-12 20 16" stroke="#3ee08f" stroke-width="2.5"/>
      ${[0, 1, 2, 3].map((i) => `<rect x="352" y="${260 + i * 40}" width="146" height="24" rx="3" fill="#2f363e"/>`).join('')}
      <path d="M530 130h120v260" stroke="${L3}" stroke-width="10"/><path d="M530 170h90v220" stroke="${L2}" stroke-width="10"/><path d="M530 210h60v180" stroke="#5b636c" stroke-width="10"/>
      ${hex(660, 110, 46, `fill="${O}"`)}<path d="M666 82l-22 32h18l-8 26 26-36h-18z" fill="#fff"/>`),
    telecom: () => wrap('0 0 800 500', `${grid(800, 500)}
      <path d="M320 470L400 70L480 470" stroke="${L3}" stroke-width="5"/>
      ${[...Array(9)].map((_, i) => { const y = 470 - i * 44, dx = 80 * (1 - i * 44 / 400); const y2 = y - 44, dx2 = 80 * (1 - (i + 1) * 44 / 400); return `<path d="M${400 - dx} ${y}H${400 + dx}" stroke="${L2}" stroke-width="3"/><path d="M${400 - dx} ${y}L${400 + dx2} ${y2}M${400 + dx} ${y}L${400 - dx2} ${y2}" stroke="${L1}" stroke-width="2"/>`; }).join('')}
      <rect x="366" y="120" width="18" height="60" fill="${W}"/><rect x="416" y="120" width="18" height="60" fill="${W}"/><circle cx="440" cy="230" r="22" fill="${W}"/><circle cx="440" cy="230" r="10" fill="${L2}"/>
      <circle class="blink" cx="400" cy="62" r="9" fill="${O}"/>
      <g stroke="${O}" stroke-width="4" stroke-linecap="round"><path d="M470 110a60 60 0 0 1 0 80"/><path d="M500 86a100 100 0 0 1 0 128" opacity=".7"/><path d="M530 62a140 140 0 0 1 0 176" opacity=".4"/>
      <path d="M330 110a60 60 0 0 0 0 80"/><path d="M300 86a100 100 0 0 0 0 128" opacity=".7"/><path d="M270 62a140 140 0 0 0 0 176" opacity=".4"/></g>
      <path d="M0 440H300M500 440H800" stroke="${L2}" stroke-width="10"/><path d="M0 440H300M500 440H800" stroke="${O}" stroke-width="3" class="pulse-line"/>
      <rect x="600" y="370" width="130" height="70" fill="#262c33" stroke="${L3}" stroke-width="3"/>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${614 + i * 18}" y="392" width="10" height="10" fill="${i % 2 ? O : '#3ee08f'}"/>`).join('')}`),
    mechanical: () => wrap('0 0 800 500', `${grid(800, 500)}
      <g transform="translate(60 120)">
        <path d="M0 210L420 0" stroke="${L3}" stroke-width="10"/><path d="M260 330L680 120" stroke="${L3}" stroke-width="10"/>
        <path d="M0 210L0 250L260 370L260 330" fill="#2a3036" stroke="${L3}" stroke-width="3"/>
        <path d="M420 0L420 40L680 160L680 120" fill="#2a3036" stroke="${L3}" stroke-width="3" opacity=".6"/>
        ${[...Array(10)].map((_, i) => { const t = i / 9; return `<path d="M${t * 420} ${210 - t * 210}L${260 + t * 420} ${330 - t * 210}" stroke="${L2}" stroke-width="7"/>`; }).join('')}
        <path d="M60 210L460 10" stroke="${O}" stroke-width="16" stroke-linecap="round"/>
        <path d="M110 232L510 32" stroke="#e9ecef" stroke-width="14" stroke-linecap="round"/>
        <path d="M160 256L560 56" stroke="#3a6ea5" stroke-width="16" stroke-linecap="round"/>
        <path d="M205 280L605 80" stroke="#2f343a" stroke-width="16" stroke-linecap="round"/>
        <path d="M200 330V420M560 150V320" stroke="#5b636c" stroke-width="12"/>
        <path d="M150 420H250M510 320H610" stroke="#5b636c" stroke-width="10"/>
      </g>
      <g transform="translate(620 60)">${hex(60, 60, 54, `fill="${O}"`)}<text x="60" y="70" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="700" font-size="32" fill="#fff">GRP</text></g>`),
    hazardous: () => wrap('0 0 800 500', `${grid(800, 500)}
      <g stroke="#3a3200" stroke-width="22" opacity=".9">${[...Array(16)].map((_, i) => `<path d="M${-200 + i * 70} 500L${-50 + i * 70} 350"/>`).join('')}</g>
      <rect x="0" y="350" width="800" height="150" fill="#2a2510" opacity=".55"/>
      <rect x="230" y="60" width="340" height="280" rx="18" fill="#2d343c" stroke="${L3}" stroke-width="5"/>
      <rect x="252" y="82" width="296" height="236" rx="10" stroke="${L2}" stroke-width="3"/>
      ${[[248, 76], [552, 76], [248, 324], [552, 324]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${L3}"/><path d="M${x - 5} ${y}h10" stroke="${BG}" stroke-width="2"/>`).join('')}
      ${hex(400, 180, 62, `fill="${O}"`)}<text x="400" y="198" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="700" font-size="52" fill="#fff">Ex</text>
      <rect x="320" y="262" width="160" height="30" rx="3" fill="#1b1f24"/><text x="400" y="283" text-anchor="middle" font-family="Barlow, sans-serif" font-weight="700" font-size="15" letter-spacing="2" fill="${L3}">ZONE 1 · 2</text>
      ${[300, 365, 435, 500].map((x, i) => `<rect x="${x - 18}" y="340" width="36" height="30" fill="${L3}"/><rect x="${x - 14}" y="370" width="28" height="18" fill="#5b636c"/><path d="M${x} 388V500" stroke="${['#e9ecef', O, '#3a6ea5', '#5b636c'][i]}" stroke-width="16"/>`).join('')}`),
  };

  /* ---------- Product artwork (light) ---------- */
  const P = '#f6f5f2', D = '#2a2f35', M = '#8a929b', S = '#c9ced4';
  const pw = (body) => `<svg viewBox="0 0 400 225" fill="none" aria-hidden="true"><rect width="400" height="225" fill="${P}"/>${body}</svg>`;
  const PROD = {
    ladder: () => pw(`<g transform="translate(40 40)"><path d="M0 110L200 10M120 170L320 70" stroke="${D}" stroke-width="6"/><path d="M0 110v18l120 60v-18" fill="${S}" stroke="${D}" stroke-width="2"/>${[...Array(9)].map((_, i) => { const t = i / 8; return `<path d="M${t * 200} ${110 - t * 100}L${120 + t * 200} ${170 - t * 100}" stroke="${M}" stroke-width="5"/>`; }).join('')}<path d="M200 10v18l120 60" stroke="${D}" stroke-width="2" opacity=".5"/></g>${hex(345, 45, 22, `fill="${O}"`)}`),
    perforated: () => pw(`<g transform="translate(40 40)"><path d="M0 110L200 10L320 70L120 170Z" fill="${S}" stroke="${D}" stroke-width="3"/>${[...Array(6)].map((_, i) => [...Array(3)].map((_, j) => { const x = 50 + i * 32 + j * 26, y = 112 - i * 16 + j * 13; return `<rect x="${x}" y="${y}" width="14" height="5" rx="2" fill="${M}" transform="rotate(-26 ${x} ${y})"/>`; }).join('')).join('')}<path d="M0 110v-22l200-100v22M320 70v-22" stroke="${D}" stroke-width="3"/><path d="M120 170v-22l200-100" stroke="${D}" stroke-width="3" opacity=".7"/></g>${hex(345, 45, 22, `fill="${O}"`)}`),
    channel: () => pw(`<g transform="translate(70 50)"><path d="M0 130V20h40v110M80 130V20h40v110" stroke="${D}" stroke-width="5"/><path d="M0 20h40M80 20h40" stroke="${O}" stroke-width="7"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="12" y="${36 + i * 18}" width="16" height="8" rx="4" fill="${M}"/><rect x="92" y="${36 + i * 18}" width="16" height="8" rx="4" fill="${M}"/>`).join('')}<path d="M160 120h120M160 90h120" stroke="${M}" stroke-width="10"/><path d="M180 60v80M260 60v80" stroke="${D}" stroke-width="6"/><circle cx="180" cy="60" r="8" fill="${O}"/><circle cx="260" cy="60" r="8" fill="${O}"/></g>`),
    grating: () => pw(`<g transform="translate(60 40)"><path d="M0 100L160 20L300 90L140 170Z" fill="${O}" opacity=".85"/>${[...Array(9)].map((_, i) => `<path d="M${i * 17.5} ${100 - i * 8.75}L${140 + i * 17.5} ${170 - i * 8.75}" stroke="#fff" stroke-width="3"/>`).join('')}${[...Array(8)].map((_, i) => `<path d="M${i * 17.5} ${100 + i * 8.75}L${160 + i * 17.5} ${20 + i * 8.75}" stroke="#fff" stroke-width="3" opacity=".7"/>`).join('')}<path d="M0 100L140 170L300 90" stroke="${D}" stroke-width="3"/></g>`),
    jbGrp: () => pw(`<rect x="130" y="34" width="140" height="120" rx="10" fill="#3b4148" stroke="${D}" stroke-width="3"/><rect x="142" y="46" width="116" height="96" rx="6" stroke="#5b636c" stroke-width="2"/>${hex(200, 94, 26, `fill="${O}"`)}<text x="200" y="102" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="700" font-size="22" fill="#fff">Ex</text>${[160, 186, 214, 240].map((x) => `<rect x="${x - 9}" y="154" width="18" height="14" fill="${M}"/><path d="M${x} 168v40" stroke="${D}" stroke-width="8"/>`).join('')}`),
    jbSs: () => pw(`<defs><linearGradient id="ss" x1="0" x2="1"><stop offset="0" stop-color="#e3e6e9"/><stop offset=".5" stop-color="#fbfcfd"/><stop offset="1" stop-color="#c9ced4"/></linearGradient></defs><rect x="120" y="30" width="160" height="130" rx="6" fill="url(#ss)" stroke="${D}" stroke-width="3"/>${[[132, 42], [268, 42], [132, 148], [268, 148]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${M}"/>`).join('')}<rect x="160" y="70" width="80" height="44" rx="3" fill="${D}"/><text x="200" y="98" text-anchor="middle" font-family="Barlow, sans-serif" font-weight="700" font-size="14" fill="#fff">SS316</text>${[150, 183, 217, 250].map((x) => `<rect x="${x - 9}" y="160" width="18" height="14" fill="${M}"/><path d="M${x} 174v40" stroke="${O}" stroke-width="7"/>`).join('')}`),
    station: () => pw(`<rect x="140" y="26" width="120" height="160" rx="10" fill="#3b4148" stroke="${D}" stroke-width="3"/><circle cx="200" cy="70" r="24" fill="#d92d20" stroke="#fff" stroke-width="4"/><circle cx="200" cy="70" r="8" fill="#fff" opacity=".4"/><circle cx="178" cy="130" r="14" fill="#3ee08f"/><circle cx="222" cy="130" r="14" fill="${O}"/>${hex(200, 166, 10, `fill="${O}"`)}<path d="M200 186v30" stroke="${D}" stroke-width="10"/>`),
    gland: () => pw(`<g transform="translate(120 40)"><path d="M0 70h40v-16h80v16h40v52h-40v16H40v-16H0z" fill="#d9a441" stroke="${D}" stroke-width="3"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M${46 + i * 16} 54v84" stroke="#b5852c" stroke-width="2"/>`).join('')}<path d="M160 82h90v28h-90" fill="${D}"/><path d="M-90 82H0v28h-90" fill="${O}"/><rect x="0" y="70" width="40" height="52" fill="#c99432" stroke="${D}" stroke-width="3"/></g>`),
    light: () => pw(`<rect x="70" y="80" width="260" height="56" rx="28" fill="#3b4148" stroke="${D}" stroke-width="3"/><rect x="92" y="94" width="216" height="28" rx="14" fill="#fff6d6"/><rect x="92" y="94" width="216" height="28" rx="14" fill="#ffd23f" opacity=".5"/><path d="M110 136l-20 50M290 136l20 50" stroke="#ffd23f" stroke-width="2" opacity=".6"/><path d="M200 80V40" stroke="${D}" stroke-width="6"/>${hex(318, 70, 16, `fill="${O}"`)}<text x="318" y="75" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="700" font-size="14" fill="#fff">Ex</text>`),
    gauge: () => pw(`<path d="M0 180H400" stroke="${S}" stroke-width="24"/><path d="M200 180v-30" stroke="${M}" stroke-width="10"/><circle cx="200" cy="96" r="62" fill="#fff" stroke="${D}" stroke-width="7"/>${[...Array(11)].map((_, i) => { const a = (-210 + i * 24) * Math.PI / 180; return `<path d="M${200 + 44 * Math.cos(a)} ${96 + 44 * Math.sin(a)}L${200 + 52 * Math.cos(a)} ${96 + 52 * Math.sin(a)}" stroke="${D}" stroke-width="${i % 5 ? 2 : 3.5}"/>`; }).join('')}<path d="M200 96L234 72" stroke="${O}" stroke-width="5" stroke-linecap="round"/><circle cx="200" cy="96" r="7" fill="${D}"/><path d="M236 122a50 50 0 0 1-72 0" stroke="${O}" stroke-width="4"/>`),
    transmitter: () => pw(`<path d="M0 180H400" stroke="${S}" stroke-width="24"/><path d="M180 168v-30h40v30" fill="${M}"/><rect x="150" y="60" width="100" height="78" rx="8" fill="#3b4148" stroke="${D}" stroke-width="3"/><circle cx="200" cy="99" r="30" fill="#1b1f24"/><rect x="180" y="90" width="40" height="18" rx="2" fill="#0f2a1f"/><text x="200" y="104" text-anchor="middle" font-family="monospace" font-size="12" fill="#3ee08f">4-20</text><path d="M250 80h50v-30" stroke="${O}" stroke-width="6"/>`),
    valve: () => pw(`<path d="M0 150H130M270 150H400" stroke="${S}" stroke-width="30"/><path d="M130 112v76l70-38zM270 112v76l-70-38z" fill="#3b4148" stroke="${D}" stroke-width="3"/><path d="M200 150V80" stroke="${D}" stroke-width="10"/><rect x="150" y="62" width="100" height="20" rx="10" fill="${O}"/><rect x="118" y="112" width="12" height="76" fill="${M}"/><rect x="270" y="112" width="12" height="76" fill="${M}"/>`),
    tubing: () => pw(`<path d="M30 160H170a30 30 0 0 0 30-30V60" stroke="#c9ced4" stroke-width="16"/><path d="M30 160H170a30 30 0 0 0 30-30V60" stroke="#e9ecef" stroke-width="6"/><path d="M200 60h170" stroke="#c9ced4" stroke-width="16"/><g fill="#d9a441" stroke="${D}" stroke-width="2"><rect x="180" y="40" width="40" height="40" rx="4"/><rect x="90" y="146" width="30" height="28" rx="3"/><rect x="290" y="46" width="30" height="28" rx="3"/></g><circle cx="200" cy="60" r="8" fill="${O}"/>`),
    drum: () => pw(`<ellipse cx="160" cy="112" rx="40" ry="86" fill="#3b4148" stroke="${D}" stroke-width="3"/><path d="M160 26H260M160 198H260" stroke="${D}" stroke-width="3"/><ellipse cx="260" cy="112" rx="40" ry="86" fill="#5b636c" stroke="${D}" stroke-width="3"/><ellipse cx="260" cy="112" rx="14" ry="30" fill="${P}"/>${[...Array(6)].map((_, i) => `<path d="M${168 + i * 16} 40V184" stroke="${O}" stroke-width="10" opacity="${.65 + (i % 2) * .35}"/>`).join('')}<path d="M300 150q50 10 80 50" stroke="${O}" stroke-width="10"/>`),
    panel: () => pw(`<rect x="120" y="20" width="160" height="186" fill="#3b4148" stroke="${D}" stroke-width="3"/><path d="M200 20v186" stroke="${D}" stroke-width="2"/>${[0, 1, 2].map((r) => [0, 1, 2].map((c) => `<rect x="${130 + c * 22}" y="${36 + r * 54}" width="14" height="34" rx="2" fill="#e9ecef"/>`).join('')).join('')}${[0, 1, 2].map((i) => `<circle cx="${222 + i * 18}" cy="44" r="6" fill="${['#3ee08f', O, '#ffd23f'][i]}"/>`).join('')}<rect x="212" y="64" width="58" height="34" fill="#1b1f24"/><path d="M216 90l10-12 10 8 10-14 10 10 10-6" stroke="#3ee08f" stroke-width="2"/>`),
    fiber: () => pw(`${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M20 ${60 + i * 22}C140 ${60 + i * 22} 200 112 280 112" stroke="${['#3a6ea5', O, '#3ee08f', '#ffd23f', '#9b5de5', '#e9ecef'][i]}" stroke-width="5"/>`).join('')}<rect x="270" y="92" width="60" height="40" rx="4" fill="#3b4148"/><path d="M330 112H390" stroke="${O}" stroke-width="10" class="pulse-line"/>`),
    cctv: () => pw(`<path d="M300 40V170" stroke="${M}" stroke-width="10"/><path d="M300 70L240 90" stroke="${M}" stroke-width="8"/><g transform="rotate(14 180 100)"><rect x="110" y="76" width="140" height="56" rx="8" fill="#e9ecef" stroke="${D}" stroke-width="3"/><rect x="96" y="70" width="30" height="68" rx="4" fill="#3b4148"/><circle cx="111" cy="104" r="12" fill="#1b1f24"/><circle cx="111" cy="104" r="5" fill="${O}" class="blink"/></g>`),
    speaker: () => pw(`<path d="M200 190V140" stroke="${M}" stroke-width="10"/><path d="M150 140h100l40-90H110z" fill="#3b4148" stroke="${D}" stroke-width="3"/><ellipse cx="200" cy="50" rx="90" ry="14" fill="#5b636c"/><g stroke="${O}" stroke-width="5" stroke-linecap="round"><path d="M310 60a40 40 0 0 1 0 50"/><path d="M335 44a64 64 0 0 1 0 82" opacity=".6"/><path d="M90 60a40 40 0 0 0 0 50"/><path d="M65 44a64 64 0 0 0 0 82" opacity=".6"/></g>`),
    earthing: () => pw(`<path d="M200 20V130" stroke="#d9a441" stroke-width="10"/><path d="M140 130h120M160 156h80M180 182h40" stroke="${D}" stroke-width="8" stroke-linecap="round"/><path d="M80 40l-18 34h16l-10 30 30-42h-16z" fill="${O}"/><path d="M300 40l-18 34h16l-10 30 30-42h-16z" fill="${O}" opacity=".6"/>`),
  };

  return { hero, DIV, PROD, hex };
})();
