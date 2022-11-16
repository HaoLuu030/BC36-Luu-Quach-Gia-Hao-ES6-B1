let h2 = document.querySelector(".heading");

function spanCreator() {
  let newString = [...h2.innerHTML];
  console.log(newString);
  h2.innerHTML = "";
  for (item of newString) {
    h2.innerHTML += `<span>${item}</span>`;
  }
}

window.onload = function () {
  spanCreator();
};
