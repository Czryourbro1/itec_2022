let my_id = localStorage.getItem("myid");
let symptom_div = document.querySelector(".symptoms");
my_id = my_id.slice(1, -1);
let cnt = 0;
async function f() {
  let url = "http://localhost:3000/history";

  let valg = await fetch(url);
  let val = await valg.json();
  console.log(val);
  alert(val);
  val.map((item) => {
    if (item._id == my_id) {
      console.log(item);
      alert(item);
      for (let i = 0; i < item.chosen_symptoms.length; i++) {
        if (i % 5 == 4 && i != 0) {
          let diag = document.createElement("span");
          diag.innerHTML = `<span class="diag">${item.chosen_symptoms[i]}</span>`;
          symptom_div.appendChild(diag);
          let diagnostic = document.createElement("span");
          diagnostic.innerHTML = `<span class="diagnostic">${item.diagnostic[cnt]}</span>`;
          symptom_div.appendChild(diagnostic);
          cnt++;
          let delim = document.createElement("hr");
          delim.classList.add("dashed");
          symptom_div.appendChild(delim);
        } else {
          let symptom = document.createElement("span");
          symptom.classList.add("symptom");
          symptom.innerHTML = item.chosen_symptoms[i];
          symptom_div.appendChild(symptom);
        }
      }
    }
  });
}
f();
