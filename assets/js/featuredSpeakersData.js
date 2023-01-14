const speakersData = [
  {
    name: 'Elon Musk',
    title: 'Founder, CEO and chief engineer of SpaceX',
    description: 'His company manufactures the Falcon 9, Falcon Heavy, and Starship launch vehicles, several rocket engines, Cargo Dragon and Crew Dragon spacecraft, and Starlink communications satellites.',
    image: './assets/images/main-images/speaker1.png',
  },

  {
    name: 'Daniel Burrus',
    title: 'Futurist, Technology Strategist, and Trends Forecaster',
    description: 'A leading technology forecaster and strategist, Daniel Burrus has established an international reputation for accurately predicting the future of technological change and its direct impact on the business world.',
    image: './assets/images/main-images/speaker2.jpg',
  },

  {
    name: 'Adam Cheyer',
    title: 'Top Technology and AI Speakert',
    description: 'Currently, Adam Cheyer is co-Founder and VP Engineering of Viv Labs, a startup simplifying the world by providing an intelligent interface to everything.',
    image: './assets/images/main-images/speaker3.jpg',
  },

  {
    name: 'Shawn DuBravac',
    title: 'Global Futurist and Trendsetter',
    description: 'Dr. Shawn DuBravac is author of the New York Times Best Seller Digital Destiny: How the New Age of Data Will Transform the Way We Work, Live, and Communicate.',
    image: './assets/images/main-images/speaker4.jpg',
  },

  {
    name: 'Nikki Greenberg',
    title: 'World Leading Futurist',
    description: 'Nikki Greenberg is a world-leading futurist and innovation strategist, focused on preparing organizations for a tech-enabled future.',
    image: './assets/images/main-images/speaker5.jpg',
  },

  {
    name: 'Jessica Groopman',
    title: 'Industry Analyst & Founding Partner, Kaleido Insights',
    description: 'Jessica Groopman is Founding Partner & Industry Analyst at Kaleido Insights, a boutique research and advisory firm analyzing the impacts of emerging technologies on people, businesses, and society.',
    image: './assets/images/main-images/speaker6.jpg',
  },
];

const speakersSection = () => {
  const featuredSection = document.querySelector('.featured-section-wrapper');
  const moreLessButton = document.querySelector('.loadmore-less');
  for (let i = 0; i < speakersData.length; i += 1) {
    const speakerDiv = document.createElement('div');
    if (i < 2) {
      speakerDiv.className = 'speaker-data mobile-show';
      speakerDiv.innerHTML = `
        <div class="speaker-image-container ">
         <img src="${speakersData[i].image}" alt="">
        </div>
        <div>
            <h3>${speakersData[i].name}</h2>
            <h5>${speakersData[i].title}</h3>
            <div class="speaker-line-bar"></div>
            <p>${speakersData[i].description}</p>
        </div>`;
    } else {
      speakerDiv.className = 'speaker-data mobile-hide  desktop-show';
      speakerDiv.innerHTML = `
        <div class="speaker-image-container">
         <img src="${speakersData[i].image}" alt="">
        </div>
        <div>
            <h3>${speakersData[i].name}</h2>
            <h5>${speakersData[i].title}</h3>
            <div class="speaker-line-bar"></div>
            <p>${speakersData[i].description}</p>
        </div>`;
    }
    featuredSection.append(speakerDiv);
    moreLessButton.addEventListener('click', () => {
      if (speakerDiv.classList.contains('mobile-hide')) {
        speakerDiv.className = 'speaker-data mobile-show';
        moreLessButton.innerHTML = 'LESS <i class="fa-solid fa-chevron-up loadButtonIcon"></i>';
        return;
      }
      speakerDiv.className = 'speaker-data mobile-hide  desktop-show';
      moreLessButton.innerHTML = 'MORE <i class="fa-solid fa-chevron-down loadButtonIcon"></i>';
    });
  }
};

window.onload = () => {
  speakersSection();
};