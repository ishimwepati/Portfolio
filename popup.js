const workSection = document.getElementById('work-section');
const section = document.createElement('section');

workSection.appendChild(section);
section.innerHTML += `
<section class="work" id="work">
    <h2 class="upperword"><br>My Recent <br> Works</h2>
    <img src="icon/Indicatorindi.png" alt="Indicator button"  class="indi">

        <div class="bigflex" id="bigflex">
             
                <div class="bigflexitem">
                    <div class="grid-container">
                        <div class="grid-item one"></div>
                        <div class="grid-item main">
                                <h3>Multi-Post Stories <br>Gain+Glory</h3>
                        </div>
                        
                        <ul class="grid-item flex-container">
                            <li class="flex-item flex-item1"><h4>Ruby on Rails</h4> </li>
                            <li class="flex-item flex-item2"><h4>CSS</h4></li>
                            <li class="flex-item flex-item3"><h4>JavaScrit </li>
                            <li class="flex-item flex-item4"><h4>HMTL</h4></li>
                        </ul>
                    
                        <div class="grid-item last">
                                <button onClick="projectDetails(0)" name="See Project" class="button1" type="button">See project1</button>
                        </div>
                    </div>
                </div>
                <div class="bigflexitem">
                    <div class="grid-container">
                        <div class="grid-item one"></div>
                        <div class="grid-item main">
                                <h3>Multi-Post Stories <br>Gain+Glory</h3>
                        </div>
                        
                        <ul class="grid-item flex-container">
                            <li class="flex-item flex-item1"><h4>Ruby on Rails</h4> </li>
                            <li class="flex-item flex-item2"><h4>CSS</h4></li>
                            <li class="flex-item flex-item3"><h4>JavaScrit </li>
                            <li class="flex-item flex-item4"><h4>HMTL</h4></li>
                        </ul>
                    
                        <div class="grid-item last">
                                <button onClick="projectDetails(1)" name="See Project" class="button1" type="button">See project</button>
                        </div>
                    </div>
                </div>
                <div class="bigflexitem">
                    <div class="grid-container">
                        <div class="grid-item one"></div>
                        <div class="grid-item main">
                                <h3>Multi-Post Stories <br>Gain+Glory</h3>
                        </div>
                        
                        <ul class="grid-item flex-container">
                            <li class="flex-item flex-item1"><h4>Ruby on Rails</h4> </li>
                            <li class="flex-item flex-item2"><h4>CSS</h4></li>
                            <li class="flex-item flex-item3"><h4>JavaScrit </li>
                            <li class="flex-item flex-item4"><h4>HMTL</h4></li>
                        </ul>
                    
                        <div class="grid-item last">
                                <button onClick="projectDetails(2)" name="See Project" class="button1" type="button">See project</button>
                        </div>
                    </div>
                </div>
                <div class="bigflexitem down">
                    <div class="grid-container">
                        <div class="grid-item one"></div>
                        <div class="grid-item main">
                                <h3>Multi-Post Stories <br>Gain+Glory</h3>
                        </div>
                        
                        <ul class="grid-item flex-container">
                            <li class="flex-item flex-item1"><h4>Ruby on Rails</h4> </li>
                            <li class="flex-item flex-item2"><h4>CSS</h4></li>
                            <li class="flex-item flex-item3"><h4>JavaScrit </li>
                            <li class="flex-item flex-item4"><h4>HMTL</h4></li>
                        </ul>
                    
                        <div class="grid-item last">
                                <button onClick="projectDetails(3)" name="See Project" class="button1" type="button">See project</button>
                        </div>
                    </div>
                </div>
                <div class="bigflexitem down">
                    <div class="grid-container">
                        <div class="grid-item one"></div>
                        <div class="grid-item main">
                                <h3>Multi-Post Stories <br>Gain+Glory</h3>
                        </div>
                        
                        <ul class="grid-item flex-container">
                            <li class="flex-item flex-item1"><h4>Ruby on Rails</h4> </li>
                            <li class="flex-item flex-item2"><h4>CSS</h4></li>
                            <li class="flex-item flex-item3"><h4>JavaScrit </li>
                            <li class="flex-item flex-item4"><h4>HMTL</h4></li>
                        </ul>
                    
                        <div class="grid-item last">
                                <button onClick="projectDetails(4)" name="See Project" class="button1" type="button">See project</button>
                        </div>
                    </div>
                </div>
                <div class="bigflexitem down">
                    <div class="grid-container">
                        <div class="grid-item one"></div>
                        <div class="grid-item main">
                                <h3>Multi-Post Stories <br>Gain+Glory</h3>
                        </div>
                        
                        <ul class="grid-item flex-container">
                            <li class="flex-item flex-item1"><h4>Ruby on Rails</h4> </li>
                            <li class="flex-item flex-item2"><h4>CSS</h4></li>
                            <li class="flex-item flex-item3"><h4>JavaScrit </li>
                            <li class="flex-item flex-item4"><h4>HMTL</h4></li>
                        </ul>
                    
                        <div class="grid-item last">
                                <button onClick="projectDetails(5)" name="See Project" class="button1" type="button">See project</button>
                        </div>
                    </div>
                </div>
                
        </div>                    
</section>
`;
const projects = [
  {
    projectId: 1,
    projectName: 'Bootstrap',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icon/Vector.svg',
    liveIcon: 'img/icon/see-live-icon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'css',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/ishimwepati/Portfolio',
    liveLink: 'https://github.com/ishimwepati/Portfolio/',
  },
  {
    projectId: 2,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icon/Vector.svg',
    liveIcon: 'img/icon/see-live-icon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/ishimwepati/Portfolio',
    liveLink: 'https://github.com/ishimwepati/Portfolio/',
  },
  {
    projectId: 3,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icon/Vector.svg',
    liveIcon: 'img/icon/see-live-icon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/ishimwepati/Portfolio',
    liveLink: 'https://github.com/ishimwepati/Portfolio/',
  },
  {
    projectId: 4,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icon/Vector.svg',
    liveIcon: 'img/icon/see-live-icon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/ishimwepati/Portfolio',
    liveLink: 'https://github.com/ishimwepati/Portfolio/',
  },
  {
    projectId: 5,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icon/Vector.svg',
    liveIcon: 'img/icon/see-live-icon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/ishimwepati/Portfolio',
    liveLink: 'https://github.com/ishimwepati/Portfolio/',
  },
  {
    projectId: 6,
    projectName: 'Keeping track of hundreds of components',
    projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'img/projects/projectone-img.png',
    gitIcon: 'img/icon/Vector.svg',
    liveIcon: 'img/icon/see-live-icon.svg',
    techMobile: ['Ruby on rails', 'css', 'JavScript'],
    techDesktop: [
      'Codekit',
      'GitHub',
      'Javasript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/ishimwepati/Portfolio',
    liveLink: 'https://github.com/ishimwepati/Portfolio/',
  },
];

const popModal = document.getElementById('popUp-modal');

const closeModal = () => {
  popModal.style.display = 'none';
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    popModal.style.display = 'none';
  }
};

