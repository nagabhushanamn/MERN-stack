

let panel1 = document.getElementById("panel-1")
let panel2 = document.getElementById("panel-2")
let panel3 = document.getElementById("panel-3")

panel1.style.display = "none"
panel2.style.display = "none"
panel3.style.display = "block"

function changeTab(event) {
    if (event.target.id === "tab-1") {
        panel1.style.display = "block"
        panel2.style.display = "none"
        panel3.style.display = "none"
    }
    if (event.target.id === "tab-2") {
        panel1.style.display = "none"
        panel2.style.display = "block"
        panel3.style.display = "none"
    }
    if (event.target.id === "tab-3") {
        panel1.style.display = "none"
        panel2.style.display = "none"
        panel3.style.display = "block"
    }
}