export function RenderContent(){


  // ----------------RENDERING HOME SECTION-------------------//
  const homeDetails = {
    greetTxt: `Hai semua aku `,
    name: 'nopal anjay',
    profilePhoto: 'profile.jpg',
    welcomeTxt: 'ini website perkenalan guwa',
    fbLink: 'https://app.adjust.com/34cqh6a_tvv1g60?deeplink=mobilelegends://appinvites/mlr/whatsapp_40000',
    tiktokLink: 'https://www.tiktok.com/@noyaraa?_t=8sa7d8jpKHY&_r=1',
    instagramLink: 'https://www.instagram.com/noaplrizq/profilecard/?igsh=MWN2NmNrNXhhMjdqdg==',
    ytLink: 'https://wa.me/6287766872015'
  }

  const homeHTML = `
    <div class="profile-detail">
      <p>${homeDetails.greetTxt}</p>
      <h1 class="my-name gradient-word">${homeDetails.name}</h1>
      <h2 class="display-skills gradient-word"></h2>
      <p>${homeDetails.welcomeTxt}</p>
      <div class="my-social-media-accounts">
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.fbLink}">
          <img src="images and icons/icons/facebook (2).png" alt="fb icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.tiktokLink}">
          <img src="images and icons/icons/tik-tok.png" alt="tiktok icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.ytLink}">
          <img src="images and icons/icons/youtube.png" alt="YT icon" />
        </a>
        <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
          <img src="images and icons/icons/instagram (1).png" alt="insta icon" />
        </a>
      </div>
    </div>

    <div class="profile-pic">
      <div id="first-layer">
        <img
          id="profile-img"
          src="images and icons/images/${homeDetails.profilePhoto}"
          alt="profile img" />
      </div>
    </div>
  `;
  
  const homeSection = document.querySelector('#home-section').innerHTML = homeHTML;
    




   // ----------------RENDERING ABOUT SECTION-------------------//
   const aboutDetails = {
    myPhoto: 'profile.jpg',
    aboutMeFirstPrgrph: `hai semua aku naufal rizqi mubarok asal banyuwangi tepatnya dibkecamatan sempu desa gendoh rt.3 rw.2. saya lahir di tanggal 2 januari 2010
    aboutMeSecondPrgrph: saya membuat ini karena saya ingin belajar tentang bahasa pemrograman seperti javascript (js), css, html, dan lain lain`
   }

   const aboutHTML = `
    <h2 class="section-name about">tentang guwa <span class="line"></span></h2>
    <div class="container">
      <div>
        <img
          class="profile-pic"
          src="images and icons/images/${aboutDetails.myPhoto}"
          alt="profile img" />
      </div>
      <div class="about-self scroll-reveal">
        <p class="first-paragraph">
          <span>${aboutDetails.aboutMeFirstPrgrph}</span>
        </p>
      </div>
    </div>
   `

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutHTML;




    // ----------------RENDERING SKILLS SECTION-------------------//

    const skills = [
      { iconName: "guitarist.png", skillName: "mathilda" },
      { iconName: "music.png", skillName: "hindia boy" },
      { iconName: "music transcription.png", skillName: "ga apal lirik" },
      { iconName: "html.png", skillName: "HTML" },
      { iconName: "CSS.png", skillName: "CSS" },
      { iconName: "java-script.png", skillName: "JavaScript" },
      { iconName: "Git.png", skillName: "franco" },
      { iconName: "github (2).png", skillName: "GitHub" },
      { iconName: "visual-studio.png", skillName: "epical immortal" },
    ];

    const skillHTML = `
        <h2 class="section-name"><span class="line"></span> SKILLS</h2>
          
          <div class="skills-container d-flex">
          </div>
    `

  const skillSection = document.querySelector('#skills-section').innerHTML = skillHTML;
  
  let skillCard = ''
  skills.forEach(skill => {
   skillCard += `<div class="skill">
    <img src="images and icons/icons/${skill.iconName}" alt="" class="skill-icon">
    <p class="skill-name">${skill.skillName}</p>
  </div>`
  });
  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillCard;




  // ----------------RENDERING CONTACT SECTION-------------------//
  const contactDetails = {
    heading: ' chat guwa wak kita mabar',
    subheading: 'mabar ma guwa dijamin ls, dukung gua buat web ini ditambahin apa',
  }
  const contactHTML = `
    <h2 class="section-name">${contactDetails.heading}</h2>
    <p class="subheading">${contactDetails.subheading}</p>
    <form class="f-flex">
      <div class="input-container">
        <input class="input name" type="text" placeholder="Name" required />
        <input class="input email" type="email" placeholder="email" required/>
      </div>

      <div class="txt-area-btn-container">
        <textarea name="Message-me" class="input" placeholder="Enter your Messsage">assalamualaikum mas, mau joki</textarea> 
        <button id="submit-btn">Submit</button>
      </div>
    
    </form>
  `;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactHTML;
}
