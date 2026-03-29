<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <p class="section-label reveal">// 04. skills</p>
      <h2 class="section-title reveal reveal-delay-1">
        Tech <span class="gradient-text">stack</span>
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
            <span class="cat-icon" aria-hidden="true">{{ cat.icon }}</span>
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
    icon: '⚙️',
    name: 'Languages',
    skills: [
      { name: 'Python',     level: 85, label: 'Advanced' },
      { name: 'JavaScript', level: 75, label: 'Proficient' },
      { name: 'SQL',        level: 72, label: 'Proficient' },
    ],
  },
  {
    icon: '🖥️',
    name: 'Frontend',
    skills: [
      { name: 'Vue.js',    level: 74, label: 'Proficient' },
      { name: 'HTML/CSS',  level: 85, label: 'Advanced' },
    ],
  },
  {
    icon: '🔧',
    name: 'Backend & Data',
    skills: [
      { name: 'FastAPI',    level: 82, label: 'Proficient' },
      { name: 'PostgreSQL', level: 60, label: 'Intermediate' },
      { name: 'SQLite',     level: 70, label: 'Proficient' },
    ],
  },
  {
    icon: '🧪',
    name: 'Testing & QA',
    skills: [
      { name: 'Playwright', level: 82, label: 'Proficient' },
      { name: 'Selenium',   level: 86, label: 'Advanced' },
      { name: 'PyTest',     level: 76, label: 'Proficient' },
      { name: 'Postman',    level: 70, label: 'Proficient' },
    ],
  },
  {
    icon: '🛠️',
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub',  level: 72, label: 'Advanced' },
      { name: 'Azure DevOps',  level: 76, label: 'Proficient' },
      { name: 'Jira',          level: 67, label: 'Intermediate' },
      { name: 'Swagger',       level: 75, label: 'Proficient' },
    ],
  },
  {
    icon: '✨',
    name: 'Specialised Tech',
    skills: [
      { name: 'Taichi Lang', level: 50, label: 'Exploring' },
      { name: 'OCR / CV',    level: 64, label: 'Intermediate' },
    ],
  },
]
</script>

<style scoped>
.skills-section {
  background: linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.025) 50%, transparent 100%);
}

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
  transition: var(--transition);
}
.skill-cat:hover {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
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

.cat-icon { font-size: 1rem; }

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
  background: var(--surface-2);
  border-radius: 999px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  width: 0;
  background: var(--gradient);
  border-radius: 999px;
  animation: fill-bar 1.2s ease forwards;
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
