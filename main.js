import { renderHome } from './components/home';
import { renderExperience } from './components/experience';
import { renderProjects } from './components/projects';
import './style.css'

const app1 = document.querySelector('#app');

const initalApp = () => {
  app1.innerHTML = `
    <main id="main">
    </main>
  `;
  renderHome();
};
initalApp();

const main1 = document.querySelector('#main')
const paintHome = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  console.log('El link dirige a:', linkHref );

  main1.innerHTML = '';
  renderHome();
}

const paintExperience = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  console.log('El link dirige a:', linkHref );

  main1.innerHTML = '';
  renderExperience();
}

const paintProjects = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  console.log('El link dirige a:', linkHref );

  main1.innerHTML = '';
  renderProjects();
}

const homeL = document.querySelector('.home-link');
homeL.addEventListener('click', paintHome);

const experienceL = document.querySelector('.experience-link');
experienceL.addEventListener('click', paintExperience);

const projectsL = document.querySelector('.projects-link');
projectsL.addEventListener('click', paintProjects);