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
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "Economic Explained",
    cardsrc: "./assets/images/cardimg/two.webp",
    description:
      " Will everything end in a economic disaster and collapse of world order",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "Darbar festival",
    cardsrc: "./assets/images/cardimg/three.jpg",
    description:
      "Roopa Panesar plays a courageous choice of raag Puriya, which is composed by",
    views: "7.7K views . 2 days ago",
  },
  {
    name: "MMA specialist",
    cardsrc: "./assets/images/cardimg/four.webp",
    description:
      "Tony considered one amongst greatest in this era. find out why?  ",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "Fireship",
    cardsrc: "./assets/images/cardimg/five.webp",
    description: " #javascript source:Take the quiz...",
    views: "7.7K views . 2 days ago",
  },
  {
    name: "World affairs",
    cardsrc: "./assets/images/cardimg/six.webp",
    description:
      "India Replaces Russia in Satellite Launch | Rs. 1000 Crore Earned by ISRO ",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "IGN",
    cardsrc: "./assets/images/cardimg/seven.webp",
    description:
      " Epic showcased the new features coming to Unreal 5.2. These new features",
    views: "7.7K views . 2 days ago",
  },
  {
    name: "Drew Handerson",
    cardsrc: "./assets/images/cardimg/eight.JPG",
    description: " Prelude, Sarabande for Lute in C minor",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "Modern martial arts",
    cardsrc: "./assets/images/cardimg/one.webp",
    description:
      " Anotinio Palzibat once knocked a 6'8” top 5 competitor down with a jab.",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "Economic Explained",
    cardsrc: "./assets/images/cardimg/two.webp",
    description:
      " Will everything end in a economic disaster and collapse of world order",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "Darbar festival",
    cardsrc: "./assets/images/cardimg/three.jpg",
    description:
      "Roopa Panesar plays a courageous choice of raag Puriya, which is composed by",
    views: "7.7K views . 2 days ago",
  },
  {
    name: "MMA specialist",
    cardsrc: "./assets/images/cardimg/four.webp",
    description:
      "Tony considered one amongst greatest in this era. find out why?  ",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "Fireship",
    cardsrc: "./assets/images/cardimg/five.webp",
    description: " #javascript source:Take the quiz...",
    views: "7.7K views . 2 days ago",
  },
  {
    name: "World affairs",
    cardsrc: "./assets/images/cardimg/six.webp",
    description:
      "India Replaces Russia in Satellite Launch | Rs. 1000 Crore Earned by ISRO ",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
  {
    name: "IGN",
    cardsrc: "./assets/images/cardimg/seven.webp",
    description:
      " Epic showcased the new features coming to Unreal 5.2. These new features",
    views: "7.7K views . 2 days ago",
  },
  {
    name: "Drew Handerson",
    cardsrc: "./assets/images/cardimg/eight.JPG",
    description: " Prelude, Sarabande for Lute in C minor",
    views: "7.7K views . 2 days ago",
    new: "New",
  },
];
let cardroot = document.getElementById("rightbody");
let fragment = document.createDocumentFragment();
for (let k = 0; k < jsonvideopage.length; k++) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = ` 
    <div class="cardopt"><img src="./assets/svgs/video-comment/videocardoptions.svg" alt=""></div>
    <div class="watchlater"><img src="./assets/svgs/video-comment/watchlater (1).svg" alt=""></div>
    <div id="cardimg" class="cardimg"><img src="${jsonvideopage[k].cardsrc}" alt=""></div>
    <div id="carddetails" class="carddetails">
      <div class="carddetaileach">${jsonvideopage[k].description}</div>
      <div class="channelnameeach">${jsonvideopage[k].name}<div>${jsonvideopage[k].views}</div>
      <span class="channelnew">${jsonvideopage[k].new}</span></div>
     
    </div> `;

  fragment.appendChild(card);
}
cardroot.appendChild(fragment);
for (let k = 0; k < jsonvideopage.length; k++) {
  if (jsonvideopage[k].new === undefined) {
    document.getElementsByClassName("channelnew")[k].style.opacity = "0";
  }
}
