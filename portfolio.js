// ============ DATA ============
const PROJECTS = [
  {
    id: "snake",
    title: "Snake — Terminal C",
    short: "Snake codé from-scratch en C, pilotable dans le terminal.",
    tags: ["C", "Algo"],
    layout: "feat",
    year: "2024",
    role: "Solo",
    duration: "2 semaines",
    type: "Projet personnel",
    stack: ["C", "ncurses", "Make", "Linux"],
    media: { kind: "img", src: "media/projet_snake.png" },
    repo: "https://github.com/adriengout/snakeManuel",
    ctx: "Premier projet en langage C dans le cadre de la SAÉ « Programmation impérative ». Objectif : un Snake jouable au clavier, entièrement dans le terminal.",
    did: [
      "Implémentation du moteur de jeu en C pur (boucle de jeu, gestion des collisions, croissance du serpent).",
      "Rendu terminal via ncurses, gestion des entrées clavier non-bloquantes.",
      "Compilation cross-distrib avec Makefile."
    ]
  },
  {
    id: "snake-auto",
    title: "Snake — Automatisé",
    short: "Deux serpents en simultané, pilotés par un solveur.",
    tags: ["C", "Algo"],
    layout: "med",
    year: "2025",
    role: "Solo",
    duration: "3 semaines",
    type: "Extension SAÉ",
    stack: ["C", "Algorithmes", "Pathfinding"],
    media: { kind: "video", src: "media/projet_Snake_Auto.mp4" },
    repo: "https://github.com/adriengout/SnakeAutomatique",
    ctx: "Évolution du Snake manuel : deux serpents qui se déplacent automatiquement et cherchent à survivre le plus longtemps possible.",
    did: [
      "Conception d'un algorithme de décision pour piloter chaque serpent.",
      "Optimisation du pathfinding pour éviter les collisions mutuelles.",
      "Ajout du mode duel et du suivi de score."
    ]
  },
  {
    id: "kmeans",
    title: "K-Means · MNIST-128",
    short: "Implémentation de l'algorithme K-Means pour classer des chiffres manuscrits.",
    tags: ["Python", "Algo"],
    layout: "med",
    year: "2025",
    role: "Solo",
    duration: "1 semaine",
    type: "SAÉ Analyse de données",
    stack: ["Python", "NumPy", "Matplotlib"],
    media: { kind: "video", src: "media/demo_KMeans.mp4" },
    repo: "https://github.com/adriengout/Kmeans",
    ctx: "Analyse exploratoire du jeu MNIST-128 (chiffres manuscrits réduits) avec une implémentation maison de l'algorithme K-Means.",
    did: [
      "Implémentation du K-Means from-scratch (init, assignation, re-centrage, convergence).",
      "Évaluation des résultats sur différents nombres de clusters.",
      "Visualisation des centres et des classes obtenues."
    ]
  },
  {
    id: "alizon-bdd",
    title: "Base de données — Alizon",
    short: "Modélisation et création d'une BDD relationnelle pour un site e-commerce.",
    tags: ["SQL", "Web"],
    layout: "med",
    year: "2026",
    role: "Équipe",
    duration: "SAÉ semestrielle",
    type: "SAÉ E-commerce",
    stack: ["SQL", "MySQL", "Modélisation"],
    media: { kind: "video", src: "media/Enregistrement 2026-02-01 180331.mp4" },
    repo: "https://github.com/adriengout/Alizon-E-Commerce-WebSite/blob/main/database/scriptBDD_LBC_111.sql",
    ctx: "Création d'une base de données complète pour Alizon, le site e-commerce de la SAÉ. Données factices générées pour les démos.",
    did: [
      "Modélisation entité-relation à partir du cahier des charges.",
      "Écriture du script SQL : création des tables, contraintes, index.",
      "Peuplement avec des données de test cohérentes."
    ]
  },
  {
    id: "jeu-vie",
    title: "Jeu de la Vie",
    short: "Automate cellulaire de Conway, en Python avec rendu graphique.",
    tags: ["Python", "Algo"],
    layout: "med",
    year: "2025",
    role: "Solo",
    duration: "1 semaine",
    type: "Projet personnel",
    stack: ["Python", "Tkinter"],
    media: { kind: "video", src: "media/Enregistrement de l'écran 2025-06-05 000114.mp4" },
    repo: "https://github.com/adriengout/jeuDeLaVie",
    ctx: "Implémentation du célèbre automate cellulaire de Conway. Une grille évolue génération après génération selon trois règles simples — et fait émerger des structures complexes.",
    did: [
      "Moteur de simulation pas-à-pas avec gestion des règles de Conway.",
      "Interface graphique pour dessiner l'état initial et observer l'évolution.",
      "Contrôles play / pause / vitesse."
    ]
  },
  {
    id: "alizon-site",
    title: "Site e-commerce — Alizon",
    short: "Recueil des besoins, conception, développement complet d'un site e-commerce.",
    tags: ["Web", "SQL"],
    layout: "med",
    year: "2026",
    role: "Équipe",
    duration: "SAÉ semestrielle",
    type: "SAÉ E-commerce",
    stack: ["PHP", "HTML", "CSS", "MySQL"],
    media: { kind: "video", src: "media/Enregistrement 2026-02-01 175429.mp4" },
    repo: "https://github.com/adriengout/Alizon-E-Commerce-WebSite",
    ctx: "Projet d'équipe : développer un site e-commerce de A à Z, du recueil des besoins jusqu'à la mise en ligne d'une démo fonctionnelle.",
    did: [
      "Participation au recueil des besoins et à la conception du parcours utilisateur.",
      "Développement front et back en PHP / HTML / CSS, branché sur la BDD MySQL.",
      "Tests fonctionnels et corrections en équipe."
    ]
  }
];

