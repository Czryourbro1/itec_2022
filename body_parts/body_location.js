fetch(
  "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb",
  body_location
)
  .then((response) => response.json())

  .catch((err) => console.error(err));
