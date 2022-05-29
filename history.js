id_ = localStorage.getItem("myid");
id_ = id_.slice(1, -1);
console.log(id_);
data = [
  id_,
  chosen_body_sublocation,
  chosen_diagnosis,
  chosen_more_diagnosis,
  chosen_symptom,
  chosen_issues,
];
console.log(data);
async function f() {
  let url = "http://localhost:3000/addsymptom";

  let valg = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
  let val = await valg.text();
  console.log(val);
  alert(val);
}
f();
data1 = [id_, description.innerHTML];
async function g() {
  let url = "http://localhost:3000/diagnostic";

  let valg = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data1),
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
  let val = await valg.text();
  console.log(val);
  alert(val);
}
g();
