import week1 from './flutter_codes/week1.js';

import week2 from './flutter_codes/week2/week2.js';
import week2_task1 from './flutter_codes/week2/task1.js';
import week2_task2 from './flutter_codes/week2/task2.js';
import week2_task3 from './flutter_codes/week2/task3.js';

import week3 from './flutter_codes/week3/week3.js';
import week3_task1 from './flutter_codes/week3/task1.js';

import week4_task1 from './flutter_codes/week4/task1.js';
import week4_task2 from './flutter_codes/week4/task2.js';
import week4_task3 from './flutter_codes/week4/task3.js';
import week4_task4 from './flutter_codes/week4/task4.js';

import week5_task1 from './flutter_codes/week5/task1.js';
import week5_task2 from './flutter_codes/week5/task2.js';

import week6_task1 from './flutter_codes/week6/task1.js';
import week6_task2 from './flutter_codes/week6/task2.js';
import week6_task3 from './flutter_codes/week6/task3.js';

import week7_task1 from './flutter_codes/week7/task1.js';
import week7_task2 from './flutter_codes/week7/task2.js';
import week7_task3 from './flutter_codes/week7/task3.js';

import week8_task1 from './flutter_codes/week8/task1.js';
import week8_task2 from './flutter_codes/week8/task2.js';
import week8_task3 from './flutter_codes/week8/task3.js';

const tasks = {
  1: { type: 'theory', ...week1 },
  2: { type: 'mixed', ...week2, programs: [week2_task1, week2_task2, week2_task3] },
  3: { type: 'mixed', ...week3, title: 'Installation of Android studio in Ubuntu, Display Text and Image using Container', programs: [week3_task1] },
  4: { type: 'mixed', title: 'Implement layout structures', programs: [week4_task1, week4_task2, week4_task3, week4_task4] },
  5: { type: 'mixed', title: 'Adaptable UI for different screen sizes', programs: [week5_task1, week5_task2] },
  6: { type: 'mixed', title: 'Navigation between multiple screens, Form validation and displaying error messages', programs: [week6_task1, week6_task2, week6_task3] },
  7: { type: 'theory', title: 'Creating, Styling Custom Widgets and Adding Animations to Enhance UX', programs: [week7_task1, week7_task2] },
  8: { type: 'mixed', title: 'Login screen, profile card and widget app', programs: [week8_task1, week8_task2, week8_task3] }
};

// --- Function to Show Task Page ---
function showTask(taskNumber) {
  const task = tasks[taskNumber];
  if (!task) {
    alert('Task data not found.');
    return;
  }

  document.getElementById('homePage').style.display = 'none';
  document.getElementById('taskPage').style.display = 'block';
  document.getElementById('taskTitle').textContent = task.title || '';

  const contentDiv = document.getElementById('taskContent');
  contentDiv.innerHTML = '';

  // --- Theory ---
  if (task.type === 'theory' || task.type === 'mixed') {
    if (task.content) {
      const theoryDiv = document.createElement('div');
      theoryDiv.className = 'theory-content';
      theoryDiv.innerHTML = task.content;
      contentDiv.appendChild(theoryDiv);
    }
  }

  // --- Practical ---
  if (task.type === 'practical' || task.type === 'mixed') {
    if (task.programs && Array.isArray(task.programs)) {
      task.programs.forEach((program, index) => {
        const programDiv = document.createElement('div');
        programDiv.className = 'program-block';

        const title = document.createElement('h3');
        title.textContent = program.name;

        const codeBox = document.createElement('pre');
        codeBox.className = 'code-box';
        codeBox.textContent = program.code;

        const runBtn = document.createElement('button');
        runBtn.textContent = '▶ Run';
        runBtn.className = 'run-btn';
        runBtn.onclick = () => {
          if (program.output) {
            showOutput(index, program.output);
          } else {
            document.getElementById(`output-${index}`).innerHTML = "<p>No output available.</p>";
          }
        };

        const outputDiv = document.createElement('div');
        outputDiv.className = 'output-div';
        outputDiv.id = `output-${index}`;

        programDiv.appendChild(title);
        programDiv.appendChild(codeBox);
        programDiv.appendChild(runBtn);
        programDiv.appendChild(outputDiv);
        contentDiv.appendChild(programDiv);
      });
    }
  }
}

// --- Show Output Image ---
function showOutput(index, imagePath) {
  const outputDiv = document.getElementById(`output-${index}`);
  outputDiv.innerHTML = `
    <img src="${imagePath}" alt="Output Screenshot" class="output-image" 
         onerror="this.src='images/placeholder.png'">
  `;
}

// --- Go Back ---
function goBack() {
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('taskPage').style.display = 'none';
}

// 👇 Make functions available globally
window.showTask = showTask;
window.goBack = goBack;


// ✅ Page transition animation
function fadeInSection(sectionId) {
  const section = document.getElementById(sectionId);
  setTimeout(() => section.classList.add('show'), 10);
}

function fadeOutSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.remove('show');
}

// Override your showTask and goBack transitions
const originalShowTask = window.showTask;
window.showTask = function(taskNumber) {
  fadeOutSection('homePage');
  setTimeout(() => {
    originalShowTask(taskNumber);
    fadeInSection('taskPage');
  }, 400);
};

const originalGoBack = window.goBack;
window.goBack = function() {
  fadeOutSection('taskPage');
  setTimeout(() => {
    originalGoBack();
    fadeInSection('homePage');
  }, 400);
};

// Trigger initial fade in
document.addEventListener('DOMContentLoaded', () => {
  fadeInSection('homePage');
});
