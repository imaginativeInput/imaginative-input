<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <p class="section-label reveal">// 04. skills</p>
      <h2 class="section-title reveal reveal-delay-1">
        Tech <span class="accent-text">stack</span>
      </h2>
      <p class="section-subtitle reveal reveal-delay-1">
        Tools and technologies I reach for regularly.
      </p>

      <div class="skills-grid">
        <div
          class="skill-cat reveal"
          :class="`reveal-delay-${i + 1}`"
          v-for="(cat, i) in categories"
          :key="cat.name"
        >
          <h3 class="cat-heading">
            <span class="cat-icon" aria-hidden="true" v-html="icons[cat.icon]"></span>
            {{ cat.name }}
          </h3>

          <div class="skill-rows">
            <div class="skill-row" v-for="s in cat.skills" :key="s.name">
              <div class="skill-top">
                <span class="skill-name">{{ s.name }}</span>
                <span class="skill-label">{{ s.label }}</span>
              </div>
              <div class="skill-track">
                <div
                  class="skill-bar"
                  :style="{ '--w': s.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    icon: 'code',
    name: 'Languages',
    skills: [
      { name: 'Python',     level: 85, label: 'Advanced' },
      { name: 'JavaScript', level: 75, label: 'Proficient' },
      { name: 'SQL',        level: 72, label: 'Proficient' },
    ],
  },
  {
    icon: 'monitor',
    name: 'Frontend',
    skills: [
      { name: 'Vue.js',    level: 74, label: 'Proficient' },
      { name: 'HTML/CSS',  level: 85, label: 'Advanced' },
    ],
  },
  {
    icon: 'database',
    name: 'Backend & Data',
    skills: [
      { name: 'FastAPI',    level: 82, label: 'Proficient' },
      { name: 'PostgreSQL', level: 60, label: 'Intermediate' },
      { name: 'SQLite',     level: 70, label: 'Proficient' },
    ],
  },
  {
    icon: 'check',
    name: 'Testing & QA',
    skills: [
      { name: 'Playwright', level: 82, label: 'Proficient' },
      { name: 'Selenium',   level: 86, label: 'Advanced' },
      { name: 'PyTest',     level: 76, label: 'Proficient' },
      { name: 'Postman',    level: 70, label: 'Proficient' },
    ],
  },
  {
    icon: 'gear',
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub',  level: 72, label: 'Advanced' },
      { name: 'Azure DevOps',  level: 76, label: 'Proficient' },
      { name: 'Jira',          level: 67, label: 'Intermediate' },
      { name: 'Swagger',       level: 75, label: 'Proficient' },
    ],
  },
  {
    icon: 'sparkles',
    name: 'Specialised Tech',
    skills: [
      { name: 'Taichi Lang', level: 50, label: 'Exploring' },
      { name: 'OCR / CV',    level: 64, label: 'Intermediate' },
    ],
  },
]

const icons = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="m4.9 4.9 2.1 2.1"/><path d="m17 17 2.1 2.1"/><path d="m19.1 4.9-2.1 2.1"/><path d="m7 17-2.1 2.1"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.8L18.5 9.5l-4.6 1.7L12 16l-1.9-4.8L5.5 9.5l4.6-1.7z"/><path d="M19 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/></svg>`,
}
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 52px;
}

.skill-cat {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px 28px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.skill-cat:hover {
  border-color: var(--border-bright);
  box-shadow: var(--shadow-card);
}

.cat-heading {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.cat-icon {
  display: inline-flex;
  align-items: center;
  color: var(--accent);
}
.cat-icon :deep(svg) {
  width: 18px;
  height: 18px;
}

.skill-rows {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.skill-row {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.skill-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.skill-name {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text);
}

.skill-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
}

.skill-track {
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  width: 0;
  background: var(--accent-solid);
  border-radius: 999px;
  animation: fill-bar 1.2s var(--ease-out) forwards;
  animation-play-state: paused;
}

/* Trigger animation when parent becomes visible */
.skill-cat.visible .skill-bar {
  animation-play-state: running;
  width: var(--w);
}

@keyframes fill-bar {
  from { width: 0; }
  to   { width: var(--w); }
}

@media (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 580px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
