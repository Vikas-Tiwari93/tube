function sidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden-navV");
  sidebar.classList.toggle("hidden-nav");
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
  let nothidden = document.getElementById("not-hidden");
  nothidden.classList.toggle("not-hiddenblack");
  nothidden.classList.toggle("not-hidden");
  let anchor = document.getElementsByTagName("a");
  for (let j = 0; j < anchor.length; j++) {
    anchor[j].classList.toggle("a-black");
    anchor[j].classList.toggle("a");
  }

  let iconblack = document.getElementsByTagName("svg");
  for (let i = 0; i < iconblack.length; i++) {
    iconblack[i].classList.toggle("blackicon");
    // iconblack[i].classList.toggle(" ");
  }
}
function optswitch1() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optswitch2() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optswitch3() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optswitch4() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optswitch5() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optswitch6() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function optswitch7() {
  document.getElementById("cardoptions").removeAttribute("id");
  event.currentTarget.setAttribute("id", "cardoptions");
}
function slideR() {
  let main = document.getElementById("cardoptionmain");
  document.getElementById("cardoptbuttonL").style.visibility = "visible";
  main.scrollBy(200, 0);

  console.log(main.scrollWidth, main.scrollLeft + 570);
  if (main.scrollLeft + 570 > main.scrollWidth) {
    document.getElementById("cardoptbuttonR").style.visibility = "hidden";
  }
}
function slideL() {
  let main = document.getElementById("cardoptionmain");
  document.getElementById("cardoptbuttonR").style.visibility = "visible";
  main.scrollBy(-200, 0);

  console.log(main.scrollWidth, main.scrollLeft);
  if (main.scrollLeft <= 194) {
    document.getElementById("cardoptbuttonL").style.visibility = "hidden";
  }
}
