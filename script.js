const IC = {
  food:`<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6h3.5a1.5 1.5 0 0 1 0 3H19l-1 9"/></svg>`,
  music:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  show:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  run:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M10.5 9 8 21"/><path d="m9 9 6 1 3-3"/><path d="m11 11-1 5 4 3"/></svg>`,
  fire:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  car:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  church:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"/><path d="M14 22v-4a2 2 0 0 0-4 0v4"/><path d="M18 22V5l-6-3-6 3v17"/><path d="M12 7v5"/><path d="M10 9h4"/></svg>`,
  kids:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01M15 12h.01M10 16s.8 1 2 1 2-1 2-1"/><circle cx="12" cy="12" r="10"/></svg>`,
  dj:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  trophy:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
  horse:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2h-4l-4-2H6a2 2 0 0 0-2 2v9"/><path d="M12 9v6"/><path d="M8 21h8"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>`,
  star:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  map:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  games:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>`,
  tractor:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h4l2.68 7.95A2 2 0 0 0 11.6 13H20"/><path d="m20 13 1-7H8"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="17" r="3"/></svg>`,
  piano:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 9 3C5.1 3 2 6.1 2 10v10h20V10c0-2.2-1.5-4-3.5-4z"/><path d="M2 18h20"/><path d="M6 14v4"/><path d="M10 14v4"/><path d="M14 14v4"/><path d="M18 14v4"/></svg>`,
  donkey:`<svg viewBox="0 0 24 24" fill="none" stroke="#B7CD02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`
};
const DAYS = [
  { id:"mer29", short:"Mer", num:"29", month:"Aprile", fullName:"Mercoledì 29 Aprile", events:[
    {time:"19.00", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"20.15", icon:"kids", title:"Animazione con GLI AMICI DELL'ALLEGRIA di Formellino", subtitle:'"LA SFUIAREJA E... ALTRE SORPRESE"', type:"highlight"},
    {time:"20.30", icon:"music", title:"Concerto della band MYSTIC DOLL", link:"simple-events/mystic-doll.html"}
  ]},
  { id:"gio30", short:"Gio", num:"30", month:"Aprile", fullName:"Giovedì 30 Aprile", events:[
    {time:"12.00", icon:"food", title:"PRANZO in CAMPAGNA", desc:"Pranzo a menù fisso · per info e prenotazioni: 338 2333669", type:"highlight", link:"pranzo-in-campagna.html"},
    {time:"17.30", icon:"run", title:"Apertura iscrizioni 35ª PODISTICA DELLA CAMPAGNA", nota:"Contributo organizzativo: € 3,00 · Premio di partecipazione a tutti gli iscritti", link:"podistica-campagna-map.html"},
    {time:"19.00", icon:"run", title:"PARTENZA della Camminata Ludicomotoria (10 km) o Mini camminata (2 km)", link:"podistica-campagna-map.html"},
    {time:"19.00", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"20.00", icon:"trophy", title:"Premiazioni a tutte le Società partecipanti", subtitle:"(con minimo 10 partecipanti)"},
    {time:"20.30", icon:"music", title:"Concerto di DANIELA PERONI QUARTET", link:"simple-events/daniela-peroni-quartet.html"},
    {time:"22.30", icon:"fire", title:"LA FESTA DELLA LUCE", desc:"Acrobazie, Magie, Illusionismo e Giocoleria col FUOCO — presentato da COLLETTIVO STRA-VAGANTE", type:"highlight"},
    {time:"23.00", icon:"fire", title:"35° LOM A MAZ — ACCENSIONE DEL GRANDE FALÒ", desc:"BALLI ATTORNO AL FUOCO con il DUO TRABADELL ed il Gruppo di Ricerca ANTICHI BALLI · ASPETTANDO MEZZANOTTE E MAGGIO · VINO E CIAMBELLA PER TUTTI…", type:"highlight", link:"lom-a-maz.html"}
  ]},
  { id:"ven1", short:"Ven", num:"1", month:"Maggio", fullName:"Venerdì 1° Maggio", events:[
    {time:"11.00", icon:"church", title:"Visita guidata alla Chiesa Arcipretale di Pieve Cesato", subtitle:"Guidata dall'Arciprete Don Claudio"},
    {time:"11.30", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"14.00", icon:"music", title:"Concerto con GLI ALLUVIONATI DEL LISCIO"},
    {time:"Pomeriggio", icon:"kids", title:"BUSKERS, ANIMAZIONI, GIOCOLERIA, TRUCCABIMBI — LAURA e i giochi di HAPPY FAMILY"},
    {time:"16.00", icon:"donkey", title:"L'ATTESISSIMA CORSA DEI SOMARI — 66ª edizione", nota:"L'orario di inizio potrà subire variazioni in caso di maltempo", type:"highlight", link:"corsa-dei-somari.html"},
    {time:"17.30", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"17.30", icon:"show", title:"Spettacolo di strada INTORNO", subtitle:"Giocoleria, equilibrismo, acrobazie… Compagnia MA.Re."},
    {time:"18.30", icon:"piano", title:"Piano bar e music con il gruppo DUODè"},
    {time:"20.30", icon:"show", title:"LA METALLURGICA VIGANÒ E MARIA PIA TIMO — HOTEL VIGANÒ", type:"highlight"},
    {time:"22.45", icon:"dj", title:"DJ SET con GAO DJ"}
  ]},
  { id:"sab2", short:"Sab", num:"2", month:"Maggio", fullName:"Sabato 2 Maggio", events:[
    {time:"9.00", icon:"car", title:"16° RADUNO DI AUTO, MOTO e… MEZZI AGRICOLI DI INTERESSE STORICO", nota:"Iscrizione gratuita", type:"highlight", link:"raduno-auto-moto.html"},
    {time:"11.30", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"13.30", icon:"trophy", title:"Premiazioni radunisti", link:"raduno-auto-moto.html"},
    {time:"14.15", icon:"map", title:"PARTENZA del GIRO TURISTICO — Visita al MUSEO VAROLI di COTIGNOLA", link:"raduno-auto-moto.html"},
    {time:"18.30", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"19.15", icon:"show", title:"ANDRO presenta SANTA CLOWN", subtitle:"Uno spettacolo comico e poetico", desc:"Nella lunga notte dei regali, lo spirito del Clown si sveglia ed osserva con meraviglia la propria stanza addobbata a festa"},
    {time:"20.00", icon:"music", title:"LELINO E LA SUA GIUNTA BAND — concerto LÀSA STÉ", type:"highlight"},
    {time:"21.30", icon:"music", title:"L'ORCHESTRA CORELLI — DREAMING MELODIES", subtitle:"Musiche dal magico mondo DISNEY", type:"highlight"},
    {time:"23.00", icon:"dj", title:"DJ SET con NICOLAS PAGLIAI"}
  ]},
  { id:"dom3", short:"Dom", num:"3", month:"Maggio", fullName:"Domenica 3 Maggio", events:[
    {time:"9.00", icon:"tractor", title:"4° SagriRADUNO — RADUNO DI TRATTORI D'EPOCA", subtitle:"Raduno ed esposizione di trattori e mezzi agricoli d'epoca", type:"highlight"},
    {time:"11.30", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"14.30", icon:"music", title:"Concerto della band WORK IN PROGRESS"},
    {time:"Pomeriggio", icon:"kids", title:"BUSKERS, ANIMAZIONI, GIOCOLERIA, TRUCCABIMBI — LAURA e i giochi di NONNO BANTER"},
    {time:"14.30", icon:"horse", title:"HOBBY HORSES — 3° raduno degli ASINI con bastone", desc:"Con GARA di Asini a Bastone e carota e altre novità (ideazione artistica a cura di Luigi Berardi)"},
    {time:"15.00", icon:"games", title:"GIOCHI DELLA TRADIZIONE POPOLARE ROMAGNOLA — 32° TORNEO DI BARANDELL", link:"barandell.html"},
    {time:"15.30", icon:"church", title:"Visita guidata alla Chiesa Arcipretale di Pieve Cesato", subtitle:"Guidata dall'Arciprete Don Claudio"},
    {time:"16.00", icon:"games", title:"Giochi a premi (area green) — GIMKANA COL TOSAERBA (gara a coppie)"},
    {time:"17.30", icon:"kids", title:"CARLETTO E L'UOVO D'ORO — ALL'INCIRCO", subtitle:"Spettacolo di Burattini in baracca · Angolo dei Bambini", type:"highlight"},
    {time:"18.00", icon:"food", title:"Apertura stand gastronomico", type:"food", link:"mangiare.html"},
    {time:"18.30", icon:"show", title:"VITTORIO BONETTI & ALFONSO NADIANI", subtitle:"T'È CUN AL TU CANZUNÈT, MÈ CUN I MÌ FET IN DIALÈT"},
    {time:"20.45", icon:"star", title:"SE STASERA SONO MINA — Tributo a Mina", subtitle:"I più grandi successi interpretati da Daniela Peroni", type:"highlight"}
  ]}
];
function buildNav() {
  const nav = document.getElementById('dayNav');
  if (!nav) return;
  DAYS.forEach((d, i) => {
    const btn = document.createElement('button');
    btn.className = 'day-btn' + (i === 0 ? ' active' : '');
    btn.dataset.id = d.id;
    btn.innerHTML = `<span class="dn-short">${d.short}</span><span class="dn-num">${d.num}</span><span class="dn-month">${d.month}</span>`;
    btn.addEventListener('click', () => switchDay(d.id, btn));
    nav.appendChild(btn);
  });
}
function buildPanels() {
  const wrap = document.getElementById('panels');
  if (!wrap) return;
  DAYS.forEach((d) => {
    const panel = document.createElement('div');
    panel.className = 'day-panel';
    panel.id = 'panel-' + d.id;
    panel.innerHTML = `<div class="day-heading"><div class="day-heading-dot"></div><h2>${d.fullName}</h2><div class="day-heading-line"></div></div>`;
    const tl = document.createElement('div');
    tl.className = 'timeline';
    d.events.forEach((ev, idx) => {
      const fd = ev.type === 'food';
      const isLinked = ev.link && ev.link.trim() !== '';
      const card = document.createElement('div');
      card.className = 'event-card' + (fd ? ' food' : '') + (isLinked ? ' event-link' : '');
      if (isLinked) {
        card.dataset.link = ev.link;
        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', ev.title);
        card.addEventListener('click', () => { window.location.href = ev.link; });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.href = ev.link;
          }
        });
      }
      card.dataset.day = d.id;
      card.dataset.index = String(idx);
      card.dataset.time = ev.time;
      let html = `<div class="event-dot"></div><div class="card-inner"><div class="card-bar"></div><div class="card-icon-wrap"><div class="card-icon">${IC[ev.icon] || IC.star}</div></div><div class="card-body">`;
      html += `<div class="card-badge schedule-badge">Prossimo</div>`;
      html += `<div class="card-time">${ev.time}</div><div class="card-title">${ev.title}</div>`;
      if (ev.subtitle) html += `<div class="card-subtitle">${ev.subtitle}</div>`;
      if (ev.desc) html += `<div class="card-desc">${ev.desc}</div>`;
      if (ev.nota) html += `<div class="card-nota">${ev.nota}</div>`;
      html += `</div></div>`;
      card.innerHTML = html;
      tl.appendChild(card);
    });
    panel.appendChild(tl);
    wrap.appendChild(panel);
  });
}
function switchDay(id, btn, scrollToPanels = true) {
  document.querySelectorAll('.day-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('active');
  if (btn) {
    btn.classList.add('active');
    btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
  }
  if (scrollToPanels) {
    const panels = document.getElementById('panels');
    if (panels) {
      const y = panels.getBoundingClientRect().top + window.scrollY - 135;
      window.scrollTo({ top: y, behavior:'smooth' });
    }
  }
  setTimeout(triggerCards, 60);
}
function triggerCards() {
  const active = document.querySelector('.day-panel.active');
  if (!active) return;
  active.querySelectorAll('.event-card').forEach((c, i) => {
    c.classList.remove('visible');
    setTimeout(() => c.classList.add('visible'), i * 50);
  });
}
function parseTimeToMinutes(value) {
  const m = /^(\d{1,2})\.(\d{2})$/.exec(value || '');
  if (!m) return null;
  return Number(m[1]) * 60 + Number(m[2]);
}
function getRomeNow() {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  });
  const parts = Object.fromEntries(fmt.formatToParts(new Date()).filter(p => p.type !== 'literal').map(p => [p.type, p.value]));
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    minutes: Number(parts.hour) * 60 + Number(parts.minute)
  };
}
function getScheduleState() {
  const now = getRomeNow();
  const dayMap = [
    { id: 'mer29', month: 4, day: 29 },
    { id: 'gio30', month: 4, day: 30 },
    { id: 'ven1', month: 5, day: 1 },
    { id: 'sab2', month: 5, day: 2 },
    { id: 'dom3', month: 5, day: 3 }
  ];
  const currentIndex = dayMap.findIndex(d => d.month === now.month && d.day === now.day);
  if (currentIndex === -1) {
    const first = dayMap[0];
    const last = dayMap[dayMap.length - 1];
    const beforeStart = (now.month < first.month) || (now.month === first.month && now.day < first.day);
    return { activeDayId: beforeStart ? first.id : last.id, highlightIndexes: beforeStart ? [0] : [] };
  }
  const day = DAYS.find(d => d.id === dayMap[currentIndex].id);
  const timed = day.events
    .map((ev, idx) => ({ idx, minutes: parseTimeToMinutes(ev.time) }))
    .filter(ev => ev.minutes !== null)
    .sort((a, b) => a.minutes - b.minutes);
  const next = timed.find(ev => ev.minutes >= now.minutes);
  if (!next) return { activeDayId: day.id, highlightIndexes: [] };
  const sameTime = timed.filter(ev => ev.minutes === next.minutes).map(ev => ev.idx);
  return { activeDayId: day.id, highlightIndexes: sameTime };
}
function applyScheduleHighlights(state) {
  document.querySelectorAll('.event-card').forEach(card => card.classList.remove('highlight'));
  if (!state || !state.activeDayId) return;
  state.highlightIndexes.forEach(idx => {
    const card = document.querySelector(`.event-card[data-day="${state.activeDayId}"][data-index="${idx}"]`);
    if (card) card.classList.add('highlight');
  });
}
function showPage(id) {
  const target = document.getElementById('page-' + id);
  if (!target) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  target.classList.add('active');
  document.querySelectorAll('[data-page]').forEach(a => a.classList.toggle('active', a.dataset.page === id));
  window.scrollTo({ top: 0, behavior:'smooth' });
  if (id === 'programma') setTimeout(triggerCards, 120);
}
function toggleMobile() {
  const nav = document.getElementById('mobileNav');
  const burger = document.getElementById('hamburger');
  if (nav) nav.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
}
function initDesktopDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  if (!dropdowns.length) return;
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;
    const open = () => {
      dropdown.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      dropdowns.forEach(d => {
        d.classList.remove('open');
        const t = d.querySelector('.nav-dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) open();
    });
    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth > 680) open();
    });
    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth > 680) close();
    });
  });
  document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    }
  });
}
function startCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const valueEl = el.querySelector('.countdown-value');
  const target = new Date('2026-04-29T19:00:00+02:00').getTime();
  function render() {
    const diff = target - Date.now();
    if (diff <= 0) { valueEl.textContent = 'La Sagra è iniziata!'; return; }
    const total = Math.floor(diff / 1000);
    const d = Math.floor(total / 86400);
    const h = Math.floor((total % 86400) / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    valueEl.textContent = `${d}g ${h}h ${m}m ${s}s`;
  }
  render();
  setInterval(render, 1000);
}
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildPanels();
  const state = getScheduleState();
  const activeBtn = document.querySelector(`.day-btn[data-id="${state.activeDayId}"]`);
  switchDay(state.activeDayId, activeBtn, false);
  applyScheduleHighlights(state);
  setTimeout(triggerCards, 250);
  initDesktopDropdowns();
  startCountdown();
});
