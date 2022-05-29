function addempty() {
  if (document.querySelectorAll(".empty").length == 0) {
    gol = document.createElement("div");
    gol.classList.add("empty");
    document.body.appendChild(gol);
  }
}

const body_sublocation = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

const diagnosis = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

const proposed_symptoms = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

const issues_info = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

const issues = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

const redflag_pacient = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

const symptom_sublocation = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

const symptoms = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

//body_sublocation
let id = 0;
let main = document.querySelector("#body_sublocation_main");
let input = document.querySelectorAll("#body_location");
let body_sublocation_div = document.querySelector(".empty");
let gol;

//symptom_sublocation
let idsymp;
let inputsymp;
let symptom_body_sublocation_div;

// red_flag
let id_red;
let input_red;
let red_body_sublocation_div;

//diagnosis
let id_diagnosis;
let inputdiagnosis;
let diagnosis_body_sublocation_div;
let valstring = "";
let gender;
let year_of_birth;

//more diagnosis
let valstring2 = "";
let id_more_diagnosis;
let input_more_diagnosis;
let more_diagnosis_body_sublocation_div;

//health_issues
let valstring3 = "";
let id_issues;
let input_issues;
let issues_body_sublocation_div;
let issue;
let result;
let issue_info;
let description;
let chosen_body_sublocation;
let chosen_symptom;
let chosen_diagnosis;
let chosen_issues;
let chosen_more_diagnosis;
let chosen_red;
let big_div;
let data;
let history;
let checked_body_sublocation;
let checked_diagnosis;
let checked_redflag;
let checked_diagnosis_info;
let checked_symptoms;
let checked_issue;
let script;
let scripts;
let id_;
let data1;
