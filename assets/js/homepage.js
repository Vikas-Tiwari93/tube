function sidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden-navV");
  sidebar.classList.toggle("hidden-nav");
  let homebody = document.getElementById("homevideobody");
  homebody.classList.toggle("homevideobodyonclick");
  homebody.classList.toggle("homevideobodyfirst");
  let stickyslider = document.getElementById("stickysliderhome");
  stickyslider.classList.toggle("stickysliderhomeonclick");
  stickyslider.classList.toggle("stickysliderhome");
}
function profile() {
  let profile = document.getElementById("profile");
  profile.classList.toggle("profileon");
  profile.classList.toggle("profileoff");
}
function profilebody() {
  let profile = document.getElementById("profile");
  profile.classList.toggle("profileon");
  profile.classList.toggle("profileoff");
  // let profileblack = document.getElementById("blackclose");
  // profileblack.classList.toggle("blackcloseon");
  // profileblack.classList.toggle("blackcloseoff");
}
function profilebodydark() {
  let profile = document.getElementById("profile");
  profile.classList.toggle("profileon-black");
  profile.classList.toggle("profileoff");
}
function dark() {
  let body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark");
  body.classList.toggle("white");
  let input = document.getElementById("input");
  input.classList.toggle("blackinput");
  input.classList.toggle("no-color");
  let profile = document.getElementById("profile");
  profile.classList.toggle("profileon");
  profile.classList.toggle("profileoff");
  let profileblack = document.getElementById("blackclose");
  profileblack.classList.toggle("blackcloseoff");
  profileblack.classList.toggle("blackcloseon");
  let searchbtn = document.getElementById("searchbtn");
  searchbtn.classList.toggle("searchbtnblack");
  searchbtn.classList.toggle("searchbtn");
  let activehidden = document.getElementById("activehidden");
  activehidden.classList.toggle("active-barblack");
  activehidden.classList.toggle("active-bar");
  let hiddenscrollblack = document.getElementById("hidden-scroll");
  hiddenscrollblack.classList.toggle("hidden-scrollblack");
  hiddenscrollblack.classList.toggle("hidden-scroll");
  let homenav = document.getElementById("homenav");
  homenav.classList.toggle("not-hidden");
  homenav.classList.toggle("not-hiddendark");
  let stickysliderhome = document.getElementById("stickysliderhome");
  stickysliderhome.classList.toggle("stickysliderhomeblack");
  stickysliderhome.classList.toggle("stickysliderhome");
  let anchor = document.getElementsByTagName("a");
  for (let j = 0; j < anchor.length; j++) {
    anchor[j].classList.toggle("a-black");
  }

  let iconblack = document.getElementsByTagName("svg");
  for (let i = 0; i < iconblack.length; i++) {
    iconblack[i].classList.toggle("blackicon");
  }
  // black search btns
  let optionblack = document.getElementsByClassName("searchoption");
  for (let a = 0; a < iconblack.length; a++) {
    optionblack[a].classList.toggle("searchoptionblack");
  }
}

function optionswitch1() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch2() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch3() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch4() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch5() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch6() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch7() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch8() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch9() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch10() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optionswitch11() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}

function slideR() {
  let main = document.getElementById("cardoptionmain");
  main.scrollBy(200, 0);
}
function slideL() {
  let main = document.getElementById("cardoptionmain");

  main.scrollBy(-200, 0);
}
