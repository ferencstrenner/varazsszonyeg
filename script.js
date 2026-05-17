const revealItems = document.querySelectorAll('.reveal');
const heroCard = document.querySelector('.hero-card');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 90}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (heroCard && !reducedMotion) {
  heroCard.addEventListener('mousemove', (event) => {
    const bounds = heroCard.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -6;

    heroCard.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  });
}

/* ═══════════════════════════════════════════════════════
   NYELVVÁLTÓ – LANGUAGE SWITCHER – SPRACHUMSCHALTER
═══════════════════════════════════════════════════════ */

const i18n = {
  hu: {
    'nav-contact': 'Kapcsolat',
    'hero-eyebrow': 'Szőnyeg Sándor – kertfenntartás • Balatonfüred és környéke',
    'hero-h1': 'Ahová lépek,<br><span>rend terem.</span>',
    'hero-q1': 'A kerted kezd dzsungellé válni?',
    'hero-q2': 'A szőlő elhanyagolt?',
    'hero-q3': 'A gyümölcsfák pedig úgy néznek ki, mint akik rég feladták?',
    'hero-tagline': 'Nyugi, jövök, és rendet teszek!',
    'hero-cta-call': 'Hívás most',
    'hero-cta-services': 'Szolgáltatások',
    'hero-badge1': 'Gyors, pontos munka',
    'hero-badge2': 'Tiszta munkavégzés',
    'hero-badge3': 'Balatonfüred és környéke',
    'card-label': 'Írj üzenetet vagy hívj',
    'card-h2': 'Varázsoljunk rendet a kertedben!',
    'card-li1': 'Szakszerű metszés és kaszálás',
    'card-li2': 'Sövény-, bokor- és fakivágás',
    'card-li3': 'Zöldhulladék elszállítás igény szerint',
    'mq1': 'Gyümölcsfák szakszerű metszése',
    'mq2': 'Szőlőmetszés magánkertekben',
    'mq3': 'Kaszálás, fűnyírás, szegélyvágás',
    'mq4': 'Sövény- és bokornyírás',
    'mq5': 'Kisebb fák kivágása',
    'mq6': 'Permetezés',
    'mq7': 'Zöldhulladék elszállíttatása',
    'stat1-h3': 'Gyors, pontos munka',
    'stat1-p': 'Tiszta munkavégzés és rendezett átadás minden esetben.',
    'stat2-h3': 'Megbeszélés szerint',
    'stat2-p': 'Kisebb karbantartási munkák is egyedi igény alapján vállalva.',
    'stat3-h3': 'Balatonfüred és környéke',
    'stat3-p': 'Gyors kiszállás a helyszínre, rugalmas időpontokkal.',
    'services-eyebrow': 'Szolgáltatások',
    'services-h2': 'A kert, amire jó érzés ránézni',
    'services-lead': 'Komplett fenntartás nyaralókhoz, családi házakhoz és telkekhez.',
    'svc1': 'Gyümölcsfák szakszerű metszése',
    'svc2': 'Szőlőmetszés magánkertekben',
    'svc3': 'Kaszálás, fűnyírás, szegélyvágás',
    'svc4': 'Sövény- és bokornyírás',
    'svc5': 'Kisebb fák kivágása',
    'svc6': 'Permetezés',
    'svc7': 'Kisebb karbantartási munkák megbeszélés szerint',
    'svc8': 'Zöldhulladék elszállíttatása igény esetén',
    'sharp-eyebrow': 'Kiegészítő szolgáltatás',
    'sharp-h2': 'Mobil fűnyíró késélezés és olajcsere – helyszínen!',
    'sharp-p1': 'Rondán vág a fűnyíró?',
    'sharp-p2': 'Csíkos marad a gyep?',
    'sharp-p3': 'Elhagyja a füvet?',
    'sharp-p4': 'Nem kell új gép — csak tompa a kés.',
    'sharp-intro': 'Házhoz megyek Balatonfüreden és környékén – a munkát helyben, gyorsan és szakszerűen elvégzem:',
    'sharp-l1': 'fűnyíró kés élezése',
    'sharp-l2': 'benzines, elektromos és akkus fűnyírók',
    'sharp-l3': 'fűnyíró traktor késélezés is',
    'sharp-l4': 'olajcsere igény szerint',
    'sharp-cta': 'Nem kell elvinni a gépet, én megyek ki!',
    'sharp-sub': 'Hívhatsz vagy írhatsz üzenetet időpontért.',
    'video-eyebrow': 'Munka közben',
    'video-h2': 'Nézd meg, hogyan dolgozom!',
    'process-eyebrow': 'Hogyan dolgozom',
    'process-h2': 'Gyors, kiszámítható folyamat',
    'process-li1': '<strong>Kapcsolatfelvétel:</strong> rövid egyeztetés telefonon.',
    'process-li2': '<strong>Felmérés:</strong> feladatok és ütemezés pontosítása.',
    'process-li3': '<strong>Munka:</strong> megbízható kivitelezés, tiszta átadás.',
    'contact-eyebrow': 'Kapcsolat',
    'contact-h2': 'Írj üzenetet vagy hívj!',
    'contact-p': 'Varázsoljunk rendet a kertedben! Gyors, pontos, tiszta munkavégzés Balatonfüreden és környékén.',
    'contact-credit': 'Szőnyeg Sándor – Balatonfüred és környéke',
    'footer-area': 'Ellátott területek: Balatonfüred, Tihany, Csopak, Aszófő, Balatonudvari, Balatonakali, Pécsely, Dörgicse, Örvényes, Balatonszepezd és a Balaton-felvidék',
    'floating-call': 'Hívás',
  },
  de: {
    'nav-contact': 'Kontakt',
    'hero-eyebrow': 'Szőnyeg Sándor – Gartenpflege • Balatonfüred und Umgebung',
    'hero-h1': 'Wo ich auftrete,<br><span>entsteht Ordnung.</span>',
    'hero-q1': 'Wird Ihr Garten zum Dschungel?',
    'hero-q2': 'Ist der Weinstock vernachlässigt?',
    'hero-q3': 'Sehen die Obstbäume so aus, als hätten sie längst aufgegeben?',
    'hero-tagline': 'Kein Problem – ich komme und bringe Ordnung!',
    'hero-cta-call': 'Jetzt anrufen',
    'hero-cta-services': 'Leistungen',
    'hero-badge1': 'Schnelle, präzise Arbeit',
    'hero-badge2': 'Saubere Arbeitsweise',
    'hero-badge3': 'Balatonfüred und Umgebung',
    'card-label': 'Nachricht oder Anruf',
    'card-h2': 'Wir bringen Ordnung in Ihren Garten!',
    'card-li1': 'Fachgerechter Schnitt und Mähen',
    'card-li2': 'Hecken-, Strauch- und Baumschnitt',
    'card-li3': 'Grünabfallentsorgung nach Bedarf',
    'mq1': 'Fachgerechter Obstbaumschnitt',
    'mq2': 'Weinrebenschnitt in Privatgärten',
    'mq3': 'Mähen, Rasenmähen, Kantenschneiden',
    'mq4': 'Hecken- und Strauchschnitt',
    'mq5': 'Fällen kleinerer Bäume',
    'mq6': 'Spritzarbeiten',
    'mq7': 'Grünabfallentsorgung',
    'stat1-h3': 'Schnelle, präzise Arbeit',
    'stat1-p': 'Saubere Ausführung und ordentliche Übergabe in jedem Fall.',
    'stat2-h3': 'Nach Vereinbarung',
    'stat2-p': 'Auch kleinere Wartungsarbeiten nach individuellen Wünschen.',
    'stat3-h3': 'Balatonfüred und Umgebung',
    'stat3-p': 'Schnelle Anreise, flexible Terminvergabe.',
    'services-eyebrow': 'Leistungen',
    'services-h2': 'Der Garten, den man gerne anschaut',
    'services-lead': 'Komplette Pflege für Ferienhäuser, Einfamilienhäuser und Grundstücke.',
    'svc1': 'Fachgerechter Obstbaumschnitt',
    'svc2': 'Weinrebenschnitt in Privatgärten',
    'svc3': 'Mähen, Rasenmähen, Kantenschneiden',
    'svc4': 'Hecken- und Strauchschnitt',
    'svc5': 'Fällen kleinerer Bäume',
    'svc6': 'Spritzarbeiten',
    'svc7': 'Kleinere Wartungsarbeiten nach Absprache',
    'svc8': 'Grünabfuhr bei Bedarf',
    'sharp-eyebrow': 'Zusatzleistung',
    'sharp-h2': 'Mobiler Rasenmähermesserschliff und Ölwechsel – vor Ort!',
    'sharp-p1': 'Mäht der Rasenmäher ungleichmäßig?',
    'sharp-p2': 'Bleibt der Rasen gestreift?',
    'sharp-p3': 'Lässt er Gras liegen?',
    'sharp-p4': 'Kein neues Gerät nötig — nur das Messer ist stumpf.',
    'sharp-intro': 'Ich komme zu Ihnen in Balatonfüred und Umgebung – die Arbeit erledige ich schnell und fachgerecht vor Ort:',
    'sharp-l1': 'Rasenmähermesserschliff',
    'sharp-l2': 'Benzin-, Elektro- und Akkurasenmäher',
    'sharp-l3': 'auch Aufsitzmäher',
    'sharp-l4': 'Ölwechsel nach Bedarf',
    'sharp-cta': 'Sie müssen das Gerät nicht wegbringen – ich komme zu Ihnen!',
    'sharp-sub': 'Rufen Sie an oder schreiben Sie für einen Termin.',
    'video-eyebrow': 'Bei der Arbeit',
    'video-h2': 'Sehen Sie, wie ich arbeite!',
    'process-eyebrow': 'Mein Ablauf',
    'process-h2': 'Schneller, transparenter Prozess',
    'process-li1': '<strong>Kontaktaufnahme:</strong> kurze Absprache telefonisch.',
    'process-li2': '<strong>Begutachtung:</strong> Aufgaben und Zeitplan festlegen.',
    'process-li3': '<strong>Arbeit:</strong> zuverlässige Ausführung, saubere Übergabe.',
    'contact-eyebrow': 'Kontakt',
    'contact-h2': 'Nachricht schreiben oder anrufen!',
    'contact-p': 'Wir bringen Ordnung in Ihren Garten! Schnelle, präzise, saubere Arbeit in Balatonfüred und Umgebung.',
    'contact-credit': 'Szőnyeg Sándor – Balatonfüred und Umgebung',
    'footer-area': 'Einsatzgebiet: Balatonfüred, Tihany, Csopak, Aszófő, Balatonudvari, Balatonakali, Pécsely, Dörgicse, Örvényes, Balatonszepezd und Balaton-Hochland',
    'floating-call': 'Anruf',
  },
  en: {
    'nav-contact': 'Contact',
    'hero-eyebrow': 'Szőnyeg Sándor – garden care • Balatonfüred & surroundings',
    'hero-h1': 'Wherever I step,<br><span>order follows.</span>',
    'hero-q1': 'Is your garden turning into a jungle?',
    'hero-q2': 'Is the vineyard neglected?',
    'hero-q3': 'Do the fruit trees look like they gave up long ago?',
    'hero-tagline': "Don't worry, I'll come and sort it out!",
    'hero-cta-call': 'Call now',
    'hero-cta-services': 'Services',
    'hero-badge1': 'Fast, precise work',
    'hero-badge2': 'Clean working',
    'hero-badge3': 'Balatonfüred & surroundings',
    'card-label': 'Send a message or call',
    'card-h2': "Let's bring order to your garden!",
    'card-li1': 'Expert pruning and mowing',
    'card-li2': 'Hedge, shrub & tree work',
    'card-li3': 'Green waste removal on request',
    'mq1': 'Expert fruit tree pruning',
    'mq2': 'Vine pruning in private gardens',
    'mq3': 'Mowing, lawn cutting, edging',
    'mq4': 'Hedge and shrub trimming',
    'mq5': 'Felling smaller trees',
    'mq6': 'Spraying',
    'mq7': 'Green waste removal',
    'stat1-h3': 'Fast, precise work',
    'stat1-p': 'Clean work and tidy handover every time.',
    'stat2-h3': 'By arrangement',
    'stat2-p': 'Smaller maintenance jobs taken on by individual request.',
    'stat3-h3': 'Balatonfüred & surroundings',
    'stat3-p': 'Quick on-site response, flexible scheduling.',
    'services-eyebrow': 'Services',
    'services-h2': 'The garden you love to look at',
    'services-lead': 'Complete maintenance for holiday homes, family houses and plots.',
    'svc1': 'Expert fruit tree pruning',
    'svc2': 'Vine pruning in private gardens',
    'svc3': 'Mowing, lawn cutting, edging',
    'svc4': 'Hedge and shrub trimming',
    'svc5': 'Felling smaller trees',
    'svc6': 'Spraying',
    'svc7': 'Minor maintenance by arrangement',
    'svc8': 'Green waste removal if needed',
    'sharp-eyebrow': 'Additional service',
    'sharp-h2': 'Mobile lawnmower blade sharpening & oil change – on site!',
    'sharp-p1': 'Does the mower cut unevenly?',
    'sharp-p2': 'Are stripes left on the lawn?',
    'sharp-p3': 'Does it miss grass?',
    'sharp-p4': 'No new machine needed — just a blunt blade.',
    'sharp-intro': 'I come to you in Balatonfüred and the area – the job is done quickly and professionally on site:',
    'sharp-l1': 'lawnmower blade sharpening',
    'sharp-l2': 'petrol, electric and cordless mowers',
    'sharp-l3': 'ride-on mowers too',
    'sharp-l4': 'oil change on request',
    'sharp-cta': 'No need to bring the machine – I come to you!',
    'sharp-sub': 'Call or send a message for an appointment.',
    'video-eyebrow': 'At work',
    'video-h2': 'See how I work!',
    'process-eyebrow': 'How I work',
    'process-h2': 'Fast, predictable process',
    'process-li1': '<strong>Contact:</strong> short consultation by phone.',
    'process-li2': '<strong>Assessment:</strong> finalising tasks and schedule.',
    'process-li3': '<strong>Work:</strong> reliable execution, clean handover.',
    'contact-eyebrow': 'Contact',
    'contact-h2': 'Send a message or call!',
    'contact-p': "Let's bring order to your garden! Fast, precise, clean work in Balatonfüred and surroundings.",
    'contact-credit': 'Szőnyeg Sándor – Balatonfüred & surroundings',
    'footer-area': 'Service area: Balatonfüred, Tihany, Csopak, Aszófő, Balatonudvari, Balatonakali, Pécsely, Dörgicse, Örvényes, Balatonszepezd and the Balaton Highlands',
    'floating-call': 'Call',
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.dataset.i18nHtml;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    var active = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
});

(function () {
  var supported = ['hu', 'de', 'en'];
  var saved = '';
  try { saved = localStorage.getItem('lang') || ''; } catch (e) {}

  var lang = '';

  if (supported.indexOf(saved) !== -1) {
    // Korábban mentett preferencia
    lang = saved;
  } else {
    // Böngésző nyelvek (teljes sorrend: navigator.languages tömb, fallback: navigator.language)
    var browserLangs = (navigator.languages && navigator.languages.length)
      ? Array.prototype.slice.call(navigator.languages)
      : [navigator.language || ''];
    for (var i = 0; i < browserLangs.length; i++) {
      var code = browserLangs[i].slice(0, 2).toLowerCase();
      if (supported.indexOf(code) !== -1) {
        lang = code;
        break;
      }
    }
    if (!lang) lang = 'hu';
  }

  applyLang(lang);
}());
