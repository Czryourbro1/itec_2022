let my_id = localStorage.getItem("myid");
my_id = my_id.slice(1, -1);
async function f() {
  let url = "http://localhost:3000/history";

  let valg = await fetch(url);
  let val = await valg.json();
  console.log(val);
  alert(val);
  val.map((item) => {
    if (item._id == my_id) {
      console.log(item);
      alert(item);
    }
  });
}
f();
