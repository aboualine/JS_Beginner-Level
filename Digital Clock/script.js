document.getElementById("btn").addEventListener("click", () => {
    console.log("the button is clicked seccucfully...");
});
const date = new Date();
console.log(date);//this date code is working but i don't really know why is the other code note but we'll figure it out soon
const Hr = date.getHours();
const Mn = date.getMinutes();
const Sc = date.getSeconds();
document.getElementById("sec").innerText(date.Sc);
document.getElementById("min").innerText(Mn);
document.getElementById("heu").innerText(Hr);