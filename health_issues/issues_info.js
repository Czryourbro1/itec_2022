year_of_birth = document.querySelector(".year");
gender = document.querySelector("#gender");
export default async function getissuesinfo() {
  const response = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/issues/${issue}/info?language=en-gb`,
    issues_info
  );
  console.log(response);
  console.log("aici");
  console.log(gender.value);
  console.log(year_of_birth.value);
  const data = await response.json();
  console.log(data);
  description = document.createElement("div");
  description.classList.add("result");
  description.innerHTML = data.Description;
  more_diagnosis_body_sublocation_div.appendChild(description);
  script = document.createElement("script");
  script.src = "history.js";
  document.body.appendChild(script);
}
//getissuesinfo();
