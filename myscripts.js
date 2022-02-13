'use strict';


function resetsss(){

  document.getElementById("frm2").reset();
  document.getElementById("frm3").reset();
  document.getElementById("frm4").reset();

}

function anticedentCondition(){

  let average = ((parseInt(document.getElementById("5days").value) * 0.4) + (parseInt(document.getElementById("4days").value) * 0.6) + (parseInt(document.getElementById("3days").value) * 0.8) + (parseInt(document.getElementById("2days").value) * 0.9) + (parseInt(document.getElementById("1days").value) * 1));

  let anticedent;

  if ((document.getElementById("5days").value === "") || (document.getElementById("4days").value === "") || (document.getElementById("3days").value === "") || (document.getElementById("2days").value === "") || (document.getElementById("1days").value === "")) {
    alert("Boxes cannot be left empty");

  }else if ((document.getElementById("5days").value < 0) || (document.getElementById("4days").value < 0) || (document.getElementById("3days").value < 0) || (document.getElementById("2days").value < 0) || (document.getElementById("1days").value < 0) || (document.getElementById("5days").value > 500) || (document.getElementById("4days").value > 500) || (document.getElementById("3days").value > 500) || (document.getElementById("2days").value > 500) || (document.getElementById("1days").value > 500)) {
    alert("All values must be between 0 and 500");
  }else {
    if (average > 49) {
      anticedent = "Sat";
    }else if (average >= 26 && average <= 49) {
      anticedent = "Wet";
    }else {
      anticedent = "Dry";
    }
    document.getElementById("antiCondition").value = anticedent;

    if (document.getElementById("roundedTotal").value === "Flooding is unlikely") {
      document.getElementById("name").value = "Flooding is unlikely";
    }else {
      document.getElementById("name").value = document.getElementById("catchments").value + "_" + document.getElementById("roundedTotal").value + "_" + document.getElementById("stormProfile").value + "_" + document.getElementById("antiCondition").value;

      let mapName = document.getElementById("name").value;


      localStorage.setItem("mapName", mapName);

      localStorage.setItem("day5", document.getElementById("5days").value);
      localStorage.setItem("day4", document.getElementById("4days").value);
      localStorage.setItem("day3", document.getElementById("3days").value);
      localStorage.setItem("day2", document.getElementById("2days").value);
      localStorage.setItem("day1", document.getElementById("1days").value);

    }
  }
}

