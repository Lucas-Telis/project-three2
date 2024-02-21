import './style.css'

const proyectos = [
    {
        image:'https://i.imgur.com/CtcQgG0.png',
        name: 'Dragon Ball-GOKU',
        link: 'https://dragonball.fandom.com/es/wiki/Son_Goku',
    },
    {
        image: 'https://i.imgur.com/E5FuayM.png',
        name: 'Zooko',
        link: 'https://aesthetic-babka-def440.netlify.app/',
    },
    {
        image: 'https://i.imgur.com/nc7vh62.png',
        name: 'Ralph Lauren',
        link: 'https://www.ralphlauren.es/?utm_subchannel=brandsearch&utm_source=google&utm_medium=paidsearch&utm_campaign=brand&utm_term=core_exact&utm_content=cid20171038798_crid688667581857_kwralph%20lauren_tidkwd-11662081_pid{productid}&s_kwcid=AL!6316!3!688667581857!e!!g!!ralph%20lauren&label=Spring-2024&gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RVIV4DEcePCs6wJISUawAxvV3O7ITq3bTYQgHXuFFHbrPF1kOKk3FMaArLAEALw_wcB',
    },
    {
        image: 'https://i.imgur.com/lkj6sXJ.png',
        name: 'Valentino',
        link: 'https://www.valentino.com/es-es/?tp=160178&utm_campaign=1.Valentino_ES_SEA_B_Pure-Brand+%5BE%5D&utm_source=GOOGLE&utm_medium=cpc&utm_content=B_Pure-Brand+%5BE%5D&utm_term=valentino&utm_country=ES&utm_type=SEARCH&s_kwcid=AL!11557!3!689440910396!p43924566875!B_Pure-Brand+%5BE%5D!GOOGLE!!valentino&gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RWIxynAlWtjkCjY1tRUTppS6XPvssPQCWm1N6Pwystar-JqrGWu4h8aAs4_EALw_wcB&gclsrc=aw.ds',
    },
    {
        image: 'https://i.imgur.com/3T8MoIt.png',
        name: 'Volkswagen',
        link: 'https://www.volkswagen.es/es/modelos/tiguan-hibrido-enchufable.html?adchan=sem&campaign=03805856_NC_IMC_OFO_CPA_TIG_TPV_SUV_ESP_NU_SEAH_PSEAC_SRMAX_MIXED_GAD_GADW_CPA_NU_MOD_NU_A25-45_NU_ES_NU_NU_PHD202402925351&adgroup=&publisher=GOOGLE&adcr=&adpl=GOOGLE&adlid=71700000114888750&country=ES&language=ES&gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RWzxYXlSMBk8YjyzRhbiTMDq09W-jPt-bmh6XzTJQw5F_1CQhD0gucaAsuZEALw_wcB&gclsrc=aw.ds',
    },
];

export const renderProjects = () => {
    const main1 = document.querySelector("#main");
    const ulProjects1 = document.createElement("ul");
    ulProjects1.className = 'projects-list'
    proyectos.forEach((proyecto) => {
        ulProjects1.innerHTML += `
        <li>
            <img class="projects-img" src="${proyecto.image}" alt ="${proyecto.name}"
            <div class="li-content">
            <h2>${proyecto.name}</h2>
            <a href="${proyecto.link}">Link</a>
            </div>
        </li>`;
    });
    main1.appendChild(ulProjects1);
};