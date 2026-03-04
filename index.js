let citySelect = document.getElementById("city-select");

function updateTime() {
  let cities = document.querySelectorAll(".city");
  cities.forEach(function(cityDiv) {
    let tz = cityDiv.dataset.tz;
    if (!tz) return;
    let now = moment().tz(tz);
    cityDiv.querySelector(".date").textContent = now.format("MMMM D YYYY");
    cityDiv.querySelector(".time").textContent = now.format("h:mm:ss a");
  });
}

setInterval(updateTime, 1000);
updateTime();

function updateCity(event) {
  let tz = event.target.value;
  if (!tz) return;

  if (tz === "current") {
    tz = moment.tz.guess();
  }

  let cityName = tz.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(tz);

  let container = document.querySelector(".container");

  container.innerHTML = `
    <h1>World Clock</h1>
    <div class="city">
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM D YYYY")}</div>
      <div class="time">${cityTime.format("h:mm:ss a")}</div>
    </div>
    <p><a href="/">Back to homepage</a></p>
  `;

  setInterval(function() {
    let now = moment().tz(tz);
    document.querySelector(".date").textContent = now.format("MMMM D YYYY");
    document.querySelector(".time").textContent = now.format("h:mm:ss a");
  }, 1000);
}

citySelect.addEventListener("change", updateCity);