import './style.css'

const experiencias = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Logo_of_Sbarro%2C_LLC.png/640px-Logo_of_Sbarro%2C_LLC.png",
        name: "Sbarro NYC",
        link: "https://sbarro.com/",
        description: "Is a fast food restaurant chain in the United States, of Italian-American origin. It specializes in the sale of New York-style pizza and other Italian-American gastronomy products",
        date: "January 2019-October 2019",
        job: "Shift manager",
    },
    {
        image: "https://media.licdn.com/dms/image/D4E12AQECw3ydasrI3Q/article-cover_image-shrink_720_1280/0/1677524893707?e=2147483647&v=beta&t=E9vZAmbHYC-P-srFikKbtLl8I1orry7nOukwu2XSUB4",
        name: "Mercado Libre",
        link: "https://www.mercadolibre.com.uy/",
        description: "Multinational company of Argentine origin dedicated to electronic commerce in Latin America, with headquarters in Montevideo, Uruguay. Founded in 1999",
        date: "February 2020-August 2020",
        job: "Customer service",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banco_Ita%C3%BA_logo.svg/1011px-Banco_Ita%C3%BA_logo.svg.png",
        name: "Banco ITAU",
        link: "https://www.itau.com.uy/inst/",
        description: "Banco Itaú Uruguay is a unit of Brazil's largest private sector banking group, Itaú Unibanco",
        date: "April 2018-January 2019",
        job: "Cashier assistant",
    },
    {
        image: "https://pbs.twimg.com/profile_images/1478002215600201728/ZwnYduvh_400x400.jpg",
        name: "Salus",
        link: "https://www.salus.com.uy/",
        description: "Uruguayan beverage company, whose industrial base is located in the city of Minas in the department of Lavalleja, 110 km from Montevideo. Manufactures and markets both alcoholic and non-alcoholic beverages",
        date: "May 2017-February 2018",
        job: "Producer assistant",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Logo_de_Conaprole.svg/1200px-Logo_de_Conaprole.svg.png",
        name: "Conaprole",
        link: "https://www.conaprole.uy/",
        description: "Uruguayan cooperative, leader in processing and distribution of fresh milk, as well as in the production of milk byproducts",
        date: "April 2023-2024",
        job: "Head of area",
    },
];

export const renderExperience = () => {
    const ulExperiences1 = document.createElement("ul");
    ulExperiences1.className = "experience-list";

    const main1 = document.querySelector("#main");
    main1.appendChild(ulExperiences1)

    experiencias.forEach((experiencia) => {
        ulExperiences1.innerHTML += `
        <li>
        <div class="li-content2">
        <img class="img-exp" src="${experiencia.image}" alt="${experiencia.name}">
        <h2>${experiencia.name}<br>${experiencia.job} - ${experiencia.date}</h2>
        <p>${experiencia.description}</p>
        <a href="${experiencia.link}">${experiencia.link}</a>
        </div>
        </li>
        `;
    });
};