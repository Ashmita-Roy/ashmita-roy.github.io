AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Business Intelligence Analyst",
    cardImage: "assets/images/experience-page/10MS.png",
    place: "10 Minute School",
    time: "(March, 2024 - Present)",
    desp: "<li>Lead Generation Management</li><li>ETL Issues Examination and Data Discrepancy Management</li><li>Documented 4 Dashboards for Enhanced Clarity and Accessibility</li><li>Dashboard Maintenance</li><li>Provided Cross-Functional Support and Delivered Key Analytical Contributions</li>"
  },
  {
    title: "Business Intelligence Analyst",
    cardImage: "assets/images/experience-page/Daraz.png",
    place: "Daraz Bangladesh Ltd.",
    time: "(July, 2022 - February, 2024)",
    desp: "<li>Worked on comprehensive data analysis by extracting, transforming and processing complex datasets to provide strategic plans to optimize business performance.</li><li>Provide continuous data support to stakeholders, specifically during campaign time to track daily performance and present actionable insights to senior management for informed decision-making</li><li>Create and maintain executive dashboards and reports with visualization tools, allowing stakeholders to readily access and understand data</li><li>Conduct extensive ad hoc analytics to assist various business functions like seller and customer segmentation, reimbursement, penalty, market trends, etc.</li>",
  },
  {
    title: "Junior Data Analyst",
    cardImage: "assets/images/experience-page/Sheba.png",
    place: "Sheba Platform Ltd.",
    time: "(February, 2022 - June, 2022)",
    desp: "<li>Worked on data handling and manipulating, prediction analysis to provide concrete assistance to business unit for the company growth decisions, dashboard creation to organize and interpret data properly and cohort analysis</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Research Intern of Satyendra Nath Bose Summer Internship Program 2020",
    cardImage: "assets/images/experience-page/researchintern2.jpg",
    description:
      "Worked on a research-based project with Machine Learning on Health Security Parameters to make awareness during COVID-19.",
  },
  {
    title: "Data Analyst Intern at Amar iSchool",
    cardImage: "assets/images/experience-page/AmariSchool.png",
    description:
      "Worked on reports and dashboards related to the growth and development of the website using Google Data Studio and projected ideas and planning for various events based on reports",
  },
  {
    title: "Trainee Teacher at Cybeorg",
    cardImage: "assets/images/experience-page/cybeorg.png",
    description:
      "Taught block-based coding (Scratch, code.org, etc.) and basic programming virtually to school-going students of different countries.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Participation Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Robotics Workshop",
    subtitle: "Participant",
    image: "assets/images/experience-page/robo.jpg",
    desp: "Completed a project by learning the form and mechanisms of Arduino and practicing the basic programming knowledge of Arduino to create a programmed control robot - 2018",
    // href: "https://uplift.girlscript.tech/",
  },
  {
    title: "NITS Model United Nation (MUN)",
    subtitle: "Participant",
    image: "assets/images/experience-page/mun.jpg",
    desp: "Presented the aspects of a given country on a specified topic as the delegate of the country and developed public speaking skill - 2018",
    // href: "https://ulhacks.com/",
  },
  {
    title: "TedX NITS",
    subtitle: "Volunteer",
    image: "assets/images/experience-page/Tedx_NITS.png",
    desp: "Organized the event by managing event tasks and volunteering works - 2019",
    // href: "https://ulhacks.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>  
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
