id_red = 0;
inputred = document.querySelectorAll("#symptom_body_sublocation");
red_body_sublocation_div = document.querySelector(".empty");
console.log(inputred);
for (let k = 0; k < inputred.length; k++) {
  inputred[k].addEventListener("click", function () {
    if (inputred[k].checked && inputred[k].name == "true") {
      id_red = inputred[k].value;

      getred();
      for (let j = 0; j < inputred.length; j++) {
        if (k != j) inputred[j].disabled = true;
      }
    } else {
      //location.reload();
      for (let q = 0; q < inputred.length; q++) {
        inputred[q].disabled = false;
      }
      red_body_sublocation_div.remove();
      addempty();
    }
  });
}

async function getred() {
  const response = await fetch(
    `https://priaid-redtom-checker-v1.p.rapidapi.com/redflag?language=en-gb&symptomId=${id_red}`,
    redflag_pacient
  );
  const data = await response.json();
  console.log(data);
  alert(data);
  location.reload();
  red_body_sublocation_div = document.createElement("div");
  red_body_sublocation_div.setAttribute("id", "red_body_sublocation_div");
  body_sublocation_div.appendChild(red_body_sublocation_div);
}
