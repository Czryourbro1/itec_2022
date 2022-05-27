const body_sublocation = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};
let id = 0;
let main = document.querySelector("#body_sublocation_main");
let input = document.querySelectorAll("#body_location");

for (let k = 0; k < input.length; k++) {
  input[k].addEventListener("click", function () {
    for (let i = 0; i < input.length; i++) {
      if (input[i].checked) {
        id = input[i].value;
        getBodySublocation();
        for (let j = 0; j < input.length; j++) {
          if (i != j) input[j].disabled = true;
        }
      } else {
        for (let q = 0; q < input.length; q++) {
          if (input[q].checked) break;
          else {
            input[q].disabled = false;
            body_sublocation_div.remove();
          }
        }
      }
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

  if (data != null) {
    let body_sublocation_div = document.createElement("div");
    body_sublocation_div.setAttribute("id", "body_sublocation_div");
    main.appendChild(body_sublocation_div);
    for (let i = 0; i < data.length; i++) {
      let body_sublocation = document.createElement("input");
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
    for (let i = 0; i < input.length; i++) {
      if (input[i].checked) break;
      else {
        body_sublocation_div.remove();
      }
    }
  }
}
