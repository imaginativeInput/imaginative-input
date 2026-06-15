export default {
  nav: {
    home: 'home',
    about: 'about',
    projects: 'projects',
    experience: 'experience',
    skills: 'skills',
    contact: 'contact',
    hire: 'Hire me',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  hero: {
    badge: 'Available for freelance projects',
    roles: ['Software Developer', 'Automation Engineer', 'QA Specialist', 'Freelancer'],
    tagline:
      'Turning complex problems into clean automation, tested APIs, and polished full-featured applications.',
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    stackLabel: 'stack //',
    scrollAria: 'Scroll to about',
    imgAlt: 'Piotr Łatyński',
  },

  about: {
    label: '// 01. about',
    title: 'A little about <span class="accent-text">me</span>',
    desc1:
      "I'm a software developer from Piaseczno, Poland with a background in both development and quality assurance. I have a strong eye for detail — a habit built from years of professional testing — and I apply it to everything I write.",
    desc2:
      "My work spans automation scripts, REST APIs, and full-featured responsive applications. I enjoy finding the simplest path through a complex problem, and I'm always looking for things to learn along the way.",
    metaLocation: 'Location',
    metaEmail: 'Email',
    metaGithub: 'GitHub',
    metaLanguages: 'Languages',
    locationValue: 'Piaseczno, Masovian, Poland',
    languagesValue: 'Polish & English',
    interests: 'Interests',
    hobbies: ['Songwriting', 'Visual Arts', 'Gym', 'Parkour', 'Physics', 'Robotics', 'Gaming'],
  },

  projects: {
    label: '// 02. projects',
    title: 'My <span class="accent-text">projects</span>',
    subtitle: 'Real-world projects — from client websites and automation to game development.',
    visit: 'Visit website',
    statusCompleted: 'Completed',
    statusInProgress: 'In progress',
    items: [
      {
        title: 'Domek Rzepiska — Vacation Rental',
        description:
          'A complete vacation rental website with a polished layout, interactive image viewer for property photos, and a reservation form with email integration.',
        features: [
          'Interactive image gallery & lightbox viewer',
          'Reservation form with email sender',
          'Clean, responsive layout',
          'SEO-friendly structure',
        ],
      },
      {
        title: 'Restaurant Application Engine with CMS — SaaS platform',
        description:
          'A full-featured engine for building restaurant websites — elegant, responsive design with smooth navigation, an intuitive reservation and online ordering flow, a custom CMS, a well-thought-out database, built-in loyalty and marketing features, and a fast asynchronous API gluing everything together.',
        features: [
          'Responsive, mobile-first design',
          'Interactive menu with category browsing',
          'Online reservation and ordering system',
          'Custom CMS for menu and content management',
        ],
      },
      {
        title: '2D Physics Puzzle Game',
        description:
          'A 2D action/puzzle game with heavy focus on physics simulation — an educational game that teaches physics through fun gameplay, featuring procedural generation and an original soundtrack composed by me.',
        features: [
          'Realistic physics simulation engine',
          'Procedurally generated levels',
          'Educational physics concepts through gameplay',
          'Original soundtrack & sound design',
        ],
      },
      {
        title: 'Automated Chatbot System',
        description:
          'An intelligent outreach automation platform that scrapes and analyzes user profiles, initiates personalised conversations, and generates context-aware AI responses — with minimal manual input.',
        features: [
          'Profile scraping & data enrichment',
          'Automated conversation initiation',
          'Lightweight context database for memory',
          'AI-driven personalized response generation',
        ],
      },
    ],
  },

  experience: {
    label: '// 03. experience',
    title: 'Work <span class="accent-text">history</span>',
    present: 'present',
    items: [
      {
        role: 'Freelance Software Developer',
        period: '2023 — present',
        points: [
          'Python & JavaScript automation, workflow tooling, and OCR pipeline development.',
          'Full-stack development and testing — Vue.js, FastAPI, PostgreSQL, HTML, CSS.',
          'Built a 2D Python game with procedural generation and physics simulation; used Taichi Lang for parallelization.',
        ],
      },
      {
        role: 'Software QA Tester',
        period: '2020 — 2022',
        points: [
          'Test case design and execution across Windows, console, and VR platforms.',
          'API testing with Postman; network traffic analysis with Fiddler.',
          'Test management and reporting via Azure DevOps; participated in Agile sprints.',
        ],
      },
      {
        role: 'Website Maintenance Technician',
        period: '2020',
        points: [
          'WordPress maintenance, plugin updates, and security monitoring for a local business website.',
          'Frontend modifications (HTML/CSS), and content updates to enhance user experience.',
          'System integration (payments, email automation) and performance optimization (caching, image compression).',
          'Manual Testing, and customer support.',
          'Implemented SEO best practices, improving search engine rankings and organic traffic.',
        ],
      },
    ],
  },

  skills: {
    label: '// 04. skills',
    title: 'Tech <span class="accent-text">stack</span>',
    subtitle: 'Tools and technologies I reach for regularly.',
    categories: ['Languages', 'Frontend', 'Backend & Data', 'Testing & QA', 'Tools & DevOps', 'Specialised Tech'],
    levels: {
      Advanced: 'Advanced',
      Proficient: 'Proficient',
      Intermediate: 'Intermediate',
      Exploring: 'Exploring',
    },
  },

  contact: {
    label: '// 05. contact',
    title: "Let's <span class=\"accent-text\">connect</span>",
    desc:
      "Got a project in mind or just want to talk shop? I'm open to freelance work, collaborations, and interesting conversations.",
    rowEmail: 'Email',
    rowGithub: 'GitHub',
    rowPhone: 'Phone',
    rowLocation: 'Location',
    locationValue: 'Piaseczno, Masovian, Poland',
    ctaBadge: 'Available for work',
    ctaHeading: 'Ready to start something?',
    ctaBody: "Whether it's a web app, an automation pipeline, or just a chat — send me a message.",
    ctaBtn: 'Send a message',
    footerBuilt: 'Built with',
    footerTip: 'Try the terminal in the corner ↘',
  },

  terminal: {
    toggleOpen: 'Open terminal',
    toggleMinimize: 'Minimize terminal',
    placeholder: 'type a command…',
    welcome:
      '<span class="tc-green">Welcome!</span> Type <span class="tc-accent">help</span> for available commands. Use <span class="tc-accent">↑↓</span> for history, <span class="tc-accent">Tab</span> to autocomplete.',
    help: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:6px">Available commands:</div>
  <div class="tc-grid">
    <span class="tc-accent">help</span>            <span class="tc-dim">show this message</span>
    <span class="tc-accent">ls</span>              <span class="tc-dim">list all sections</span>
    <span class="tc-accent">goto &lt;section&gt;</span> <span class="tc-dim">navigate to section</span>
    <span class="tc-accent">whoami</span>          <span class="tc-dim">display bio</span>
    <span class="tc-accent">skills</span>          <span class="tc-dim">list tech stack</span>
    <span class="tc-accent">projects</span>        <span class="tc-dim">show current work</span>
    <span class="tc-accent">contact</span>         <span class="tc-dim">contact info</span>
    <span class="tc-accent">github</span>          <span class="tc-dim">open GitHub profile</span>
    <span class="tc-accent">lang &lt;pl{'|'}en{'|'}de&gt;</span> <span class="tc-dim">switch language</span>
    <span class="tc-accent">clear</span>           <span class="tc-dim">clear terminal</span>
  </div>
  <div class="tc-dim" style="margin-top:8px">Tip: type a section name directly to navigate.</div>
</div>`,
    lsTitle: 'Sections:',
    whoami: `<div class="tc-block">
  <div><span class="tc-green">Piotr Łatyński</span> — Software Developer</div>
  <div class="tc-dim">📍 Piaseczno, Masovian, Poland</div>
  <div class="tc-dim">🐍 Python · JavaScript · Vue.js · FastAPI · Playwright · PostgreSQL</div>
  <div class="tc-dim">✉  imaginative.input{'@'}gmail.com</div>
  <div class="tc-dim">🐙 github.com/imaginativeInput</div>
</div>`,
    skills: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Tech Stack:</div>
  <div><span class="tc-accent">Languages  </span> <span class="tc-dim">Python · JavaScript · SQL</span></div>
  <div><span class="tc-accent">Frontend   </span> <span class="tc-dim">Vue.js · HTML/CSS</span></div>
  <div><span class="tc-accent">Backend    </span> <span class="tc-dim">FastAPI · PostgreSQL · SQLite</span></div>
  <div><span class="tc-accent">Testing    </span> <span class="tc-dim">Playwright · Selenium · PyTest · Postman</span></div>
  <div><span class="tc-accent">Tools      </span> <span class="tc-dim">Git · Azure DevOps · Jira · Swagger</span></div>
  <div><span class="tc-accent">Specialised</span> <span class="tc-dim">Taichi Lang · OCR/CV</span></div>
</div>`,
    projects: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Projects:</div>
  <div>🏠 <span class="tc-accent">Domek Rzepiska — Vacation Rental</span> <span class="tc-dim">[completed]</span></div>
  <div class="tc-dim" style="padding-left:20px">Vue.js · FastAPI · domekrzepiska.pl</div>
  <div style="margin-top:5px">🍽️ <span class="tc-accent">Restaurant Application Engine</span> <span class="tc-dim">[in progress]</span></div>
  <div class="tc-dim" style="padding-left:20px">Vue.js · FastAPI · CSS</div>
  <div style="margin-top:5px">🎮 <span class="tc-accent">2D Physics Puzzle Game</span> <span class="tc-dim">[in progress]</span></div>
  <div class="tc-dim" style="padding-left:20px">Python · Pygame · Procedural Generation</div>
  <div style="margin-top:5px">🤖 <span class="tc-accent">Automated Chatbot System</span> <span class="tc-dim">[in progress]</span></div>
  <div class="tc-dim" style="padding-left:20px">Python · Playwright · PostgreSQL</div>
</div>`,
    contact: `<div class="tc-block">
  <div class="tc-green" style="margin-bottom:4px">Contact:</div>
  <div>✉  <span class="tc-accent">imaginative.input{'@'}gmail.com</span></div>
  <div>📱 <span class="tc-accent">+48 514 233 672</span></div>
  <div>🐙 <span class="tc-accent">github.com/imaginativeInput</span></div>
  <div>📍 <span class="tc-dim">Piaseczno, Masovian, Poland</span></div>
</div>`,
    githubOpening: '✓ Opening GitHub profile…',
    navigating: '✓ Navigating to',
    gotoUsage: "Usage: goto <section>  {'|'}  sections: {sections}",
    sectionNotFound: 'Section "{target}" not found. Available: {sections}',
    notFound: 'command not found: {cmd}. Type help for available commands.',
    langSet: '✓ language set to',
    langUsage: 'Usage: lang <pl{'|'}en{'|'}de>',
  },
}
