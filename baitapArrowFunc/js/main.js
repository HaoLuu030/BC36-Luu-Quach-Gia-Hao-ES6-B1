
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermilion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const renderColor = (colorArray) => {
  let colorContainer = document.getElementById("colorContainer");
  for (let i = 0; i < colorArray.length; i++) {
    if (i === 0) {
      colorContainer.innerHTML += `<button class="color-button ${colorArray[i]} active" onclick = "changeColor('${colorArray[i]}')"></button>`;
    } else {
      colorContainer.innerHTML += `<button class="color-button ${colorArray[i]}" onclick = "changeColor('${colorArray[i]}')"></button>`;
    }
  }
};

const changeColor = (color) => {
  //remove active classes
  let buttonList = document.getElementsByTagName("button");
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("active");
  }
  //add active class
  let button = document.querySelector(`.${color}`);
  button.classList.add("active");

  let house = document.querySelector("#house");
  let houseClasses = house.classList;
  //check if house has already had a color in it
  if (houseClasses.length === 2) {
    houseClasses.remove(house.classList[1]);
  }
  //add color
  houseClasses.add(color);
};

window.onload = function () {
  renderColor(colorList);
};
