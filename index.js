const yesBtm = document.querySelector("#yesBtn");

yesBtm.addEventListener("click",function() {
    alert("ya sabia que te mueres por mi mi amor<3")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover",function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top", randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform","translate(-${randomX}%,-${randomY}%)");
})