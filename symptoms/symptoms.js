fetch(
  "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms?language=en-gb&format=json",
  symptoms
)
  .then((response) => response.json())

  .catch((err) => console.error(err));
