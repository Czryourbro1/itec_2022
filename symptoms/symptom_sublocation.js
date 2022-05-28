idsymp = 0;
inputsymp = document.querySelectorAll("#body_sublocation");
symptom_body_sublocation_div = document.querySelector(".empty");
console.log(inputsymp);
for (let k = 0; k < inputsymp.length; k++) {
  inputsymp[k].addEventListener("click", function () {
    if (inputsymp[k].checked) {
      idsymp = inputsymp[k].value;
      chosen_symptom = inputsymp[k].textContent;
      getsymptom();
      for (let j = 0; j < inputsymp.length; j++) {
        if (k != j) inputsymp[j].disabled = true;
      }
    } else {
      //location.reload();
      for (let q = 0; q < inputsymp.length; q++) {
        inputsymp[q].disabled = false;
      }
      symptom_body_sublocation_div.remove();
      addempty();
    }
  });
}

async function getsymptom() {
  const response = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/${idsymp}/man?language=en-gb`,
    symptom_sublocation
  );
  const data = await response.json();
  console.log(data);
  symptom_body_sublocation_div = document.createElement("div");
  symptom_body_sublocation_div.setAttribute(
    "id",
    "symptom_body_sublocation_div"
  );
  body_sublocation_div.appendChild(symptom_body_sublocation_div);
  if (data != null) {
    let delimiter = document.createElement("hr");
    delimiter.classList.add("delimiter");
    document
      .querySelector("#symptom_body_sublocation_div")
      .appendChild(delimiter);
    for (let i = 0; i < data.length; i++) {
      let symptom_body_sublocation = document.createElement("input");
      symptom_body_sublocation.setAttribute("class", "inputs");
      symptom_body_sublocation.type = "checkbox";
      symptom_body_sublocation.value = data[i].ID;
      symptom_body_sublocation.name = data[i].HasRedFlag;
      symptom_body_sublocation.id = "symptom_body_sublocation";
      symptom_body_sublocation.innerHTML = data[i].Name;
      console.log(data[i].Name);
      document
        .querySelector("#symptom_body_sublocation_div")
        .appendChild(symptom_body_sublocation);
      let label = document.createElement("label");
      label.setAttribute("for", "symptom_body_sublocation");
      label.innerHTML = data[i].Name;
      document
        .querySelector("#symptom_body_sublocation_div")
        .appendChild(label);
    }

    script = document.createElement("script");
    script.src = "symptoms/redflag_pacient.js";
    document.body.appendChild(script);
    script = document.createElement("script");
    script.src = "diagnosis/proposed_symptoms.js";
    document.body.appendChild(script);
  }
}
