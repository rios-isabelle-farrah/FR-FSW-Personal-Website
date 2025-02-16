let menu = document.querySelector("#hamburger-menu"); //
let dropDown = document.querySelector("#drop-down"); //
let homeLi = document.querySelector("#home-li");
let projectLi = document.querySelector("#projects-li");
let aboutLi = document.querySelector("#about-li");
let contactLi = document.querySelector("#contact-li");
let x = document.querySelector("#xb");

menu.addEventListener("mouseover", (event) => {
  dropDown.style.display = "block";
});

//this event listener makes the dropdown menu disappear by using display none.
let xButton = document.querySelector("#xb");
xButton.addEventListener("click", (event) => {
  dropDown.style.display = "none";
});

let makeRain = document.getElementById("no-matrix");
let makeRainButton = document.getElementById("rain");

makeRainButton.addEventListener("click", (event) => {
  makeRain.classList.toggle("matrix");
  if (makeRainButton.textContent === "Dark") {
    makeRainButton.textContent = "Matrix";
    let divOfPic = document.getElementById("pic");
    let switchPic = document.getElementById("matrix-pic");
    let plainPic = document.getElementById("plain-pic");
    divOfPic.removeChild(switchPic);
    plainPic.style.display = "block";
  } else {
    makeRainButton.innerHTML = "Dark";
    let matrixPic = document.createElement("IMG");
    matrixPic.id = "matrix-pic";
    matrixPic.setAttribute("src", "matrix.png");
    // matrixPic.setAttribute("width", "919");
    // matrixPic.setAttribute("height", "1000");
    matrixPic.setAttribute("alt", "Farrah's Matric Pic");
    let divOfPic = document.getElementById("pic");
    divOfPic.appendChild(matrixPic);
    let plainPic = document.getElementById("plain-pic");
    plainPic.style.display = "none";
  }
});

// let watchButton = document.querySelector('#watch')
//  watchButton.addEventListener('click', (event) => {
// let cover = document.getElementById('snow-video-cover')
// cover.style.display = 'none'

// setTimeout(function () {
//     cover.style.display = 'block'
//         }, 15000);
//   })

let getJoke = document.getElementById("click-joke");
getJoke.addEventListener("click", (event) => {
  const getJokes = async () => {
    try {
      let res = await axios.get(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart"
      );
      let jokesText = res.data["setup"];
      let answer = res.data["delivery"];
      let jokeOutput = document.getElementById("joke-output");
      jokeOutput.textContent = `${jokesText} 
            Answer: ${answer}`;
      // objectName[“keyName”] = value
    } catch (err) {
      console.log(err);
      debugger;
    }
  };
  getJokes();
});

let menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", (event) => {
  let bigMenu = document.getElementById("big-menu");
  let bigHome = document.getElementById("big-home");
  let bigAbout = document.getElementById("big-about");
  let bigProjects = document.getElementById("big-projects");
  let bigContact = document.getElementById("big-contact");
  //let bigX = document.getElementById("big-x")

  // menuButton.style.visibility = 'hidden'

  setTimeout(function () {
    // bigX.style.visibility = 'visible'
    bigHome.style.visibility = "visible";
  }, 5);
  setTimeout(function () {
    bigAbout.style.visibility = "visible";
  }, 100);
  setTimeout(function () {
    bigProjects.style.visibility = "visible";
  }, 200);
  setTimeout(function () {
    bigContact.style.visibility = "visible";
  }, 300);

  setTimeout(function () {
    bigHome.style.visibility = "hidden";
    // menuButton.style.visibility = 'visible'
  }, 10000);

  setTimeout(function () {
    bigAbout.style.visibility = "hidden";
  }, 10000);
  setTimeout(function () {
    bigProjects.style.visibility = "hidden";
  }, 10000);
  setTimeout(function () {
    bigContact.style.visibility = "hidden";
  }, 10000);
});

// let bigX = document.getElementById('big-x')
// let bigX = document.getElementById('big-x')
// bigX.addEventListener('click',(event)=>{
//     let bigMenu= document.querySelector("#big-menu")
// bigMenu.style.display = "none"
// menuButton.style.visibility = 'visible'

// })

// document.addEventListener('DOMContentLoaded',(event)=>{
//     document.getElementById("name-big").classList.toggle('name-effect')

// })

let divTech = document.getElementById("divTech");
let industryTech = document.getElementById("industryTech");
let leadershipTech = document.getElementById("leadershipTech");
let pIn = document.getElementById("pIn");
let pInD = document.getElementById("PInd");
let lead = document.getElementById("lead");
divTech.addEventListener("mouseover", (event) => {
  pIn.style.visibility = "visible";
  pIn.style.fontSize = "22px";
  pIn.style.textOverflow = "ellipsis";
});
industryTech.addEventListener("mouseover", (event) => {
  pInD.style.visibility = "visible";
  pInD.style.fontSize = "22px";
  pInD.style.justifyContent = "left";
  pInD.style.textOverflow = "ellipsis";
  pInD.style.overflow = "hidden";
});
divTech.addEventListener("mouseout", (event) => {
  pIn.style.visibility = "hidden";
});
industryTech.addEventListener("mouseout", (event) => {
  pInD.style.visibility = "hidden";
});

leadershipTech.addEventListener("mouseover", (event) => {
  lead.style.visibility = "visible";
  lead.style.fontSize = "22px";
  leadershipTech.style.justifyContent = "left";
  lead.style.textOverflow = "ellipsis";
});
leadershipTech.addEventListener("mouseout", (event) => {
  lead.style.visibility = "hidden";
});

let skills = document.getElementById('skills')
let figure = document.querySelector('figure')
let main = document.querySelector('main')
let codediv = document.getElementById('code-div')
skills.addEventListener("click",(event)=>{
  skills.style.visibility = "hidden"
  figure.style.visibility = "hidden"
  main.style.visibility = "visible"
  main.style.height = "400px"
  codediv.appendChild(main)
  setTimeout(function () {
    skills.style.visibility = "visible";
    figure.style.visibility = "visible";
    main.style.visibility = "hidden"
  }, 10000);

})