function projectDetails(data) {
  const myProject = projects[data];
  popModal.innerHTML = `<div class="content-modal">
      <div class="modal-header">
          <div class="modal-bg-img">
              <span onclick="closeModal()" id="close-btn" class="close-btn">&times;</span>
              <img class="desktop-img" src="${myProject.imageDesktop}"/>
          </div>
      </div>
      <div class="modal-body">
          <div class="title-container">
              <h3 id="title">${myProject.projectName}</h3>
              <div class="modal-footer-desktop">
              <a href="${myProject.liveLink}" class="btn-links" target="_blank">
                  <button type="submit" class="show-project-btn">
                      <span>See Live</span>
                      <img src="${myProject.liveIcon}" alt="See live icon" />
                    </button>
                      </a>
                      <a href="${myProject.sourceLink}" class="btn-links" target="_blank">
                          <button type="submit" class="show-project-btn">
                              <span>See Source</span>
                              <img src="${myProject.gitIcon}" alt="source code icon" /> 
                          </button>
                      </a>
                  </div>
          </div>
          <ul class="tech-tags" id="tech-desktop">
              <li>${myProject.techDesktop[0]}</li>
              <li>${myProject.techDesktop[1]}</li>
              <li>${myProject.techDesktop[2]}</li>
              <li>${myProject.techDesktop[3]}</li>
              <li>${myProject.techDesktop[4]}</li>
              <li>${myProject.techDesktop[5]}</li>
          </ul>
          <ul class="tech-tags" id="tech-mobile">
              <li>${myProject.techMobile[0]}</li>
              <li>${myProject.techMobile[1]}</li>
              <li>${myProject.techMobile[2]}</li>
          </ul>
          <p id="projectDescription">${myProject.projectDescription}</p>
          <div class="modal-footer">
              <a href="${myProject.liveLink}" class="btn-links" target="_blank">
                  <button type="submit" class="show-project-btn">
                      <span>See Live</span>
                      <img src="${myProject.liveIcon}" alt="See live icon" />
                    </button>
                      </a>
                      <a href="${myProject.sourceLink}" class="btn-links" target="_blank">
                          <button type="submit" class="show-project-btn">
                              <span>See Source</span>
                              <img src="${myProject.gitIcon}" alt="source code icon" /> 
                          </button>
                      </a>
                  </div>
              </div>
              </div>
              `;

  popModal.style.display = 'block';
}
projectDetails(7);
closeModal();
