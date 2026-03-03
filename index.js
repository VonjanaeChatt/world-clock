let laDiv = document.getElementById("los-angeles")

function updateTime() {
  let now = moment().tz("America/Los_Angeles")
  laDiv.querySelector(".date").textContent = now.format("MMMM D YYYY")
  laDiv.querySelector(".time").textContent = now.format("h:mm:ss a")
}

setInterval(updateTime, 1000)
updateTime()