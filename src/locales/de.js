export default {
  nav: {
    home: 'start',
    about: 'über mich',
    projects: 'projekte',
    experience: 'erfahrung',
    skills: 'fähigkeiten',
    contact: 'kontakt',
    hire: 'Anfragen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
  },

  hero: {
    badge: 'Verfügbar für Freelance-Projekte',
    roles: ['Softwareentwickler', 'Automatisierungsingenieur', 'QA-Spezialist', 'Freelancer'],
    tagline:
      'Ich verwandle komplexe Probleme in saubere Automatisierung, getestete APIs und ausgefeilte, voll funktionsfähige Anwendungen.',
    viewProjects: 'Projekte ansehen',
    getInTouch: 'Kontakt aufnehmen',
    stackLabel: 'stack //',
    scrollAria: 'Zum Bereich „Über mich“ scrollen',
    imgAlt: 'Piotr Łatyński',
  },

  about: {
    label: '// 01. über mich',
    title: 'Ein wenig über <span class="accent-text">mich</span>',
    desc1:
      'Ich bin Softwareentwickler aus Piaseczno, Polen, mit Erfahrung sowohl in der Entwicklung als auch in der Qualitätssicherung. Ich habe ein ausgeprägtes Auge fürs Detail — eine Gewohnheit aus Jahren professionellen Testens — und wende es auf alles an, was ich schreibe.',
    desc2:
      'Meine Arbeit reicht von Automatisierungsskripten über REST-APIs bis hin zu voll funktionsfähigen, responsiven Anwendungen. Ich finde gerne den einfachsten Weg durch ein komplexes Problem und bin stets auf der Suche nach Neuem zum Dazulernen.',
    metaLocation: 'Standort',
    metaEmail: 'E-Mail',
    metaGithub: 'GitHub',
    metaLanguages: 'Sprachen',
    locationValue: 'Piaseczno, Masowien, Polen',
    languagesValue: 'Polnisch & Englisch',
    interests: 'Interessen',
    hobbies: ['Songwriting', 'Bildende Kunst', 'Fitnessstudio', 'Parkour', 'Physik', 'Robotik', 'Gaming'],
  },

  projects: {
    label: '// 02. projekte',
    title: 'Meine <span class="accent-text">Projekte</span>',
    subtitle: 'Praxisprojekte — von Kundenwebsites und Automatisierung bis zur Spieleentwicklung.',
    visit: 'Website besuchen',
    statusCompleted: 'Abgeschlossen',
    statusInProgress: 'In Arbeit',
    items: [
      {
        title: 'Domek Rzepiska — Ferienvermietung',
        description:
          'Eine vollständige Website für Ferienvermietung mit ausgefeiltem Layout, interaktivem Bildbetrachter für Objektfotos und einem Reservierungsformular mit E-Mail-Integration.',
        features: [
          'Interaktive Bildgalerie & Lightbox-Betrachter',
          'Reservierungsformular mit E-Mail-Versand',
          'Klares, responsives Layout',
          'SEO-freundliche Struktur',
        ],
      },
      {
        title: 'Restaurant-Anwendungs-Engine mit CMS — SaaS-Plattform',
        description:
          'Eine voll funktionsfähige Engine zum Erstellen von Restaurant-Websites — elegantes, responsives Design mit flüssiger Navigation, intuitivem Reservierungs- und Online-Bestellablauf, eigenem CMS, durchdachter Datenbank, integrierten Treue- und Marketingfunktionen sowie einer schnellen asynchronen API, die alles verbindet.',
        features: [
          'Responsives Design nach dem Mobile-First-Prinzip',
          'Interaktive Speisekarte mit Kategoriedurchsuchung',
          'Online-Reservierungs- und Bestellsystem',
          'Eigenes CMS zur Menü- und Inhaltsverwaltung',
        ],
      },
      {
        title: '2D-Physik-Puzzlespiel',
        description:
          'Ein 2D-Action-/Puzzlespiel mit starkem Fokus auf Physiksimulation — ein Lernspiel, das Physik durch unterhaltsames Gameplay vermittelt, mit prozeduraler Generierung und einem von mir komponierten Original-Soundtrack.',
        features: [
          'Realistische Physik-Simulations-Engine',
          'Prozedural generierte Level',
          'Physikkonzepte spielerisch vermittelt',
          'Original-Soundtrack & Sounddesign',
        ],
      },
      {
        title: 'Automatisiertes Chatbot-System',
        description:
          'Eine intelligente Outreach-Automatisierungsplattform, die Nutzerprofile auswertet, personalisierte Gespräche initiiert und kontextbezogene KI-Antworten generiert — mit minimalem manuellem Aufwand.',
        features: [
          'Profil-Scraping & Datenanreicherung',
          'Automatisierte Gesprächsinitiierung',
          'Leichte Kontextdatenbank als Gedächtnis',
          'KI-gestützte personalisierte Antwortgenerierung',
        ],
      },
    ],
  },

  experience: {
    label: '// 03. erfahrung',
    title: 'Beruflicher <span class="accent-text">Werdegang</span>',
    present: 'heute',
    items: [
      {
        role: 'Freiberuflicher Softwareentwickler',
        period: '2023 — heute',
        points: [
          'Automatisierung mit Python & JavaScript, Workflow-Tooling und Entwicklung von OCR-Pipelines.',
          'Full-Stack-Entwicklung und Testing — Vue.js, FastAPI, PostgreSQL, HTML, CSS.',
          'Entwicklung eines 2D-Python-Spiels mit prozeduraler Generierung und Physiksimulation; Taichi Lang zur Parallelisierung eingesetzt.',
        ],
      },
      {
        role: 'Software-QA-Tester',
        period: '2020 — 2022',
        points: [
          'Entwurf und Durchführung von Testfällen auf Windows-, Konsolen- und VR-Plattformen.',
          'API-Tests mit Postman; Analyse des Netzwerkverkehrs mit Fiddler.',
          'Testmanagement und Reporting über Azure DevOps; Teilnahme an Agile-Sprints.',
        ],
      },
      {
        role: 'Techniker für Website-Wartung',
        period: '2020',
        points: [
          'WordPress-Wartung, Plugin-Updates und Sicherheitsüberwachung für die Website eines lokalen Unternehmens.',
          'Frontend-Anpassungen (HTML/CSS) und Inhaltsaktualisierungen zur Verbesserung der Nutzererfahrung.',
          'Systemintegration (Zahlungen, E-Mail-Automatisierung) und Performance-Optimierung (Caching, Bildkomprimierung).',
          'Manuelles Testen und Kundensupport.',
          'Umsetzung von SEO-Best-Practices zur Verbesserung von Rankings und organischem Traffic.',
        ],
      },
    ],
  },

  skills: {
    label: '// 04. fähigkeiten',
    title: 'Tech-<span class="accent-text">Stack</span>',
    subtitle: 'Werkzeuge und Technologien, zu denen ich regelmäßig greife.',
    categories: ['Sprachen', 'Frontend', 'Backend & Daten', 'Testing & QA', 'Tools & DevOps', 'Spezialtechnologien'],
    levels: {
      Advanced: 'Fortgeschritten',
      Proficient: 'Versiert',
      Intermediate: 'Mittelstufe',
      Exploring: 'In Einarbeitung',
    },
  },

  contact: {
    label: '// 05. kontakt',
    title: 'Lass uns <span class="accent-text">vernetzen</span>',
    desc:
      'Hast du ein Projekt im Kopf oder möchtest einfach fachsimpeln? Ich bin offen für Freelance-Arbeit, Kooperationen und interessante Gespräche.',
    rowEmail: 'E-Mail',
    rowGithub: 'GitHub',
    rowPhone: 'Telefon',
    rowLocation: 'Standort',
    locationValue: 'Piaseczno, Masowien, Polen',
    ctaBadge: 'Verfügbar für Aufträge',
    ctaHeading: 'Bereit, etwas zu starten?',
    ctaBody: 'Ob Web-App, Automatisierungs-Pipeline oder einfach ein Gespräch — schreib mir.',
    ctaBtn: 'Nachricht senden',
    footerBuilt: 'Erstellt mit',
    footerTip: 'Probier das Terminal in der Ecke ↘',
  },

  terminal: {
    toggleOpen: 'Terminal öffnen',
    toggleMinimize: 'Terminal minimieren',
    placeholder: 'Befehl eingeben…',
    welcome:
      '<span class="tc-green">Willkommen!</span> Gib <span class="tc-accent">help</span> für verfügbare Befehle ein. Nutze <span class="tc-accent">↑↓</span> für den Verlauf, <span class="tc-accent">Tab</span> zum Autovervollständigen.',
    help: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:6px">Verfügbare Befehle:</div>
  <div class="tc-grid">
    <span class="tc-accent">help</span>            <span class="tc-dim">diese Meldung anzeigen</span>
    <span class="tc-accent">ls</span>              <span class="tc-dim">alle Bereiche auflisten</span>
    <span class="tc-accent">goto &lt;bereich&gt;</span>  <span class="tc-dim">zu Bereich navigieren</span>
    <span class="tc-accent">whoami</span>          <span class="tc-dim">Bio anzeigen</span>
    <span class="tc-accent">skills</span>          <span class="tc-dim">Tech-Stack auflisten</span>
    <span class="tc-accent">projects</span>        <span class="tc-dim">aktuelle Arbeit zeigen</span>
    <span class="tc-accent">contact</span>         <span class="tc-dim">Kontaktdaten</span>
    <span class="tc-accent">github</span>          <span class="tc-dim">GitHub-Profil öffnen</span>
    <span class="tc-accent">lang &lt;pl{'|'}en{'|'}de&gt;</span> <span class="tc-dim">Sprache wechseln</span>
    <span class="tc-accent">clear</span>           <span class="tc-dim">Terminal leeren</span>
  </div>
  <div class="tc-dim" style="margin-top:8px">Tipp: Gib einen Bereichsnamen direkt ein, um zu navigieren.</div>
</div>`,
    lsTitle: 'Bereiche:',
    whoami: `<div class="tc-block">
  <div><span class="tc-green">Piotr Łatyński</span> — Softwareentwickler</div>
  <div class="tc-dim">📍 Piaseczno, Masowien, Polen</div>
  <div class="tc-dim">🐍 Python · JavaScript · Vue.js · FastAPI · Playwright · PostgreSQL</div>
  <div class="tc-dim">✉  imaginative.input{'@'}gmail.com</div>
  <div class="tc-dim">🐙 github.com/imaginativeInput</div>
</div>`,
    skills: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Tech-Stack:</div>
  <div><span class="tc-accent">Sprachen   </span> <span class="tc-dim">Python · JavaScript · SQL</span></div>
  <div><span class="tc-accent">Frontend   </span> <span class="tc-dim">Vue.js · HTML/CSS</span></div>
  <div><span class="tc-accent">Backend    </span> <span class="tc-dim">FastAPI · PostgreSQL · SQLite</span></div>
  <div><span class="tc-accent">Testing    </span> <span class="tc-dim">Playwright · Selenium · PyTest · Postman</span></div>
  <div><span class="tc-accent">Tools      </span> <span class="tc-dim">Git · Azure DevOps · Jira · Swagger</span></div>
  <div><span class="tc-accent">Spezial    </span> <span class="tc-dim">Taichi Lang · OCR/CV</span></div>
</div>`,
    projects: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Projekte:</div>
  <div>🏠 <span class="tc-accent">Domek Rzepiska — Ferienvermietung</span> <span class="tc-dim">[abgeschlossen]</span></div>
  <div class="tc-dim" style="padding-left:20px">Vue.js · FastAPI · domekrzepiska.pl</div>
  <div style="margin-top:5px">🍽️ <span class="tc-accent">Restaurant-Anwendungs-Engine</span> <span class="tc-dim">[in Arbeit]</span></div>
  <div class="tc-dim" style="padding-left:20px">Vue.js · FastAPI · CSS</div>
  <div style="margin-top:5px">🎮 <span class="tc-accent">2D-Physik-Puzzlespiel</span> <span class="tc-dim">[in Arbeit]</span></div>
  <div class="tc-dim" style="padding-left:20px">Python · Pygame · Prozedurale Generierung</div>
  <div style="margin-top:5px">🤖 <span class="tc-accent">Automatisiertes Chatbot-System</span> <span class="tc-dim">[in Arbeit]</span></div>
  <div class="tc-dim" style="padding-left:20px">Python · Playwright · PostgreSQL</div>
</div>`,
    contact: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Kontakt:</div>
  <div>✉  <span class="tc-accent">imaginative.input{'@'}gmail.com</span></div>
  <div>📱 <span class="tc-accent">+48 514 233 672</span></div>
  <div>🐙 <span class="tc-accent">github.com/imaginativeInput</span></div>
  <div>📍 <span class="tc-dim">Piaseczno, Masowien, Polen</span></div>
</div>`,
    githubOpening: '✓ GitHub-Profil wird geöffnet…',
    navigating: '✓ Navigiere zu',
    gotoUsage: "Verwendung: goto <bereich>  {'|'}  Bereiche: {sections}",
    sectionNotFound: 'Bereich „{target}“ nicht gefunden. Verfügbar: {sections}',
    notFound: 'Befehl nicht gefunden: {cmd}. Gib help für verfügbare Befehle ein.',
    langSet: '✓ Sprache geändert auf',
    langUsage: 'Verwendung: lang <pl{'|'}en{'|'}de>',
  },
}
