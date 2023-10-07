const vc1 = document.getElementById("vc-1");
const vc2 = document.getElementById("vc-2");
const vc3 = document.getElementById("vc-3");

const vt1 = document.getElementById("vt-1");
const vt2 = document.getElementById("vt-2");
const vt3 = document.getElementById("vt-3");

function showvc1() {
    vc1.style.display = 'block';
    vc2.style.display = 'none';
    vc3.style.display = 'none';
    vt1.style.backgroundColor = 'aliceblue';
    vt2.style.backgroundColor = '#ff7442';
    vt3.style.backgroundColor = '#ff7442';
}

function showvc2() {
    vc1.style.display = 'none';
    vc2.style.display = 'block';
    vc3.style.display = 'none'; 
    vt2.style.backgroundColor = 'aliceblue';
    vt1.style.backgroundColor = '#ff7442';
    vt3.style.backgroundColor = '#ff7442';
}

function showvc3() {
    vc1.style.display = 'none';
    vc2.style.display = 'none';
    vc3.style.display = 'block'; 
    vt3.style.backgroundColor = 'aliceblue';
    vt1.style.backgroundColor = '#ff7442';
    vt2.style.backgroundColor = '#ff7442';
}

let curSlide = 0;

const slides = document.getElementsByClassName('slide');
const prev   = document.getElementById("prev");
const next   = document.getElementById("next");

function slideshowNext() {
    if(curSlide < slides.length) {
        curSlide++;
        for(i = 0;i < slides.length;i++) {
            slides[i].style.display = 'none';
        }
        slides[curSlide].style.display = 'block';
    }
    
    if (curSlide === slides.length - 1) {
        next.style.display = 'none';
        prev.style.display = 'block';
    }
    else {
        next.style.display = 'block';
        prev.style.display = 'block';
    }
    console.log(curSlide, slides.length);
}

function slideshowPrev() {
    if(curSlide > 0) {
        curSlide--;
        for(i = 0;i < slides.length;i++) {
            slides[i].style.display = 'none';
        }
        slides[curSlide].style.display = 'block';
    }

    if(curSlide === 0) {
        prev.style.display = 'none';
        next.style.display = 'block';
    }
    else {
        prev.style.display = 'block';
        next.style.display = 'block';
    }
    console.log(curSlide, slides.length);
}