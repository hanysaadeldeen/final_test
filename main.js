let ourskills = document.querySelector(".skills");
console.log(ourskills)
window.onscroll = () => {
    // skills offset top
    let offsettop = ourskills.offsettop;
    //skills outer heigher
    let outerheight = ourskills.offsetHeight;

    let heigt = this.innerHeight;

    let scrolltop = this.pageYOffset;

    if (scrolltop > offsettop + outerheight - heigt) {
        let scroll = document.querySelectorAll(
            ".skills .container .info .lang .skill-progress span "
        )
        console.log(scroll)
        scroll.forEach(skill => {
            skill.style.width = skill.dataset.progress

        })
    }
};