year_of_birth = document.querySelector(".year");
gender = document.querySelector("#gender");
result = document.createElement("div");
result.classList.add("result");
document.body.appendChild(result);
async function getissuesinfo() {
  const response = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/issues/${issue}/info?language=en-gb`,
    issues_info
  );
  console.log(gender.value);
  console.log(year_of_birth.value);
  const data = await response.json();
  console.log(data);
  description = document.createElement("div");
  description.classList.add("result");
  description.innerHTML = data.Description;
  result.appendChild(description);
}
getissuesinfo();
