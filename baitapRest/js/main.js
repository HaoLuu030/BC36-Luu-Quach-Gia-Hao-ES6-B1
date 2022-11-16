//Get value function
const getValue = (id) => {
  return document.getElementById(id).value;
};

//Calc function
const calcAvg = (...restParam) => {
  let sum = 0;
  for (let i = 0; i < restParam.length; i++) {
    sum += restParam[i];
  }
  return sum / restParam.length;
};
//Validate function
const validateScore = (...restParam) => {
  let regEx = /[0-9]{1,2}/;
  for (let i = 0; i < restParam.length; i++) {
    if (restParam[i] === "") {
      alert("Vui lòng không để trống ô điểm");
      return false;
    }
    if (regEx.test(restParam[i]) === false) {
      alert("Vui lòng nhập số cho ô điểm");
    }
    if (restParam[i] * 1 < 0 || restParam[i] * 1 > 10) {
      alert("Điểm chỉ được nhập từ 0 đến 10");
      return false;
    }
  }
  return true;
};

//Attach the functions to the buttons
let button1 = document.getElementById("btnKhoi1");
let button2 = document.getElementById("btnKhoi2");
button1.onclick = function () {
  let math = getValue("inpToan");
  let physics = getValue("inpLy");
  let chemistry = getValue("inpHoa");
  let avgScore;
  if (validateScore(math, physics, chemistry)) {
    avgScore = calcAvg(math * 1, physics * 1, chemistry * 1);
    document.getElementById("tbKhoi1").innerHTML = avgScore;
  }
};

button2.onclick = function () {
  let literature = getValue("inpVan");
  let history = getValue("inpSu");
  let geography = getValue("inpDia");
  let english = getValue("inpEnglish");
  let avgScore;
  if (validateScore(literature, history, geography, english)) {
    avgScore = calcAvg(literature * 1, history * 1, geography * 1, english * 1);
    document.getElementById("tbKhoi2").innerHTML = avgScore;
  }
};
