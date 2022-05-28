id_issues = [];
input_issues = document.querySelectorAll("#more_diagnosis_body_sublocation");
description = document.querySelector(".empty");
valstring3 = "";
year_of_birth = document.querySelector(".year");
gender = document.querySelector("#gender");
scripts = document.querySelectorAll("script");

for (let k = 0; k < input_issues.length; k++) {
  input_issues[k].addEventListener("click", function () {
    if (input_issues[k].checked) {
      id_issues.push(input_issues[k].value);
      valstring3 = id_issues.toString();
      valstring3 = valstring3.replace(",", "%2C");
      console.log(valstring3);
      console.log(id_issues);
      chosen_issues = input_issues[k].name;
      if (valstring3.length > 0) {
        console.log("getissues()");
        for (let i = 0; i < scripts.length; i++) {
          if (
            scripts[i].src ==
            "http://127.0.0.1:5500/health_issues/issues_info.js"
          ) {
            console.log("instruuuu");
            scripts[i].remove();
          }
          console.log(scripts[i].src);
        }
        getissues();
      }
    } else {
      location.reload();
      for (let i = 0; i < scripts.length; i++) {
        if (
          scripts[i].src == "http://127.0.0.1:5500/health_issues/issues_info.js"
        ) {
          console.log("instruuuu");
          scripts[i].remove();
          location.reload();
        }
        console.log(scripts[i].src);
      }
      id_issues = id_issues.filter((item) => item !== input_issues[k].value);
      console.log(id_issues);
      valstring3 = id_issues.toString();
      valstring3 = valstring3.replace(",", "%2C");
      console.log(valstring3);
      if (valstring3.length > 0) getissues();
      description.remove();
      addempty();
    }
  });
}
async function getissues() {
  const response = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/issues?issues=%5B${valstring3}%5D&language=en-gb`,
    issues
  );
  console.log(gender.value);
  console.log(year_of_birth.value);
  const data = await response.json();
  console.log(data);
  issue = data[0].ID;
  console.log(issue);
  import("./issues_info.js").then((module) => {
    console.log(module.default());
  });
  //var getissuesinfo = require("./issues_info.js");
  //getissuesinfo(issue);
  //script = document.createElement("script");
  //script.src = "health_issues/issues_info.js";
  //document.body.appendChild(script);
  scripts = document.querySelectorAll("script");
}
