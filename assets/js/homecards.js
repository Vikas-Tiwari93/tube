homeJson = [
  {
    channelsrc: "./assets/images/channelimg/one(name=modern martial arts).jpg",
    name: "Modern martial arts",
    cardsrc: "./assets/images/cardimg/one.webp",
    description:
      " Anotinio Palzibat once knocked a 6'8” top 5 competitor down with a jab.",
  },
  {
    channelsrc: "./assets/images/channelimg/two.jpg",
    name: "Economic Explained",
    cardsrc: "./assets/images/cardimg/two.webp",
    description: " WILL everything end in a economic disaster",
  },
  {
    channelsrc: "./assets/images/channelimg/three.jpg",
    name: "Darbar festival",
    cardsrc: "./assets/images/cardimg/three.jpg",
    description:
      "Roopa Panesar plays a courageous choice of raag Puriya, which is wr",
  },
  {
    channelsrc: "./assets/images/channelimg/four.jpg",
    name: "MMA specialist",
    cardsrc: "./assets/images/cardimg/four.webp",
    description: "Tony considered one amongst greatest in our era  ",
  },
  {
    channelsrc: "./assets/images/channelimg/five.jpg",
    name: "Fireship",
    cardsrc: "./assets/images/cardimg/five.webp",
    description: " #javascript source:Take the quiz...",
  },
  {
    channelsrc: "./assets/images/channelimg/six.jpg",
    name: "World affairs",
    cardsrc: "./assets/images/cardimg/six.webp",
    description:
      "India Replaces Russia in Satellite Launch | Rs. 1000 Crore Earned by ISRO ",
  },
  {
    channelsrc: "",
    name: "IGN",
    cardsrc: "",
    description:
      " Epic showcased the new features coming to Unreal 5.2. These new features",
  },
  {
    channelsrc: "",
    name: "Drew Handerson",
    cardsrc: "",
    description: " Prelude, Sarabande for Lute in C minor",
  },
];

for (let i = 0; i < 3; i++) {
  let cardrootsecond = document.getElementById("cardrootsecond");
  let cardhome = document.createElement("span");
  cardhome.id = "homecard";
  cardhome.className = "homecard";
  cardhome.innerHTML = `<div class="cardimg"> <img src="${homeJson[i].cardsrc}" alt=""></div>
                <div class="carddetail">
                  <div class="cardicon">
                    <img src="${homeJson[i].channelsrc}" alt="" />
                  </div>
                  <div class="icondetail">
                    <div class="detailone">${homeJson[i].description}</div>
                    <div class="detailtwo">${homeJson[i].name}</div>
                    <div class="detailthree"></div>
                  </div>
                </div>`;
  cardrootsecond.appendChild(cardhome);
}
for (let j = 3; j < 6; j++) {
  let cardrootthird = document.getElementById("cardrootthird");
  let cardhome = document.createElement("span");
  cardhome.id = "homecard";
  cardhome.className = "homecard";
  cardhome.innerHTML = `<div class="cardimg"> <img src="${homeJson[j].cardsrc}" alt=""></div>
                <div class="carddetail">
                  <div class="cardicon">
                    <img src="${homeJson[j].channelsrc}" alt="" />
                  </div>
                  <div class="icondetail">
                    <div class="detailone">${homeJson[j].description}</div>
                    <div class="detailtwo">${homeJson[j].name}</div>
                    <div class="detailthree"></div>
                  </div>
                </div>`;
  cardrootthird.appendChild(cardhome);
}
