// let api_key = "AIzaSyDP8nyOk9n2U6hSBPoQDsrh72zvaQHEQZY";
// let video_http = "https://www.googleapis.com/youtube/v3/videos?";
// fetch(
//   video_http +
//     new URLSearchParams({
//       key: api_key,
//       part: "snippet",
//       chart: "mostPopular",
//       maxResults: 1,
//       regionCode: "IN",
//     })
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

jsonvideopage = [
  {
    name: "Modern martial arts",
    cardsrc: "./assets/images/cardimg/one.webp",
    description:
      " Anotinio Palzibat once knocked a 6'8” top 5 competitor down with a jab.",
  },
  {
    name: "Economic Explained",
    cardsrc: "./assets/images/cardimg/two.webp",
    description: " WILL everything end in a economic disaster",
  },
  {
    name: "Darbar festival",
    cardsrc: "./assets/images/cardimg/three.jpg",
    description:
      "Roopa Panesar plays a courageous choice of raag Puriya, which is wr",
  },
  {
    name: "MMA specialist",
    cardsrc: "./assets/images/cardimg/four.webp",
    description: "Tony considered one amongst greatest in our era  ",
  },
  {
    name: "Fireship",
    cardsrc: "./assets/images/cardimg/five.webp",
    description: " #javascript source:Take the quiz...",
  },
  {
    name: "World affairs",
    cardsrc: "./assets/images/cardimg/six.webp",
    description:
      "India Replaces Russia in Satellite Launch | Rs. 1000 Crore Earned by ISRO ",
  },
  {
    name: "IGN",
    cardsrc: "./assets/images/cardimg/seven.webp",
    description:
      " Epic showcased the new features coming to Unreal 5.2. These new features",
  },
  {
    name: "Drew Handerson",
    cardsrc: "./assets/images/cardimg/eight.JPG",
    description: " Prelude, Sarabande for Lute in C minor",
  },
];
for (let k = 0; k < jsonvideopage.length; k++) {
  let cardroot = document.getElementById("rightbody");
  let card = document.createElement("div");
  card.id = "card";
  card.className = "card";
  card.innerHTML = ` 
    <div id="cardopt"></div>
    <div id="watchlater"></div>
    <div id="cardimg" class="cardimg"><img src="${jsonvideopage[k].cardsrc}" alt=""></div>
    <div id="carddetails" class="carddetails">
      <div class="carddetaileach">${jsonvideopage[k].description}</div>
      <div class="channelnameeach">${jsonvideopage[k].name}</div>
     
    </div> `;
  cardroot.appendChild(card);
}
