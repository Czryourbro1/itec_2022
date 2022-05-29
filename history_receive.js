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
      for (let i = 1; i <= item.chosen_symptoms.length; i++) {
        if (i % 6 == 0) {
          if (item.diagnostic[cnt]) {
            let diagnostic = document.createElement("span");
            diagnostic.innerHTML = `<span class="diagnostic">${item.diagnostic[cnt]}</span>`;
            symptom_div.appendChild(diagnostic);
          }
          if (item.date[cnt]) {
            let date = document.createElement("span");
            date.innerHTML = `<span class="date">${item.date[cnt]}</span>`;
            symptom_div.appendChild(date);
            cnt++;
          }
        }
        if (item.chosen_symptoms[i]) {
          if (i % 5 == 0) {
            let symptom = document.createElement("span");
            symptom.innerHTML = `<span class="diag">${item.chosen_symptoms[i]}</span>`;
            symptom_div.appendChild(symptom);
          } else {
            let symptom = document.createElement("span");
            symptom.classList.add("symptom");
            symptom.innerHTML = item.chosen_symptoms[i];
            symptom_div.appendChild(symptom);
          }
        }
      }
    }
  });
}
f();
