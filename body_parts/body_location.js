const body_location = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "08805db294msha9cd99bf0490bc9p1509f3jsnc510eeb10d9e",
  },
};

fetch(
  "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb",
  body_location
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
