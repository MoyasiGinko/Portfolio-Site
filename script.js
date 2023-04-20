const menuBtn = document.getElementById('menu-btn-open');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

function navToggle() {
  menuBtn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

menuBtn.addEventListener('click', navToggle);

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    menu.classList.remove('show-menu');
    menuBtn.classList.remove('open');
    overlay.classList.remove('overlay-show');
    document.body.classList.remove('stop-scrolling');
  }
});

// popup window setup
// Project Cards Info
const projectData = [
  {
    image: 'asset/snapshot1.svg',
    title: 'Tonic',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot2.svg',
    title: 'Multi-Post Stories',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot3.svg',
    title: 'Tonic',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot4.svg',
    title: 'Multi-Post Stories',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
];

// popup window
const projectBtn = document.querySelectorAll('.btn');
const workData = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['html', 'css', 'javascript', 'Ruby', 'Boostrap'],
    technologies: ['Canopy', 'Back End Dev', '2015'],
    source: 'https://github.com/MoyasiGinko/Portfolio-Site/',
    livelink: 'https://MoyasiGinko.github.io/Portfolio-Site/',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['html', 'css', 'javascript', 'Ruby', 'Boostrap'],
    technologies: ['Canopy', 'Back End Dev', '2015'],
    source: 'https://github.com/MoyasiGinko/Portfolio-Site/',
    livelink: 'https://MoyasiGinko.github.io/Portfolio-Site/',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['html', 'css', 'javascript', 'Ruby', 'Boostrap'],
    technologies: ['Canopy', 'Back End Dev', '2015'],
    source: 'https://github.com/MoyasiGinko/Portfolio-Site/',
    livelink: 'https://MoyasiGinko.github.io/Portfolio-Site/',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['html', 'css', 'javascript', 'Ruby', 'Boostrap'],
    technologies: ['Canopy', 'Back End Dev', '2015'],
    source: 'https://github.com/MoyasiGinko/Portfolio-Site/',
    livelink: 'https://MoyasiGinko.github.io/Portfolio-Site/',
  },
];
const popUp = document.getElementById('modal');

// popUp.classList.add('popup');
function showPopUp(id) {
  popUp.style.display = 'block';
  overlay.classList.toggle('overlay-bg');
  popUp.innerHTML = `
    <div id="myModal">
      <div class="card__description">
        <div class="popup-header">
          <h1 class="card-title">${workData[id].name}</h1>
          <button><img id="popup-close" src="asset/close-icon.svg" alt="close-icon"/></button>
        </div>
        <div class="card-bg-info">
          <p>Canopy</p>
          <ul>
            <li>${projectData[id].technologies[0]}</li>
            <li>${projectData[id].technologies[1]}</li>
          </ul>
        </div>
        <div class="popup-img"> 
          <img id="popup-img" src="${projectData[id].image}" alt='screenshot'/>
        </div>
      </div>
      <div class="popup-description">
        <div id="card__textpop" class="card__text">
          <p>${workData[id].description}</p>
          <br></br>
          <p id="desk__text">${workData[id].description}</p>
        </div>
        <div>
          <div class="align__colm">
            <div id="card__skills" class="card__skills">
              <ul>
                <li>${workData[id].skills[0]}</li>
                <li>${workData[id].skills[1]}</li>
                <li>${workData[id].skills[2]}</li>
              </ul>
            </div>
            <div id="card__skills" class="card__skills">
              <ul class="skills__ext">
              <li>${workData[id].skills[3]}</li>
              <li>${workData[id].skills[4]}</li>
              </ul>
            </div>
            <div class="Live">
              <a href="${workData[id].livelink}" class="live1">See live <img class="live1-img" src="./asset/live.png" width="24"></a>
              <a href="${workData[id].source}" class="live1">See Source <img class="live1-img" src="./asset/Vector.png" width="24"></a>
            </div>
          </div?  
        </div>
      </div>
    </div>
  `;
}
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => showPopUp(i));
}

// closing popup window
document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('#popup-close')) {
    popUp.style.display = 'none';
    overlay.classList.toggle('overlay-bg');
  }
});