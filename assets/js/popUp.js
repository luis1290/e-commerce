const modalIndex = document.getElementById("find")
function showPopup() {
    document.querySelector(".pop-up").classList.add("show")
    document.querySelector(".pop-up-wrap").classList.add("show")
}
document.getElementById("close").addEventListener("click", ()=>{
    document.querySelector(".pop-up").classList.remove("show")
    document.querySelector(".pop-up-wrap").classList.remove("show")
})

modalIndex.addEventListener("click", showPopup)

document.getElementById("form_modal").addEventListener("submit", (e)=>{
    e.preventDefault()
    document.querySelector(".pop-up").classList.remove("show")
    document.querySelector(".pop-up-wrap").classList.remove("show")
})