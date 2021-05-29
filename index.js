const url = "https://contest-finder-robin.herokuapp.com/api/contest";
// const url = "http://localhost:5000/api/contest";

document.querySelector("#submit").addEventListener("click", () => {
  let val = document.querySelector("#contest-id").value;
  val = parseInt(val);
  const data = {
    contest_id: val,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#get-list").click();
    });
});

document.querySelector("#update").addEventListener("click", () => {
  fetch(url + "/update", {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#get-list").click();
    });
});

document.querySelector("#get-list").addEventListener("click", () => {
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      let y = "";
      if (data.contests.length === 0) {
        y = y + "Please Update contest list";
      }
      data.contests.forEach((contest) => {
        y =
          y +
          `<div class="list-item">
          <a href="https://codeforces.com/contest/${contest}" target="_blank">Codeforces Div. 2 Round ${contest}</a>
          </div>
        `;
      });
      document.querySelector(".right").innerHTML = y;
    });
});
