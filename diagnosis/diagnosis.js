id_more_diagnosis = [];
input_more_diagnosis = document.querySelectorAll("#diagnosis_body_sublocation");
more_diagnosis_body_sublocation_div = document.querySelector(".empty");
valstring2 = "";
year_of_birth = document.querySelector(".year");
gender = document.querySelector("#gender");
scripts = document.querySelectorAll("script");
console.log(scripts);
for (let k = 0; k < input_more_diagnosis.length; k++) {
  input_more_diagnosis[k].addEventListener("click", function () {
    if (input_more_diagnosis[k].checked) {
      id_more_diagnosis.push(input_more_diagnosis[k].value);
      valstring2 = id_more_diagnosis.toString();
      valstring2 = valstring2.replace(",", "%2C");
      console.log(valstring2);
      console.log(id_more_diagnosis);
      chosen_more_diagnosis = input_more_diagnosis[k].textContent;
      if (valstring2.length > 0) {
        for (let i = 0; i < scripts.length; i++) {
          if (
            scripts[i].src == "http://127.0.0.1:5500/health_issues/issues.js"
          ) {
            console.log("instruuuu");
            scripts[i].remove();
          }
          console.log(scripts[i].src);
        }
        getissues();
        for (let j = 0; j < input_more_diagnosis.length; j++) {
          if (k != j) input_more_diagnosis[j].disabled = true;
        }
      }
    } else {
      location.reload();
      for (let q = 0; q < input_more_diagnosis.length; q++) {
        input_more_diagnosis[q].disabled = false;
      }
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src == "http://127.0.0.1:5500/health_issues/issues.js") {
          console.log("instruuuu");
          scripts[i].remove();
        }
        console.log(scripts[i].src);
      }
      id_more_diagnosis = id_more_diagnosis.filter(
        (item) => item !== input_more_diagnosis[k].value
      );
      console.log(id_more_diagnosis);

      valstring2 = id_more_diagnosis.toString();
      valstring2 = valstring2.replace(",", "%2C");
      console.log(valstring2);
      more_diagnosis_body_sublocation_div.remove();
      addempty();
    }
  });
}
async function getissues() {
  const response = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?gender=${gender.value}&year_of_birth=${year_of_birth.value}&language=en-gb&symptoms=%5B${valstring2}%5D`,
    diagnosis
  );
  console.log(gender.value);
  console.log(year_of_birth.value);
  more_diagnosis_body_sublocation_div.remove();
  addempty();
  const data = await response.json();
  console.log(data);
  more_diagnosis_body_sublocation_div = document.createElement("div");
  more_diagnosis_body_sublocation_div.setAttribute(
    "id",
    "more_diagnosis_body_sublocation_div"
  );
  diagnosis_body_sublocation_div.appendChild(
    more_diagnosis_body_sublocation_div
  );
  if (data != null) {
    let delimiter = document.createElement("hr");
    delimiter.classList.add("delimiter");
    document
      .querySelector("#more_diagnosis_body_sublocation_div")
      .appendChild(delimiter);
    for (let i = 0; i < data.length; i++) {
      let more_diagnosis_body_sublocation = document.createElement("input");
      more_diagnosis_body_sublocation.setAttribute("class", "inputs");
      more_diagnosis_body_sublocation.type = "checkbox";
      more_diagnosis_body_sublocation.value = data[i].Issue.ID;
      more_diagnosis_body_sublocation.name = data[i].Issue.IcdName;
      more_diagnosis_body_sublocation.id = "more_diagnosis_body_sublocation";
      more_diagnosis_body_sublocation.innerHTML = data[i].Issue.Name;
      document
        .querySelector("#more_diagnosis_body_sublocation_div")
        .appendChild(more_diagnosis_body_sublocation);
      let label = document.createElement("label");
      label.setAttribute("for", "more_diagnosis_body_sublocation");
      label.innerHTML = data[i].Issue.Name;
      document
        .querySelector("#more_diagnosis_body_sublocation_div")
        .appendChild(label);
    }
    script = document.createElement("script");
    script.src = "health_issues/issues.js";
    document.body.appendChild(script);
    scripts = document.querySelectorAll("script");
  }
}
