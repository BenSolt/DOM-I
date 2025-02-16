const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "asdfa",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// Image circle
  let logocircle = document.getElementById("cta-img");
  logocircle.setAttribute('src', siteContent["cta"]["img-src"])


// Image Middle
   let midImage = document.querySelector(".middle-img");
   midImage.setAttribute('src', "img/mid-page-accent.jpg");


  


  // Dom is Awesome
  const title = document.querySelector('.cta-text h1');
  title.textContent = "DOM is Awesome";
  title.style.width = "175px";
  title.style.marginLeft= "-95px";

 // \n

  //title.setAttribute('style', 'white-space: pre;');

  
 
  // Button Get Started
  const btntext = document.querySelector('button');
  btntext.textContent = "Get Started";



  // Navig Bar 
 
  const allAnchor = document.querySelectorAll('nav a');
  "nav-item-1"
  allAnchor[0].textContent = siteContent["nav"]["nav-item-1"];
  allAnchor[1].textContent = siteContent["nav"]["nav-item-2"];
  allAnchor[2].textContent = siteContent["nav"]["nav-item-3"];
  allAnchor[3].textContent = siteContent["nav"]["nav-item-4"];
  allAnchor[4].textContent = siteContent["nav"]["nav-item-5"];
  allAnchor[5].textContent = siteContent["nav"]["nav-item-6"];

 



  // APPEND - End
    var endword = document.createElement("a");
    endword.textContent = "Last"
    var navbar = document.querySelector('nav');
    navbar.appendChild(endword);
    


    // PREPEND - first
    var firstword = document.createElement("a");
    firstword.textContent = "First"
    navbar.prepend(firstword);



  // Change Color to green
const secondaryHeaders = document.querySelectorAll('nav a');
secondaryHeaders.forEach(element => {
  element.style.color = 'green';
})







  // Main Content H4
  const allh4 = document.querySelectorAll('.main-content h4');
  allh4[0].textContent =  "Features";
  allh4[1].textContent = "About";
  allh4[2].textContent =  "Services";
  allh4[3].textContent = "Product";
  allh4[4].textContent = "Vision";



// Main Content p
  const alltext = document.querySelectorAll('.main-content p');
  alltext[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  alltext[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  alltext[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  alltext[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  alltext[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";





  // CONTACT
  const contactTitle = document.querySelector('.contact h4');
  contactTitle.textContent = "Contact";


  // Contact Info
  const contactInfo = document.querySelectorAll('.contact p');
  contactInfo[0].textContent = "123 Way 456 Street Somewhere, USA";
  contactInfo[1].textContent = "1 (888) 888-8888";
  contactInfo[2].textContent = "sales@greatidea.io";

  


  // Footer
  const footer = document.querySelector('footer');
  footer.textContent = "Copyright Great Idea! 2018";

 
  


  // STRETCH
  

const eventClick = document.querySelector('button');

  eventClick.addEventListener('click', (e)=> {
    console.log('clicked')
    //event.target.style.background = 'purple';})
   //document.getElementsByClassName('container')
   document.body.style.background = 'blue';})
   
 