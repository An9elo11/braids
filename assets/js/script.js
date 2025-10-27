function afficherPrix(taille){
    const sections = ["S", "M", "L"];

    sections.forEach(id => {
        const section = document.getElementById(id)
        const arrow = document.querySelector(`#aff${id} .arrow`);


        if(id === taille) {
            const isVisible = section.style.display === "block"
            section.style.display = isVisible ? "none" : "block";
            arrow.classList.toggle("active", !isVisible);
        }else{
            section.style.display = "none";
            const otherArrow = document.querySelector(`#aff${id} .arrow`);
            if(otherArrow) otherArrow.classList.remove("active");
        }
    });
}

document.getElementById("affS").addEventListener("click", () => afficherPrix("S"));
document.getElementById("affM").addEventListener("click", () => afficherPrix("M"));
document.getElementById("affL").addEventListener("click", () => afficherPrix("L"));

