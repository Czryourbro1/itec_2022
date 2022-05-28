id_diagnosis = [];
inputdiagnosis = document.querySelectorAll("#symptom_body_sublocation");
diagnosis_body_sublocation_div = document.querySelector(".empty");
valstring = "";
year_of_birth = document.querySelector(".year");
gender = document.querySelector("#gender");

for (let k = 0; k < inputdiagnosis.length; k++) {
  inputdiagnosis[k].addEventListener("click", function () {
    if (inputdiagnosis[k].checked) {
      id_diagnosis.push(inputdiagnosis[k].value);
      valstring = id_diagnosis.toString();
      valstring = valstring.replace(",", "%2C");
      console.log(valstring);
      console.log(id_diagnosis);
      chosen_diagnosis = inputdiagnosis[k].textContent;
      if (valstring.length > 0) getdiagnosis();
    } else {
      id_diagnosis = id_diagnosis.filter(
        (item) => item !== inputdiagnosis[k].value
      );
      console.log(id_diagnosis);

      valstring = id_diagnosis.toString();
      valstring = valstring.replace(",", "%2C");
      console.log(valstring);
      if (valstring.length > 0) getdiagnosis();
      //location.reload();
      diagnosis_body_sublocation_div.remove();
      addempty();
    }
  });
}
async function getdiagnosis() {
  const response = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed?gender=${gender.value}&year_of_birth=${year_of_birth.value}&language=en-gb&symptoms=%5B${valstring}%5D`,
    proposed_symptoms
  );
  console.log(gender.value);
  console.log(year_of_birth.value);
  diagnosis_body_sublocation_div.remove();
  addempty();
  const data = await response.json();
  console.log(data);
  diagnosis_body_sublocation_div = document.createElement("div");
  diagnosis_body_sublocation_div.setAttribute(
    "id",
    "diagnosis_body_sublocation_div"
  );
  symptom_body_sublocation_div.appendChild(diagnosis_body_sublocation_div);
  if (data != null) {
    let delimiter = document.createElement("hr");
    delimiter.classList.add("delimiter");
    document
      .querySelector("#diagnosis_body_sublocation_div")
      .appendChild(delimiter);
    for (let i = 0; i < data.length; i++) {
      let diagnosis_body_sublocation = document.createElement("input");
      diagnosis_body_sublocation.setAttribute("class", "inputs");
      diagnosis_body_sublocation.type = "checkbox";
      diagnosis_body_sublocation.value = data[i].ID;
      diagnosis_body_sublocation.name = data[i].HasRedFlag;
      diagnosis_body_sublocation.id = "diagnosis_body_sublocation";
      diagnosis_body_sublocation.innerHTML = data[i].Name;
      document
        .querySelector("#diagnosis_body_sublocation_div")
        .appendChild(diagnosis_body_sublocation);
      let label = document.createElement("label");
      label.setAttribute("for", "diagnosis_body_sublocation");
      label.innerHTML = data[i].Name;
      document
        .querySelector("#diagnosis_body_sublocation_div")
        .appendChild(label);
    }
    script = document.createElement("script");
    script.src = "symptoms/redflag_pacient.js";
    document.body.appendChild(script);
    script = document.createElement("script");
    script.src = "diagnosis/diagnosis.js";
    document.body.appendChild(script);
  }
}
