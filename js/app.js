let Prev = document.querySelector('.prev');
let Next = document.querySelector('.next');
let Slider = document.querySelector('.slider');
let SliderLength = document.querySelectorAll('.slider-item').length;
let SliderWidth = window.innerWidth;

number = 0;

// start

Slider.style.width = (SliderWidth * SliderLength)+"px";

Next.onclick = function(){
    number++;
    if(number == SliderLength) {
        number = 0;
    }
    Slider.style.left = -(SliderWidth*number)+"px";
}

Prev.onclick = function(){
    number--;
    if(number == -1) {
        number = SliderLength-1;
    }
    Slider.style.left = -(SliderWidth*number)+"px";
}


AOS.init();


<svg xmlns="http://www.w3.org/2000/svg" width="548" height="548" viewBox="0 0 548 548">
  <circle id="Ellipse_2" data-name="Ellipse 2" cx="274" cy="274" r="274" fill="#d8f5ff"/>
</svg>