// ============ INIT ON DOM READY ============
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initProjects();
  initReveal();
  initSnake();
  initCursor();
});

// ============ NAV scroll state ============
function initNav(){
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

// ============ REVEAL on scroll ============
function initReveal(){
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, {threshold:0.1, rootMargin: '0px 0px -10% 0px'});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ============ PROJECTS GRID ============
function initProjects(){
  const grid = document.getElementById('projGrid');
  grid.innerHTML = PROJECTS.map((p, i) => projCard(p, i)).join('');

  // hover videos
  grid.querySelectorAll('.proj').forEach(card => {
    const vid = card.querySelector('video');
    if(vid){
      card.addEventListener('mouseenter', () => { vid.currentTime = 0; vid.play().catch(()=>{}); });
      card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    }
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = card.dataset.id;
      openModal(PROJECTS.find(p => p.id === id));
    });
  });

  // filters
  const filterRow = document.getElementById('projFilters');
  // populate counts
  const tags = ['all','C','Python','SQL','Web','Algo'];
  filterRow.querySelectorAll('.proj-filter').forEach(btn => {
    const t = btn.dataset.tag;
    const count = (t === 'all') ? PROJECTS.length : PROJECTS.filter(p => p.tags.includes(t)).length;
    let countEl = btn.querySelector('.count');
    if(!countEl){
      countEl = document.createElement('span');
      countEl.className = 'count';
      btn.appendChild(countEl);
    }
    countEl.textContent = ' ' + count;
  });
  filterRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.proj-filter');
    if(!btn) return;
    filterRow.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tag = btn.dataset.tag;
    grid.querySelectorAll('.proj').forEach(card => {
      const ok = (tag === 'all') || card.dataset.tags.split(',').includes(tag);
      card.classList.toggle('hidden-by-filter', !ok);
    });
  });

  // modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalBg').addEventListener('click', (e) => {
    if(e.target.id === 'modalBg') closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  });
}

function projCard(p, i){
  const layout = p.layout || 'sm';
  const num = String(i+1).padStart(2,'0');
  let mediaHtml = '';
  if(p.media.kind === 'img'){
    mediaHtml = `<img src="${p.media.src}" alt="${p.title}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'placeholder',textContent:'// ' + this.alt}))" />`;
  } else if(p.media.kind === 'video'){
    mediaHtml = `<video src="${p.media.src}" muted loop playsinline preload="metadata" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'placeholder',textContent:'// video — ${p.id}'}))"></video>`;
  } else {
    mediaHtml = `<div class="placeholder">// ${p.id}</div>`;
  }
  return `
    <article class="proj ${layout}" data-id="${p.id}" data-tags="${p.tags.join(',')}">
      <div class="proj-media">
        ${mediaHtml}
        <div class="proj-tag-row">${p.tags.slice(0,2).map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="proj-num">${num}</div>
      </div>
      <div class="proj-body">
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <div class="proj-foot">
          <span class="stack">${p.stack.slice(0,3).join(' · ')}</span>
          <span class="open">case study <span class="arr">→</span></span>
        </div>
      </div>
    </article>
  `;
}

