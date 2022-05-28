fetch(
  "https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis/specialisations?symptoms=%5B234%2C11%5D&gender=male&year_of_birth=1984&language=en-gb",
  specialisations_diagnosis
)
  .then((response) => response.json())

  .catch((err) => console.error(err));
