id = 0;
main = document.querySelector("#body_sublocation_main");
input = document.querySelectorAll("#body_location");
body_sublocation_div = document.querySelector(".empty");
year_of_birth = document.querySelector(".year");
gender = document.querySelector("#gender");
for (let i = 0; i < input.length; i++) {
  input[i].disabled = true;
}
year_of_birth.addEventListener("change", function () {
  body_sublocation_div.remove();
  addempty();
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) input[i].checked = false;
    input[i].disabled = false;
  }
  if (!year_of_birth.value) {
    for (let i = 0; i < input.length; i++) {
      if (input[i].checked) input[i].checked = false;
      input[i].disabled = true;
    }
  }
});
for (let k = 0; k < input.length; k++) {
  input[k].addEventListener("click", function () {
    if (input[k].checked) {
      id = input[k].value;
      chosen_body_sublocation = input[k].name;
      getBodySublocation();
      for (let j = 0; j < input.length; j++) {
        if (k != j) input[j].disabled = true;
      }
    } else {
      //location.reload();
      document
        .querySelector("#body_sublocation_div")
        .contentWindow.location.reload(true);
      for (let q = 0; q < input.length; q++) {
        input[q].disabled = false;
      }
      body_sublocation_div.remove();
      addempty();
    }
  });
}
async function getBodySublocation() {
  const response = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/${id}?language=en-gb`,
    body_sublocation
  );
  const data = await response.json();
  console.log(data);
  body_sublocation_div = document.createElement("div");
  body_sublocation_div.setAttribute("id", "body_sublocation_div");
  main.appendChild(body_sublocation_div);
  if (data != null) {
    let delimiter = document.createElement("hr");
    delimiter.classList.add("delimiter");
    document.querySelector("#body_sublocation_div").appendChild(delimiter);
    for (let i = 0; i < data.length; i++) {
      let body_sublocation = document.createElement("input");
      body_sublocation.setAttribute("class", "inputs");
      body_sublocation.type = "checkbox";
      body_sublocation.value = data[i].ID;
      body_sublocation.name = "body_sublocation";
      body_sublocation.id = "body_sublocation";
      body_sublocation.innerHTML = data[i].Name;
      document
        .querySelector("#body_sublocation_div")
        .appendChild(body_sublocation);
      let label = document.createElement("label");
      label.setAttribute("for", "body_sublocation");
      label.innerHTML = data[i].Name;
      document.querySelector("#body_sublocation_div").appendChild(label);
    }
    script = document.createElement("script");
    script.src = "/symptoms/symptom_sublocation.js";
    document.body.appendChild(script);
  }
}
