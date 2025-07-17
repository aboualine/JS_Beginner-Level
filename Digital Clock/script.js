function timer() {
  let date = new Date();
  let sec = String(date.getSeconds()).padStart(2, "0");
  let min = String(date.getMinutes()).padStart(2, "0");
  let hrs = String(date.getHours()).padStart(2, "0");

  document.getElementById("sec").innerText = sec;
  document.getElementById("min").innerText = min;
  document.getElementById("heu").innerText = hrs;
}
setInterval(timer, 1000);

document.getElementById("btn").addEventListener("click", () => {
  console.log("The button was clicked successfully.");
  let date = new Date();
  let hrs = date.getHours();
  if (hrs >= 12) {
    document.getElementById("day").innerHTML = "<div>It's noon 'PM'</div>";
  } else {
    document.getElementById("day").innerHTML = "<div>It's morning 'AM'</div>";
  }
});