function totalCalc(){

  let totalHrsAgo = (parseInt(document.getElementById("12hours").value) + parseInt(document.getElementById("11hours").value) + parseInt(document.getElementById("10hours").value) + parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) + parseInt(document.getElementById("3hours").value) + parseInt(document.getElementById("2hours").value) + parseInt(document.getElementById("1hours").value));

  let roundedTotalHrs;
  let sizes;

  if (totalHrsAgo < 20) {
      roundedTotalHrs = "Flooding is unlikely";
    }else if (totalHrsAgo >= 20 && totalHrsAgo < 30) {
      roundedTotalHrs = "20mm";
    }else if (totalHrsAgo >= 30 && totalHrsAgo < 50) {
      roundedTotalHrs = "30mm";
    }else if (totalHrsAgo >= 50 && totalHrsAgo < 75) {
      roundedTotalHrs = "50mm";
    }else if (totalHrsAgo >= 75 && totalHrsAgo < 100) {
      roundedTotalHrs = "75mm";
    }else if (totalHrsAgo >= 100 && totalHrsAgo < 150) {
      roundedTotalHrs = "100mm";
    }else {
      roundedTotalHrs = "150mm";
    }

  if (parseInt(document.getElementById("12hours").value) + parseInt(document.getElementById("11hours").value) + parseInt(document.getElementById("10hours").value) + parseInt(document.getElementById("9hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("11hours").value) + parseInt(document.getElementById("10hours").value) + parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("10hours").value) + parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) + parseInt(document.getElementById("3hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) + parseInt(document.getElementById("3hours").value) + parseInt(document.getElementById("2hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("4hours").value) + parseInt(document.getElementById("3hours").value) + parseInt(document.getElementById("2hours").value) + parseInt(document.getElementById("1hours").value) >= ((totalHrsAgo / 100) * 80)) {
    sizes = "Short";
  }else if (parseInt(document.getElementById("12hours").value) + parseInt(document.getElementById("11hours").value) + parseInt(document.getElementById("10hours").value) + parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("11hours").value) + parseInt(document.getElementById("10hours").value) + parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("10hours").value) + parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("9hours").value) + parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("8hours").value) + parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) + parseInt(document.getElementById("3hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("7hours").value) + parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) + parseInt(document.getElementById("3hours").value) + parseInt(document.getElementById("2hours").value) >= ((totalHrsAgo / 100) * 80) || parseInt(document.getElementById("6hours").value) + parseInt(document.getElementById("5hours").value) + parseInt(document.getElementById("4hours").value) + parseInt(document.getElementById("3hours").value) + parseInt(document.getElementById("2hours").value) + parseInt(document.getElementById("1hours").value) >= ((totalHrsAgo / 100) * 80)) {
    sizes = "Med";
  }else {
    sizes = "Long";
  }


  if ((document.getElementById("12hours").value === "") || (document.getElementById("11hours").value === "") || (document.getElementById("10hours").value === "") || (document.getElementById("9hours").value === "") || (document.getElementById("8hours").value === "") || (document.getElementById("7hours").value === "") || (document.getElementById("6hours").value === "") || (document.getElementById("5hours").value === "") || (document.getElementById("4hours").value === "") || (document.getElementById("3hours").value === "") || (document.getElementById("2hours").value === "") || (document.getElementById("1hours").value === "")) {
    alert("Boxes cannot be left empty");

  }else if ((document.getElementById("12hours").value < 0) || (document.getElementById("11hours").value < 0) || (document.getElementById("10hours").value < 0) || (document.getElementById("9hours").value < 0) || (document.getElementById("8hours").value < 0) || (document.getElementById("7hours").value < 0) || (document.getElementById("6hours").value < 0) || (document.getElementById("5hours").value < 0) || (document.getElementById("4hours").value < 0) || (document.getElementById("3hours").value < 0) || (document.getElementById("2hours").value < 0) || (document.getElementById("1hours").value < 0) || (document.getElementById("12hours").value > 500) || (document.getElementById("11hours").value > 500) || (document.getElementById("10hours").value > 500) || (document.getElementById("9hours").value > 500) || (document.getElementById("8hours").value > 500) || (document.getElementById("7hours").value > 500) || (document.getElementById("6hours").value > 500) || (document.getElementById("5hours").value > 500) || (document.getElementById("4hours").value > 500) || (document.getElementById("3hours").value > 500) || (document.getElementById("2hours").value > 500) || (document.getElementById("1hours").value > 500)) {
    alert("All values must be between 0 and 500");
  }else {
    document.getElementById("total").value = totalHrsAgo;
    document.getElementById("roundedTotal").value = roundedTotalHrs;
    document.getElementById("stormProfile").value = sizes;

    if (document.getElementById("roundedTotal").value === "Flooding is unlikely") {
      document.getElementById("name").value = "Flooding is unlikely";
    }else {
      document.getElementById("name").value = document.getElementById("catchments").value + "_" + document.getElementById("roundedTotal").value + "_" + document.getElementById("stormProfile").value + "_" + document.getElementById("antiCondition").value;

      let mapName = document.getElementById("catchments").value + "_" + document.getElementById("roundedTotal").value + "_" + document.getElementById("stormProfile").value + "_" + document.getElementById("antiCondition").value;

      localStorage.setItem("mapName", mapName);

      localStorage.setItem("hour12", document.getElementById("12hours").value);
      localStorage.setItem("hour11", document.getElementById("11hours").value);
      localStorage.setItem("hour10", document.getElementById("10hours").value);
      localStorage.setItem("hour9", document.getElementById("9hours").value);
      localStorage.setItem("hour8", document.getElementById("8hours").value);
      localStorage.setItem("hour7", document.getElementById("7hours").value);
      localStorage.setItem("hour6", document.getElementById("6hours").value);
      localStorage.setItem("hour5", document.getElementById("5hours").value);
      localStorage.setItem("hour4", document.getElementById("4hours").value);
      localStorage.setItem("hour3", document.getElementById("3hours").value);
      localStorage.setItem("hour2", document.getElementById("2hours").value);
      localStorage.setItem("hour1", document.getElementById("1hours").value);

    }
  }
}


function SubmitButtons(){
  if (document.getElementById("antiCondition").value == "" || document.getElementById("stormProfile").value == "") {
    alert("Form Incomplete");
  }else {
    document.location.href = 'map.html';
  }
}

function backButton(){
  document.location.href = 'index.html';

}
