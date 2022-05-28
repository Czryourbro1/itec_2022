id_issues = [];
input_issues = document.querySelectorAll("#more_diagnosis_body_sublocation");
issues_body_sublocation_div = document.querySelector(".empty");
valstring3 = "";
year_of_birth = document.querySelector(".year");
gender = document.querySelector("#gender");

for (let k = 0; k < input_issues.length; k++) {
  input_issues[k].addEventListener("click", function () {
    if (input_issues[k].checked) {
      id_issues.push(input_issues[k].value);
      valstring3 = id_issues.toString();
      valstring3 = valstring3.replace(",", "%2C");
      console.log(valstring3);
      console.log(id_issues);

      if (valstring3.length > 2) getissues();
      for (let j = 0; j < input_issues.length; j++) {
        if (k != j) input_issues[j].disabled = true;
      }
    } else {
      for (let q = 0; q < input_issues.length; q++) {
        input_issues[q].disabled = false;
      }
      id_issues = id_issues.filter((item) => item !== input_issues[k].value);
      console.log(id_issues);

      valstring3 = id_issues.toString();
      valstring3 = valstring3.replace(",", "%2C");
      console.log(valstring3);
      if (valstring3.length > 2) getissues();
      issues_body_sublocation_div.remove();
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
  issues_body_sublocation_div.remove();
  addempty();
  const data = await response.json();
  console.log(data);
  issue = data[0].ID;
  let script = document.createElement("script");
  script.src = "health_issues/issues_info.js";
  script.setAttribute("type", "module");
  document.body.appendChild(script);
}
