$(function () {
    let headerContent = document.querySelector('.header-content');
    let headerCue = document.querySelector('.header-cue');

    let nav = document.querySelector('.site-nav');
    let meetMonsters = document.querySelector('#meet');
    //let meetMonsters = $('#meet');
    // console.log(meetMonsters);
    let navHeight = nav.scrollHeight;
    function moveHeader() {
        let mainOnTop = meetMonsters.getBoundingClientRect().top - navHeight;
        mainOnTop < 0
        ? nav.classList.add('in-body')
        : nav.classList.remove('in-body')
    //    if (mainOnTop < 0){
    //        nav.classList.add('in-body')
    //     } else {
    //         nav.classList.remove('in-body')
    // }
        //console.log(`${meetMonsters.getBoundingClientRect().top}`);
        //console.log(meetMonsters.getBoundingClientRect().top);

        let currentCuePosition = headerContent.getBoundingClientRect().top;
        currentCuePosition < 0
        ? headerCue.classList.add('d-none')
        : headerCue.classList.remove('d-none')
        
        window.requestAnimationFrame(moveHeader);
    }
    window.requestAnimationFrame(moveHeader);
});