document.getElementById("little-images").addEventListener("click" , clickOnImage);
function clickOnImage(event) {
    if (event.target.tagName === "IMG") {
        let imageClicked = event.target.getAttribute("src");
        console.log("the image clicked is : "+imageClicked);
        document.getElementById("big-image").innerHTML = "<img src='"+imageClicked+"' alt=''>";
    }
}
