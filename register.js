let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let form = document.querySelector("form");
let login = document.querySelector(".login");
let register = document.querySelector(".register");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let formdata = new FormData(e.target);
  let data = Object.fromEntries(formdata);
  console.log(data);

  async function f() {
    let url = "http://localhost:3000/";
    if (e.submitter == login) url += "login";
    else url += "register";
    let valg = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    });
    let val = await valg.text();
    console.log(val);
    alert(val);
    if (
      e.submitter == login &&
      val != "Invalid Password" &&
      val != "User does not exist"
    ) {
      localStorage.setItem("myid", val);
      localStorage.setItem("email", email.value);
    }
  }
  f();
});