// ============ MODAL ============
function openModal(p){
  if(!p) return;
  const bg = document.getElementById('modalBg');
  document.getElementById('modalCrumb').textContent = p.id;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalLede').textContent = p.short;
  document.getElementById('modalCtx').textContent = p.ctx;
  document.getElementById('modalDid').innerHTML = p.did.map(d => `<li>${d}</li>`).join('');
  document.getElementById('modalStack').innerHTML = p.stack.map(s => `<span>${s}</span>`).join('');
  document.getElementById('modalMeta').innerHTML = `
    <div><div class="mm-l">Année</div><div class="mm-v">${p.year}</div></div>
    <div><div class="mm-l">Rôle</div><div class="mm-v">${p.role}</div></div>
    <div><div class="mm-l">Durée</div><div class="mm-v">${p.duration}</div></div>
    <div><div class="mm-l">Type</div><div class="mm-v">${p.type}</div></div>
  `;
  // media
  const m = document.getElementById('modalMedia');
  // Snake jouable directement dans la carte projet (port de version4.c)
  if(p.id === 'snake'){
    m.innerHTML = `
      <div id="playCanvasWrap" style="position:relative;width:100%;height:100%;background:#000;">
        <canvas id="playSnake" width="800" height="400" style="display:block;width:100%;height:100%;image-rendering:pixelated;"></canvas>
        <div id="playOverlay" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(0,0,0,.78);backdrop-filter:blur(4px);color:#fff;font-family:'JetBrains Mono',monospace;text-align:center;padding:20px;">
          <h3 style="font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0;">Snake — version4.c</h3>
          <p style="font-size:12px;color:#aaa;max-width:340px;margin:0;">Port fidèle du jeu C : portails au centre des bords, 4 pavés aléatoires, accélération à chaque pomme. Atteins 10 pommes pour gagner.</p>
          <div style="display:flex;gap:6px;margin:4px 0;font-size:11px;color:#888;">
            <span style="padding:5px 9px;border:1px solid #333;border-radius:6px;background:#0a0a0a;">Z</span>
            <span style="padding:5px 9px;border:1px solid #333;border-radius:6px;background:#0a0a0a;">Q</span>
            <span style="padding:5px 9px;border:1px solid #333;border-radius:6px;background:#0a0a0a;">S</span>
            <span style="padding:5px 9px;border:1px solid #333;border-radius:6px;background:#0a0a0a;">D</span>
            <span style="padding:5px 9px;color:#666;">ou</span>
            <span style="padding:5px 9px;border:1px solid #333;border-radius:6px;background:#0a0a0a;">↑↓←→</span>
          </div>
          <button id="playStart" style="background:var(--accent);color:#000;padding:10px 22px;border-radius:8px;font-weight:600;font-size:12px;border:0;cursor:pointer;font-family:'JetBrains Mono',monospace;">▶ JOUER</button>
        </div>
        <div style="position:absolute;top:10px;left:14px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#888;pointer-events:none;">
          POMMES <b id="playScore" style="color:var(--accent);font-weight:500;">0</b>/10 · LEN <b id="playLen" style="color:var(--accent);font-weight:500;">10</b>
        </div>
      </div>`;
    setTimeout(initPlayableSnake, 50);
  } else if(p.media.kind === 'video'){
    m.innerHTML = `<video src="${p.media.src}" autoplay muted loop playsinline controls onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'placeholder',textContent:'// vidéo introuvable — ${p.id}'}))"></video>`;
  } else if(p.media.kind === 'img'){
    m.innerHTML = `<img src="${p.media.src}" alt="${p.title}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'placeholder',textContent:'// image introuvable'}))"/>`;
  } else {
    m.innerHTML = `<div class="placeholder">// ${p.id}</div>`;
  }
  // cta
  document.getElementById('modalCta').innerHTML = `
    <a class="btn btn-primary" href="${p.repo}" target="_blank" rel="noopener">↗ Voir sur GitHub</a>
    <button class="btn btn-ghost" onclick="document.getElementById('modalBg').classList.remove('open')">Fermer</button>
  `;
  bg.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  const bg = document.getElementById('modalBg');
  bg.classList.remove('open');
  document.body.style.overflow = '';
  const m = document.getElementById('modalMedia');
  m.querySelectorAll('video').forEach(v => v.pause());
  if(window.__playSnakeStop){ window.__playSnakeStop(); window.__playSnakeStop = null; }
}

