let citySelect = document.getElementById("city-select")

function updateTime() {
  let cities = document.querySelectorAll(".city")
  cities.forEach(function(cityDiv) {
    let tz = cityDiv.dataset.tz
    if (!tz) return
    let now = moment().tz(tz)
    cityDiv.querySelector(".date").textContent = now.format("MMMM D YYYY")
    cityDiv.querySelector(".time").textContent = now.format("h:mm:ss a")
  })
}

setInterval(updateTime, 1000)
updateTime()

function updateCity(event) {
  let tz = event.target.value
  if (!tz) return
  if (tz === "current") tz = moment.tz.guess()
  let cityName = tz.split("/")[1] || tz
  let cityTime = moment().tz(tz)
  alert("It is " + cityTime.format("dddd, MMMM D YYYY h:mm A") + " in " + cityName)
}

citySelect.addEventListener("change", updateCity)