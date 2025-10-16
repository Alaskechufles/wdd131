const hamburger = document.querySelector('.hamburger');
const navBox = document.querySelector('.navBox');
const closeButton = document.querySelector('.close');
const templesContainer = document.querySelector('.temples');
const homeFilters = document.querySelectorAll('.homeFilter');
const oldFilters = document.querySelectorAll('.oldFilter');
const newFilters = document.querySelectorAll('.newFilter');
const largeFilters = document.querySelectorAll('.largeFilter');
const smallFilters = document.querySelectorAll('.smallFilter');

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },{
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-32869-thumb.jpg"
  },
  {
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba, Bolivia",
    dedicated: "2000, April, 30",
    area: 26969,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
  },
  {
    templeName: "Trujillo Peru",
    location: "Trujillo, Peru",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3717-main.jpg"
  },
];

hamburger.addEventListener('click', () => {
   navBox.classList.add('show');
   
});
closeButton.addEventListener('click', () => {
    navBox.classList.remove('show');
    
});

homeFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        templesContainer.innerHTML = '';
        filterTemples('home');
    });
});

oldFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        templesContainer.innerHTML = '';
        filterTemples('old');
    });
});

newFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        templesContainer.innerHTML = '';
        filterTemples('new');
    });
});

largeFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        templesContainer.innerHTML = '';
        filterTemples('large');
    });
});

smallFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        templesContainer.innerHTML = '';
        filterTemples('small');
    });
});

filterTemples('home');

function filterTemples(criteria){
  
  for (let index = 0; index < temples.length; index++) {
      if(criteria === 'old' && new Date(temples[index].dedicated) >= new Date('1900-01-01')){
          continue; 
      }
      if(criteria === 'new' && new Date(temples[index].dedicated) <= new Date('2000-12-31')){
          continue; 
      }
      if(criteria === 'large' && temples[index].area < 90000){
          continue; 
      }
      if(criteria === 'small' && temples[index].area >= 10000){
          continue; 
      }


      const temple = temples[index];
      const card = `
          <div class="temple-card">
              <figure>
              <figcaption>${temple.location}</figcaption>
              <p>Location: ${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Area: ${temple.area} sq ft</p>
              <img src="${temple.imageUrl}" alt="${temple.location}" loading="lazy"/>
              </figure>
  
          </div>
      `;
      templesContainer.innerHTML += card;
  }
}



