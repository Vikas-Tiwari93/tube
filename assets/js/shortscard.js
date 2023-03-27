jsonshorts = [
  {
    img: "./assets/images/shortsimg/bestjabs.webp",
    description: "Best jabs in the history of MMA",
  },
  {
    img: "./assets/images/shortsimg/CDS exam.webp",
    description: " How to clear CDS",
  },
  {
    img: "./assets/images/shortsimg/gautumbuddha.webp",
    description: "Gautum Buddha",
  },
  {
    img: "./assets/images/shortsimg/india stands united.webp",
    description: "Amongst the row India..",
  },
  {
    img: "./assets/images/shortsimg/MINDANDBRETH.webp",
    description: " Mind and Breath",
  },
  {
    img: "./assets/images/shortsimg/RAMONEdinoVSCBum.webp",
    description: "Ramone dino Vs CBum",
  },
];

for (let a = 0; a < jsonshorts.length - 1; a++) {
  let shortsroot = document.getElementById("shortsroot");
  let shortscard = document.createElement("span");
  shortscard.className = "shortscard";
  shortscard.id = "shortscard";
  shortscard.innerHTML = ` 
    <div class="shortimg">
      <img
        src="${jsonshorts[a].img}"
        alt=""
      />
    </div>
    <div class="shortdetail">${jsonshorts[a].description}</div>
  `;
  shortsroot.appendChild(shortscard);
}
