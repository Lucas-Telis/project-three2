import './style.css'

const me = {
    image: 'https://i.imgur.com/TCF1jbK.jpeg',
    name: 'Lucas Emanuel Telis Espindola',
    info: 'Estudiante en ThePowerMBA // Futuro desarrollador web',
    description: 'Hola! soy Lucas, actualmente tengo 20 años, nací en el año 2003 en Uruguay pero hace un año estoy residiendo en España trabajando(Hosteleria) y estudiando(Desarrollo web).'
};

const links = {
    githubLogo: 'https://i.imgur.com/wToK8x3.png',
    githubHref: 'https://github.com/Lucas-Telis',
    linkedinLogo: 'https://i.imgur.com/nstKY1A.png',
    linkedinHref: 'https://www.linkedin.com/in/lucas-emanuel-telis-espindola-288667232/',
};

export const renderHome = () => {
    const main1 = document.querySelector("#main");

    main1.innerHTML = `<div class="about-me">
        <img class="me-img" src="${me.image}" alt="Perfil">
        <h2 class="me-name" alt ="Nombre">${me.name}</h2>
        <h4 class="me-info" alt ="Ocupaciòn">${me.info}</h4>
        <h3 class="me-description" alt="Descripción">${me.description}</h3>
            <article class="link-container">
                <a class="work-link" href="${links.githubHref}"><img class ="logo-img" src ="${links.githubLogo}" alt="github"></a>
                <a class="work-link" href="${links.linkedinHref}"><img class ="logo-img" src ="${links.linkedinLogo}" alt="linkedin"></a>
            </article>
    </div>`
};