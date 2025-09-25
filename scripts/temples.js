const hamburger = document.querySelector('.hamburger');
const navBox = document.querySelector('.navBox');
const closeButton = document.querySelector('.close');
const templesContainer = document.querySelector('.temples');


hamburger.addEventListener('click', () => {
   navBox.classList.add('show');
});
closeButton.addEventListener('click', () => {
    navBox.classList.remove('show');
});

const card = `
    <div class="temple-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR32gFH3UyFl5apZsdE4RI6JpzwSyCuvE2CA&s" alt="Arequipa, Peru">
            <h3>Arequipa, Peru</h3>
    </div>
`
for (let index = 0; index < 15; index++) {
    templesContainer.innerHTML += card;
}