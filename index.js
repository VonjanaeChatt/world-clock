let laDiv = document.getElementById("los-angeles")
let citySelect = document.getElementById("city-select")

function updateTime() {
  let now = moment().tz("America/Los_Angeles")
  laDiv.querySelector(".date").textContent = now.format("MMMM D YYYY")
  laDiv.querySelector(".time").textContent = now.format("h:mm:ss a")
}

setInterval(updateTime, 1000)
updateTime()

citySelect.addEventListener("change", function() {
  let tz = citySelect.value
  if (tz) {
    if (tz === "current") {
      tz = moment.tz.guess()
    }
    let now = moment().tz(tz)
    alert("It is " + now.format("dddd, MMMM D YYYY h:mm A") + " in " + tz)
  }
})