fetch(
  "https://priaid-symptom-checker-v1.p.rapidapi.com/specialisations?language=en-gb",
  specialisations_list
)
  .then((response) => response.json())

  .catch((err) => console.error(err));
