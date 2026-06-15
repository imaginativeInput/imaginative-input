export default {
  nav: {
    home: 'start',
    about: 'o mnie',
    projects: 'projekty',
    experience: 'doświadczenie',
    skills: 'umiejętności',
    contact: 'kontakt',
    hire: 'Zatrudnij mnie',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    language: 'Język',
  },

  hero: {
    badge: 'Otwarty na projekty freelance',
    roles: ['Programista', 'Inżynier automatyzacji', 'Specjalista QA', 'Freelancer'],
    tagline:
      'Zamieniam skomplikowane wyzwania w przejrzystą automatyzację, solidnie przetestowane API i dopracowane aplikacje z prawdziwego zdarzenia.',
    viewProjects: 'Zobacz projekty',
    getInTouch: 'Napisz do mnie',
    stackLabel: 'stack //',
    scrollAria: 'Przewiń do sekcji o mnie',
    imgAlt: 'Piotr Łatyński',
  },

  about: {
    label: '// 01. o mnie',
    title: 'Trochę <span class="accent-text">o mnie</span>',
    desc1:
      'Jestem programistą z Piaseczna. Mam doświadczenie zarówno w programowaniu, jak i w zapewnianiu jakości, dzięki czemu przywiązuję dużą wagę do szczegółów — to nawyk wyniesiony z lat pracy jako tester, który przenoszę na wszystko, co tworzę.',
    desc2:
      'Piszę skrypty automatyzujące, REST API oraz rozbudowane, responsywne aplikacje. Lubię znajdować najprostszą drogę przez złożony problem i przy okazji nieustannie uczę się czegoś nowego.',
    metaLocation: 'Lokalizacja',
    metaEmail: 'E-mail',
    metaGithub: 'GitHub',
    metaLanguages: 'Języki',
    locationValue: 'Piaseczno, Mazowieckie, Polska',
    languagesValue: 'polski i angielski',
    interests: 'Zainteresowania',
    hobbies: ['Pisanie piosenek', 'Sztuki wizualne', 'Siłownia', 'Parkour', 'Fizyka', 'Robotyka', 'Gry'],
  },

  projects: {
    label: '// 02. projekty',
    title: 'Moje <span class="accent-text">projekty</span>',
    subtitle: 'Wybrane projekty — od stron dla klientów, przez automatyzację, po tworzenie gier.',
    visit: 'Odwiedź stronę',
    statusCompleted: 'Ukończony',
    statusInProgress: 'W trakcie',
    items: [
      {
        title: 'Domek Rzepiska — Wynajem wakacyjny',
        description:
          'Kompletna strona obiektu na wynajem wakacyjny — dopracowany układ, interaktywna galeria zdjęć i formularz rezerwacji z powiadomieniami e-mail.',
        features: [
          'Interaktywna galeria zdjęć z podglądem lightbox',
          'Formularz rezerwacji z wysyłką maili',
          'Przejrzysty, responsywny układ',
          'Struktura przyjazna SEO',
        ],
      },
      {
        title: 'Silnik aplikacji restauracyjnych z CMS — platforma SaaS',
        description:
          'Rozbudowany silnik do tworzenia stron dla restauracji — elegancki, responsywny wygląd z płynną nawigacją, intuicyjny proces rezerwacji i zamówień online, autorski CMS, przemyślana baza danych, wbudowane mechanizmy lojalnościowe i marketingowe oraz szybkie, asynchroniczne API, które spina to wszystko w całość.',
        features: [
          'Responsywny wygląd w podejściu mobile-first',
          'Interaktywne menu z przeglądaniem kategorii',
          'System rezerwacji i zamówień online',
          'Autorski CMS do zarządzania menu i treścią',
        ],
      },
      {
        title: 'Gra logiczna 2D oparta na fizyce',
        description:
          'Logiczno-zręcznościowa gra 2D z naciskiem na symulację fizyki — uczy fizyki przez dobrą zabawę, korzysta z generowania proceduralnego i ma ścieżkę dźwiękową mojego autorstwa.',
        features: [
          'Realistyczny silnik symulacji fizyki',
          'Proceduralnie generowane poziomy',
          'Fizyka tłumaczona poprzez rozgrywkę',
          'Autorska muzyka i oprawa dźwiękowa',
        ],
      },
      {
        title: 'Zautomatyzowany system chatbota',
        description:
          'Inteligentna platforma do automatyzacji kontaktu — analizuje profile użytkowników, samodzielnie rozpoczyna spersonalizowane rozmowy i generuje dopasowane do kontekstu odpowiedzi AI, niemal bez udziału człowieka.',
        features: [
          'Pobieranie i wzbogacanie danych o profilach',
          'Automatyczne rozpoczynanie rozmów',
          'Lekka baza kontekstowa w roli pamięci',
          'Spersonalizowane odpowiedzi generowane przez AI',
        ],
      },
    ],
  },

  experience: {
    label: '// 03. doświadczenie',
    title: 'Historia <span class="accent-text">pracy</span>',
    present: 'obecnie',
    items: [
      {
        role: 'Programista freelance',
        period: '2023 — obecnie',
        points: [
          'Automatyzacja w Pythonie i JavaScripcie, narzędzia usprawniające pracę oraz budowa procesów OCR.',
          'Tworzenie i testowanie aplikacji full-stack — Vue.js, FastAPI, PostgreSQL, HTML, CSS.',
          'Stworzyłem grę 2D w Pythonie z generowaniem proceduralnym i symulacją fizyki; do zrównoleglenia obliczeń użyłem Taichi Lang.',
        ],
      },
      {
        role: 'Tester QA',
        period: '2020 — 2022',
        points: [
          'Projektowanie i wykonywanie testów na platformach Windows, konsolowych i VR.',
          'Testy API w Postmanie i analiza ruchu sieciowego w Fiddlerze.',
          'Zarządzanie testami i raportowanie w Azure DevOps; praca w sprintach Agile.',
        ],
      },
      {
        role: 'Technik utrzymania stron WWW',
        period: '2020',
        points: [
          'Utrzymanie WordPressa, aktualizacje wtyczek i monitorowanie bezpieczeństwa strony lokalnej firmy.',
          'Modyfikacje frontendu (HTML/CSS) i aktualizacje treści poprawiające wygodę użytkowników.',
          'Integracja systemów (płatności, automatyzacja maili) i optymalizacja wydajności (cache, kompresja obrazów).',
          'Testy manualne i obsługa klienta.',
          'Wdrożenie dobrych praktyk SEO, co poprawiło pozycje w wyszukiwarce i ruch organiczny.',
        ],
      },
    ],
  },

  skills: {
    label: '// 04. umiejętności',
    title: 'Stos <span class="accent-text">technologiczny</span>',
    subtitle: 'Narzędzia i technologie, po które sięgam na co dzień.',
    categories: ['Języki', 'Frontend', 'Backend i dane', 'Testowanie i QA', 'Narzędzia i DevOps', 'Technologie specjalistyczne'],
    levels: {
      Advanced: 'Zaawansowany',
      Proficient: 'Biegły',
      Intermediate: 'Średniozaawansowany',
      Exploring: 'W trakcie nauki',
    },
  },

  contact: {
    label: '// 05. kontakt',
    title: 'Nawiążmy <span class="accent-text">kontakt</span>',
    desc:
      'Masz pomysł na projekt albo po prostu chcesz pogadać o technologiach? Chętnie podejmę się zlecenia, współpracy lub dobrej rozmowy.',
    rowEmail: 'E-mail',
    rowGithub: 'GitHub',
    rowPhone: 'Telefon',
    rowLocation: 'Lokalizacja',
    locationValue: 'Piaseczno, Mazowieckie, Polska',
    ctaBadge: 'Otwarty na zlecenia',
    ctaHeading: 'Gotowy na nowy projekt?',
    ctaBody: 'Aplikacja webowa, automatyzacja, a może po prostu rozmowa — napisz, a coś wymyślimy.',
    ctaBtn: 'Wyślij wiadomość',
    footerBuilt: 'Zbudowane z',
    footerTip: 'Wypróbuj terminal w rogu ↘',
  },

  terminal: {
    toggleOpen: 'Otwórz terminal',
    toggleMinimize: 'Zminimalizuj terminal',
    placeholder: 'wpisz polecenie…',
    welcome:
      '<span class="tc-green">Cześć!</span> Wpisz <span class="tc-accent">help</span>, aby zobaczyć dostępne polecenia. Użyj <span class="tc-accent">↑↓</span> do historii, <span class="tc-accent">Tab</span> do autouzupełniania.',
    help: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:6px">Dostępne polecenia:</div>
  <div class="tc-grid">
    <span class="tc-accent">help</span>            <span class="tc-dim">pokaż tę pomoc</span>
    <span class="tc-accent">ls</span>              <span class="tc-dim">lista sekcji</span>
    <span class="tc-accent">goto &lt;sekcja&gt;</span>   <span class="tc-dim">przejdź do sekcji</span>
    <span class="tc-accent">whoami</span>          <span class="tc-dim">wyświetl bio</span>
    <span class="tc-accent">skills</span>          <span class="tc-dim">pokaż stos technologiczny</span>
    <span class="tc-accent">projects</span>        <span class="tc-dim">pokaż bieżące projekty</span>
    <span class="tc-accent">contact</span>         <span class="tc-dim">dane kontaktowe</span>
    <span class="tc-accent">github</span>          <span class="tc-dim">otwórz profil GitHub</span>
    <span class="tc-accent">lang &lt;pl{'|'}en{'|'}de&gt;</span> <span class="tc-dim">zmień język</span>
    <span class="tc-accent">clear</span>           <span class="tc-dim">wyczyść terminal</span>
  </div>
  <div class="tc-dim" style="margin-top:8px">Wskazówka: wpisz nazwę sekcji, aby od razu do niej przejść.</div>
</div>`,
    lsTitle: 'Sekcje:',
    whoami: `<div class="tc-block">
  <div><span class="tc-green">Piotr Łatyński</span> — Programista</div>
  <div class="tc-dim">📍 Piaseczno, Mazowieckie, Polska</div>
  <div class="tc-dim">🐍 Python · JavaScript · Vue.js · FastAPI · Playwright · PostgreSQL</div>
  <div class="tc-dim">✉  imaginative.input{'@'}gmail.com</div>
  <div class="tc-dim">🐙 github.com/imaginativeInput</div>
</div>`,
    skills: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Stos technologiczny:</div>
  <div><span class="tc-accent">Języki     </span> <span class="tc-dim">Python · JavaScript · SQL</span></div>
  <div><span class="tc-accent">Frontend   </span> <span class="tc-dim">Vue.js · HTML/CSS</span></div>
  <div><span class="tc-accent">Backend    </span> <span class="tc-dim">FastAPI · PostgreSQL · SQLite</span></div>
  <div><span class="tc-accent">Testy      </span> <span class="tc-dim">Playwright · Selenium · PyTest · Postman</span></div>
  <div><span class="tc-accent">Narzędzia  </span> <span class="tc-dim">Git · Azure DevOps · Jira · Swagger</span></div>
  <div><span class="tc-accent">Specjal.   </span> <span class="tc-dim">Taichi Lang · OCR/CV</span></div>
</div>`,
    projects: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Projekty:</div>
  <div>🏠 <span class="tc-accent">Domek Rzepiska — Wynajem wakacyjny</span> <span class="tc-dim">[ukończony]</span></div>
  <div class="tc-dim" style="padding-left:20px">Vue.js · FastAPI · domekrzepiska.pl</div>
  <div style="margin-top:5px">🍽️ <span class="tc-accent">Silnik aplikacji restauracyjnych</span> <span class="tc-dim">[w trakcie]</span></div>
  <div class="tc-dim" style="padding-left:20px">Vue.js · FastAPI · CSS</div>
  <div style="margin-top:5px">🎮 <span class="tc-accent">Gra logiczna 2D oparta na fizyce</span> <span class="tc-dim">[w trakcie]</span></div>
  <div class="tc-dim" style="padding-left:20px">Python · Pygame · Generowanie proceduralne</div>
  <div style="margin-top:5px">🤖 <span class="tc-accent">Zautomatyzowany system chatbota</span> <span class="tc-dim">[w trakcie]</span></div>
  <div class="tc-dim" style="padding-left:20px">Python · Playwright · PostgreSQL</div>
</div>`,
    contact: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Kontakt:</div>
  <div>✉  <span class="tc-accent">imaginative.input{'@'}gmail.com</span></div>
  <div>📱 <span class="tc-accent">+48 514 233 672</span></div>
  <div>🐙 <span class="tc-accent">github.com/imaginativeInput</span></div>
  <div>📍 <span class="tc-dim">Piaseczno, Mazowieckie, Polska</span></div>
</div>`,
    githubOpening: '✓ Otwieram profil GitHub…',
    navigating: '✓ Przechodzę do',
    gotoUsage: "Użycie: goto <sekcja>  {'|'}  sekcje: {sections}",
    sectionNotFound: 'Nie znaleziono sekcji „{target}”. Dostępne: {sections}',
    notFound: 'nie znaleziono polecenia: {cmd}. Wpisz help, aby zobaczyć dostępne polecenia.',
    langSet: '✓ ustawiono język na',
    langUsage: "Użycie: lang <pl{'|'}en{'|'}de>",
  },
}