// ============ PLAYABLE SNAKE — port de version4.c (manuel) ============
function initPlayableSnake(){
  const canvas = document.getElementById('playSnake');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const overlay = document.getElementById('playOverlay');
  const startBtn = document.getElementById('playStart');
  const scoreEl = document.getElementById('playScore');
  const lenEl = document.getElementById('playLen');
  const ACCENT = () => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00ffd5';

  // Constantes du C
  const LARGEUR = 80, HAUTEUR = 40;
  const TAILLE_INI = 10, NB_PAVES = 4, COL_PAVE = 5, POMMES_VICTOIRE = 10;
  const X_DEPART = 20, Y_DEPART = 10;
  const VIDE = ' ', BORDURE = '#', POMME = '6', CORPS = 'X';

  let plateau, lesX, lesY, taille, dir, pommes, alive, won, tempo, timer;

  function initPlateau(){
    plateau = Array.from({length:HAUTEUR}, ()=> new Array(LARGEUR).fill(VIDE));
    for(let y=0;y<HAUTEUR;y++){
      for(let x=0;x<LARGEUR;x++){
        if(x===0||x===LARGEUR-1||y===0||y===HAUTEUR-1){
          // 4 portails au centre des bords (comme dans le C)
          if((x===Math.floor(LARGEUR/2) && (y===0||y===HAUTEUR-1)) ||
             (y===Math.floor(HAUTEUR/2) && (x===0||x===LARGEUR-1))){
            plateau[y][x] = VIDE;
          } else {
            plateau[y][x] = BORDURE;
          }
        }
      }
    }
  }
  function ajouterPaves(){
    let placed = 0, tries = 0;
    while(placed < NB_PAVES && tries < 500){
      tries++;
      const px = Math.floor(Math.random()*(LARGEUR-8))+1;
      const py = Math.floor(Math.random()*(HAUTEUR-8))+1;
      // éviter zone de spawn
      if(Math.abs(px-X_DEPART)<TAILLE_INI+2 && Math.abs(py-Y_DEPART)<6) continue;
      let ok = true;
      for(let y=py;y<py+COL_PAVE && ok;y++){
        for(let x=px;x<px+COL_PAVE;x++){ if(plateau[y][x]!==VIDE){ ok=false; break; } }
      }
      if(ok){
        for(let y=py;y<py+COL_PAVE;y++){ for(let x=px;x<px+COL_PAVE;x++){ plateau[y][x]=BORDURE; } }
        placed++;
      }
    }
  }
  function ajouterPomme(){
    let x, y, tries=0;
    do {
      x = Math.floor(Math.random()*(LARGEUR-2))+1;
      y = Math.floor(Math.random()*(HAUTEUR-2))+1;
      tries++;
      if(tries>500) return;
    } while(plateau[y][x] !== VIDE || isSnakeAt(x,y));
    plateau[y][x] = POMME;
  }
  function isSnakeAt(x,y){
    for(let i=0;i<taille;i++){ if(lesX[i]===x && lesY[i]===y) return true; }
    return false;
  }
  function reset(){
    initPlateau(); ajouterPaves();
    lesX = []; lesY = [];
    for(let i=0;i<TAILLE_INI;i++){ lesX.push(X_DEPART-i); lesY.push(Y_DEPART); }
    taille = TAILLE_INI; dir = 'd'; pommes = 0; alive = true; won = false; tempo = 110;
    ajouterPomme();
    scoreEl.textContent = '0'; lenEl.textContent = String(taille);
  }
  function progresser(){
    let nx = lesX[0], ny = lesY[0];
    if(dir==='z') ny--; else if(dir==='s') ny++; else if(dir==='d') nx++; else if(dir==='q') nx--;
    // wrap-around (portails) — comme dans le C
    if(nx < 0) nx = LARGEUR-2;
    if(nx > LARGEUR-1) nx = 1;
    if(ny < 1) ny = HAUTEUR-2;
    if(ny > HAUTEUR-1) ny = 1;
    // collision bordure / corps
    if(plateau[ny][nx] === BORDURE){ alive = false; return; }
    for(let i=0;i<taille;i++){ if(lesX[i]===nx && lesY[i]===ny){ alive = false; return; } }
    let mangee = false;
    if(plateau[ny][nx] === POMME){ mangee = true; plateau[ny][nx] = VIDE; }
    // déplacer corps
    if(mangee){
      // grandir : insérer en tête sans virer la queue
      lesX.unshift(nx); lesY.unshift(ny);
      taille++;
      pommes++;
      tempo = Math.max(50, tempo - 6);
      scoreEl.textContent = String(pommes); lenEl.textContent = String(taille);
      if(pommes >= POMMES_VICTOIRE){ won = true; alive = false; return; }
      ajouterPomme();
      // restart timer with new tempo
      clearInterval(timer); timer = setInterval(tick, tempo);
    } else {
      for(let i=taille-1;i>0;i--){ lesX[i]=lesX[i-1]; lesY[i]=lesY[i-1]; }
      lesX[0]=nx; lesY[0]=ny;
    }
  }
  function draw(){
    const W=canvas.width, H=canvas.height; const cw=W/LARGEUR, ch=H/HAUTEUR;
    ctx.fillStyle = '#000'; ctx.fillRect(0,0,W,H);
    // bordures + pavés
    ctx.fillStyle = '#1a1a1a';
    for(let y=0;y<HAUTEUR;y++){ for(let x=0;x<LARGEUR;x++){
      if(plateau[y][x]===BORDURE) ctx.fillRect(x*cw, y*ch, cw, ch);
    } }
    // halos portails
    const acc = ACCENT();
    ctx.strokeStyle = acc; ctx.globalAlpha = 0.4; ctx.lineWidth = 2;
    ctx.strokeRect(Math.floor(LARGEUR/2)*cw, 0, cw, 4);
    ctx.strokeRect(Math.floor(LARGEUR/2)*cw, H-4, cw, 4);
    ctx.strokeRect(0, Math.floor(HAUTEUR/2)*ch, 4, ch);
    ctx.strokeRect(W-4, Math.floor(HAUTEUR/2)*ch, 4, ch);
    ctx.globalAlpha = 1;
    // pomme
    for(let y=0;y<HAUTEUR;y++){ for(let x=0;x<LARGEUR;x++){
      if(plateau[y][x]===POMME){
        ctx.fillStyle='#ff5470'; ctx.shadowColor='#ff5470'; ctx.shadowBlur=10;
        ctx.beginPath(); ctx.arc(x*cw+cw/2, y*ch+ch/2, Math.min(cw,ch)*0.55, 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur=0;
      }
    } }
    // serpent
    for(let i=taille-1;i>=0;i--){
      const head = i===0;
      ctx.fillStyle = head ? acc : `rgba(0,255,213,${Math.max(0.25, 0.95 - i*0.04)})`;
      if(head){ ctx.shadowColor=acc; ctx.shadowBlur=12; }
      ctx.fillRect(lesX[i]*cw+0.5, lesY[i]*ch+0.5, cw-1, ch-1);
      ctx.shadowBlur = 0;
    }
  }
  function tick(){
    if(!alive){
      clearInterval(timer); timer=null;
      overlay.style.display='flex';
      overlay.innerHTML = won
        ? `<h3 style="font-family:'Space Grotesk',sans-serif;font-size:24px;color:${ACCENT()};margin:0;">★ Victoire !</h3>
           <p style="font-size:12px;color:#aaa;margin:0;">10 pommes mangées · taille ${taille}</p>
           <button id="playStart" style="background:${ACCENT()};color:#000;padding:10px 22px;border-radius:8px;font-weight:600;font-size:12px;border:0;cursor:pointer;font-family:'JetBrains Mono',monospace;">↻ Rejouer</button>`
        : `<h3 style="font-family:'Space Grotesk',sans-serif;font-size:22px;color:#fff;margin:0;">Game Over</h3>
           <p style="font-size:12px;color:#aaa;margin:0;">${pommes}/10 pommes · taille ${taille}</p>
           <button id="playStart" style="background:${ACCENT()};color:#000;padding:10px 22px;border-radius:8px;font-weight:600;font-size:12px;border:0;cursor:pointer;font-family:'JetBrains Mono',monospace;">↻ Rejouer</button>`;
      document.getElementById('playStart').addEventListener('click', start);
      return;
    }
    progresser();
    draw();
  }
  function start(){
    reset(); draw();
    overlay.style.display = 'none';
    if(timer) clearInterval(timer);
    timer = setInterval(tick, tempo);
  }
  function stop(){ if(timer){ clearInterval(timer); timer=null; } document.removeEventListener('keydown', onKey); }
  window.__playSnakeStop = stop;

  function onKey(e){
    const k = e.key.toLowerCase();
    let nd = null;
    if(k==='z' || k==='arrowup') nd='z';
    else if(k==='s' || k==='arrowdown') nd='s';
    else if(k==='q' || k==='arrowleft') nd='q';
    else if(k==='d' || k==='arrowright') nd='d';
    if(!nd) return;
    e.preventDefault();
    // empêcher demi-tour
    if((nd==='z'&&dir==='s')||(nd==='s'&&dir==='z')||(nd==='q'&&dir==='d')||(nd==='d'&&dir==='q')) return;
    dir = nd;
  }
  document.addEventListener('keydown', onKey);
  startBtn.addEventListener('click', start);
  // dessin initial vide
  initPlateau();
  lesX=[]; lesY=[]; for(let i=0;i<TAILLE_INI;i++){ lesX.push(X_DEPART-i); lesY.push(Y_DEPART); }
  taille=TAILLE_INI; pommes=0;
  draw();
}

// ============ SNAKE — port de version4auto.c (Durand & Gout, 2025) — 2 serpents ============
function initSnake(){
  const canvas = document.getElementById("snakeCanvas");
  const scoreEl = document.getElementById("snakeScore");
  const stepsEl = document.getElementById("snakeSteps");
  const statusEl = document.getElementById("snakeStatus");
  const replayBtn = document.getElementById("snakeReplay");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  const ACCENT = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#00ffd5";
  const LARG=80, HAUT_P=40, TAILLE=10, NB_POMMES=10, NB_PAVES=6, TAILLE_PAVES=5;
  const X_INI1=40, Y_INI1=13, X_INI2=40, Y_INI2=27;
  const VIDE=" ", BORDURE="#", POMME="6";
  const HAUT="z", BAS="s", GAUCHE="q", DROITE="d";
  const pommesX=[40,75,78,2,9,78,74,2,72,5];
  const pommesY=[20,38,2,2,5,38,32,38,32,2];
  const pavesX=[4,73,4,73,38,38];
  const pavesY=[4,4,33,33,14,22];
  let plateau, X1, Y1, X2, Y2, dir1, dir2, nbPommes, nbP1, nbP2, cmp1, cmp2, collision, gagne;
  let runHandle=null;
  function init(){
    plateau = Array.from({length:LARG+2},()=>new Array(HAUT_P+2).fill(VIDE));
    for(let i=1;i<=LARG;i++){ if(i!==LARG/2){ plateau[i][1]=BORDURE; plateau[i][HAUT_P]=BORDURE; } }
    for(let j=1;j<=HAUT_P;j++){ if(j!==HAUT_P/2){ plateau[1][j]=BORDURE; plateau[LARG][j]=BORDURE; } }
    for(let i=0;i<NB_PAVES;i++){ for(let dy=0;dy<TAILLE_PAVES;dy++){ for(let dx=0;dx<TAILLE_PAVES;dx++){
      plateau[pavesX[i]+dx][pavesY[i]+dy]=BORDURE; } } }
    X1=[]; Y1=[]; X2=[]; Y2=[];
    for(let i=0;i<TAILLE;i++){ X1.push(X_INI1-i); Y1.push(Y_INI1); X2.push(X_INI2+i); Y2.push(Y_INI2); }
    dir1=DROITE; dir2=GAUCHE; nbPommes=0; nbP1=0; nbP2=0; cmp1=0; cmp2=0; collision=false; gagne=false;
    plateau[pommesX[0]][pommesY[0]]=POMME;
    scoreEl.textContent="0+0"; stepsEl.textContent=0; statusEl.textContent="// duel · running";
  }
  function colSerpent(LX,LY,tx,ty){ for(let i=0;i<TAILLE;i++){ if(LX[i]===tx&&LY[i]===ty) return true; } return false; }
  function calcDir(LX,LY,cx,cy,direction,LXa,LYa){
    const tx=LX[0], ty=LY[0]; let nx=tx, ny=ty; let res=DROITE;
    const nbD = Math.abs(tx-cx)+Math.abs(ty-cy);
    const nbH = Math.abs(tx-LARG/2)+Math.abs(ty-1)+Math.abs(LARG/2-cx)+Math.abs(HAUT_P-cy);
    const nbB = Math.abs(tx-LARG/2)+Math.abs(ty-HAUT_P)+Math.abs(LARG/2-cx)+Math.abs(1-cy);
    const nbG = Math.abs(tx-1)+Math.abs(ty-HAUT_P/2)+Math.abs(LARG-cx)+Math.abs(HAUT_P/2-cy);
    const nbDr = Math.abs(tx-LARG)+Math.abs(ty-HAUT_P/2)+Math.abs(1-cx)+Math.abs(HAUT_P/2-cy);
    if(nbD>nbH){
      if(tx<LARG/2){ if(direction!==GAUCHE)res=DROITE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
      else if(tx>LARG/2){ if(direction!==DROITE)res=GAUCHE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
      else if(ty>1){ if(direction!==BAS)res=HAUT; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
    } else if(nbD>nbB){
      if(tx<LARG/2){ if(direction!==GAUCHE)res=DROITE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
      else if(tx>LARG/2){ if(direction!==DROITE)res=GAUCHE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
      else if(ty<HAUT_P){ if(direction!==HAUT)res=BAS; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
    } else if(nbD>nbG){
      if(ty<HAUT_P/2){ if(direction!==HAUT)res=BAS; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
      else if(ty>HAUT_P/2){ if(direction!==BAS)res=HAUT; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
      else if(tx>0){ if(direction!==DROITE)res=GAUCHE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
    } else if(nbD>nbDr){
      if(ty<HAUT_P/2){ if(direction!==HAUT)res=BAS; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
      else if(ty>HAUT_P/2){ if(direction!==BAS)res=HAUT; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
      else if(tx<LARG){ if(direction!==GAUCHE)res=DROITE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
    } else {
      if((ty<cy && tx!==LARG && tx!==1) || ty===1){ if(direction!==HAUT)res=BAS; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
      else if((ty>cy && tx!==LARG && tx!==1) || ty===HAUT_P){ if(direction!==BAS)res=HAUT; else if(tx+1===LARG)res=GAUCHE; else res=DROITE; }
      else if((tx<cx && ty!==HAUT_P && ty!==1) || tx===1){ if(direction!==GAUCHE)res=DROITE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
      else if((tx>cx && ty!==HAUT_P && ty!==1) || tx===LARG){ if(direction!==DROITE)res=GAUCHE; else if(ty+1===HAUT_P)res=HAUT; else res=BAS; }
    }
    if(res===HAUT) ny=ty-1; else if(res===BAS) ny=ty+1; else if(res===GAUCHE) nx=tx-1; else if(res===DROITE) nx=tx+1;
    let colPave = (plateau[nx]&&plateau[nx][ny]===BORDURE);
    if(colPave){
      if(res===HAUT||res===BAS){ if(LX[0]<LX[1]) return GAUCHE; else if(LX[0]>LX[1]) return DROITE; else return GAUCHE; }
      else { if(LY[0]<LY[1]) res=HAUT; else if(LY[0]>LY[1]) res=BAS; else res=HAUT; }
    }
    if(colSerpent(LXa,LYa,nx,ny)){
      if(plateau[LX[0]+1] && plateau[LX[0]+1][LY[0]]!==BORDURE && !colSerpent(LXa,LYa,LX[0]+1,LY[0])) return DROITE;
      if(plateau[LX[0]-1] && plateau[LX[0]-1][LY[0]]!==BORDURE && !colSerpent(LXa,LYa,LX[0]-1,LY[0])) return GAUCHE;
      if(plateau[LX[0]] && plateau[LX[0]][LY[0]+1]!==BORDURE && !colSerpent(LXa,LYa,LX[0],LY[0]+1)) return BAS;
      if(plateau[LX[0]] && plateau[LX[0]][LY[0]-1]!==BORDURE && !colSerpent(LXa,LYa,LX[0],LY[0]-1)) return HAUT;
      return DROITE;
    }
    let colSelf=false;
    for(let i=1;i<TAILLE;i++){ if(LX[i]===nx && LY[i]===ny){ colSelf=true; break; } }
    if(colSelf && !colPave){
      if(res===HAUT && LX[8]<LX[9]) res=DROITE;
      else if(res===HAUT && LX[8]>LX[9]) res=GAUCHE;
      else if(res===BAS && LX[8]<LX[9]) res=DROITE;
      else if(res===BAS && LX[8]>LX[9]) res=GAUCHE;
      else if(res===DROITE && LY[8]<LY[9]) res=BAS;
      else if(res===DROITE && LY[8]>LY[9]) res=HAUT;
      else if(res===GAUCHE && LY[8]<LY[9]) res=BAS;
      else if(res===GAUCHE && LY[8]>LY[9]) res=HAUT;
    }
    return res;
  }
  function progresser(LX,LY,direction){
    for(let i=TAILLE-1;i>0;i--){ LX[i]=LX[i-1]; LY[i]=LY[i-1]; }
    if(direction===HAUT) LY[0]--; else if(direction===BAS) LY[0]++; else if(direction===DROITE) LX[0]++; else LX[0]--;
    if(LX[0]===1 && plateau[LX[0]][LY[0]]!==BORDURE) LX[0]=LARG;
    else if(LX[0]===LARG && LY[0]===HAUT_P/2) LX[0]=1;
    else if(LY[0]===1 && LX[0]===LARG/2) LY[0]=HAUT_P;
    else if(LY[0]===HAUT_P && plateau[LX[0]][LY[0]]!==BORDURE) LY[0]=1;
    let pomme=false;
    if(plateau[LX[0]] && plateau[LX[0]][LY[0]]===POMME){ pomme=true; plateau[LX[0]][LY[0]]=VIDE; }
    else if(plateau[LX[0]] && plateau[LX[0]][LY[0]]===BORDURE){ collision=true; }
    else if(LX[0]<1||LX[0]>LARG||LY[0]<1||LY[0]>HAUT_P){ collision=true; }
    return pomme;
  }
  function draw(){
    const W=canvas.width, H=canvas.height; const cw=W/LARG, ch=H/HAUT_P;
    ctx.fillStyle="#000"; ctx.fillRect(0,0,W,H);
    ctx.fillStyle="#1a1a1a";
    for(let x=1;x<=LARG;x++){ for(let y=1;y<=HAUT_P;y++){ if(plateau[x][y]===BORDURE) ctx.fillRect((x-1)*cw,(y-1)*ch,cw,ch); } }
    ctx.fillStyle="#262626";
    for(let i=0;i<NB_PAVES;i++){ ctx.fillRect((pavesX[i]-1)*cw,(pavesY[i]-1)*ch,TAILLE_PAVES*cw,TAILLE_PAVES*ch); }
    const acc=ACCENT();
    ctx.strokeStyle=acc; ctx.globalAlpha=0.5; ctx.lineWidth=2;
    ctx.strokeRect((LARG/2-1)*cw,0,cw,3); ctx.strokeRect((LARG/2-1)*cw,H-3,cw,3);
    ctx.strokeRect(0,(HAUT_P/2-1)*ch,3,ch); ctx.strokeRect(W-3,(HAUT_P/2-1)*ch,3,ch);
    ctx.globalAlpha=1;
    if(nbPommes<NB_POMMES){ const px=pommesX[nbPommes], py=pommesY[nbPommes];
      ctx.fillStyle="#ff5470"; ctx.shadowColor="#ff5470"; ctx.shadowBlur=10;
      ctx.beginPath(); ctx.arc((px-0.5)*cw,(py-0.5)*ch,Math.min(cw,ch)*0.55,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
    }
    // serpent 1 (cyan)
    for(let i=TAILLE-1;i>=0;i--){ const isHead=i===0;
      ctx.fillStyle=isHead?acc:"rgba(0,255,213,"+(0.95-i*0.06)+")";
      if(isHead){ ctx.shadowColor=acc; ctx.shadowBlur=10; }
      ctx.fillRect((X1[i]-1)*cw+0.5,(Y1[i]-1)*ch+0.5,cw-1,ch-1); ctx.shadowBlur=0;
    }
    // serpent 2 (magenta/orange)
    for(let i=TAILLE-1;i>=0;i--){ const isHead=i===0;
      ctx.fillStyle=isHead?"#ff7a59":"rgba(255,122,89,"+(0.95-i*0.06)+")";
      if(isHead){ ctx.shadowColor="#ff7a59"; ctx.shadowBlur=10; }
      ctx.fillRect((X2[i]-1)*cw+0.5,(Y2[i]-1)*ch+0.5,cw-1,ch-1); ctx.shadowBlur=0;
    }
  }
  function tick(){
    if(collision||gagne){ clearInterval(runHandle);
      statusEl.textContent = gagne?("// terminé · "+nbP1+"+"+nbP2+"=10"):"// collision";
      return;
    }
    dir1 = calcDir(X1,Y1,pommesX[nbPommes],pommesY[nbPommes],dir1,X2,Y2);
    cmp1++;
    if(progresser(X1,Y1,dir1)){
      nbP1++; nbPommes++;
      if(nbPommes>=NB_POMMES) gagne=true;
      else plateau[pommesX[nbPommes]][pommesY[nbPommes]]=POMME;
    }
    if(!gagne && !collision){
      dir2 = calcDir(X2,Y2,pommesX[nbPommes],pommesY[nbPommes],dir2,X1,Y1);
      cmp2++;
      if(progresser(X2,Y2,dir2)){
        nbP2++; nbPommes++;
        if(nbPommes>=NB_POMMES) gagne=true;
        else plateau[pommesX[nbPommes]][pommesY[nbPommes]]=POMME;
      }
    }
    scoreEl.textContent = nbP1+"+"+nbP2;
    stepsEl.textContent = cmp1+cmp2;
    draw();
  }
  function start(){ if(runHandle) clearInterval(runHandle); init(); draw(); runHandle=setInterval(tick,90); }
  start();
  replayBtn.addEventListener("click", start);
}

// ============ CURSOR ============
function initCursor(){
  const cur = document.getElementById('cur');
  if(!cur) return;
  let x = 0, y = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  function loop(){
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    cur.style.left = x + 'px';
    cur.style.top = y + 'px';
    requestAnimationFrame(loop);
  }
  loop();
  // hover state
  document.addEventListener('mouseover', (e) => {
    if(e.target.closest('a, button, .proj, .hobby, .stat, .c-row, .proj-filter')){
      cur.classList.add('hover');
    } else {
      cur.classList.remove('hover');
    }
  });
}
