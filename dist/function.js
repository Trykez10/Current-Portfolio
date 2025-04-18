const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

circles.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

requestAnimationFrame(animateCircles);

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index) {
        circle.x += (x - circle.x) * 0.5;
        circle.y += (y - circle.y) * 0.5;

        circle.style.left = circle.x - 12 + "px";
        circle.style.top = circle.y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        x = circle.x;
        y = circle.y;
    });

    requestAnimationFrame(animateCircles);
}

// Animation para sa sidebar navigation
function openMenu(){
    const getMenuList = document.getElementById('MenuLists');
    
    // Navigation Bar Strokes
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    if(getMenuList.classList.contains('hidden')){
        getMenuList.classList.remove('hidden');
        getMenuList.classList.add('flex');
    
        requestAnimationFrame(function(){
            getMenuList.classList.remove('opacity-0','translate-x-20');
            getMenuList.classList.add('opacity-100','translate-x-0');
            line1.classList.add('translate-y-5')
            line2.classList.add('absolute' ,'transform', 'translate-y-1/2', 'rotate-45');
            line3.classList.add('absolute' ,'transform', 'translate-y-1/2', '-rotate-45');

        });
    } else{
        getMenuList.classList.remove('opacity-100','translate-x-0');
        getMenuList.classList.add('opacity-0','translate-x-20');
        line1.classList.remove('translate-y-5')
        line2.classList.remove('absolute' ,'transform', 'translate-y-1/2', 'rotate-45');
        line3.classList.remove('absolute' ,'transform', 'translate-y-1/2', '-rotate-45');
        setTimeout(function(){  
            getMenuList.classList.add('hidden');
        }, 400); 
        
    }

}

// Changing text on name

const roles = ['a Computer Science Student', 'an Aspiring IT Professional', 'a Tilted Gamer']
let roleIndex = 0;
let charIndex = 0;
const speed = 100;
const textchange = document.getElementById('changing-text');

function type(){
    if(charIndex < roles[roleIndex].length){
        textchange.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    }else{
        setTimeout(erase, 2000);
    }

}   

function erase(){
    if(charIndex > 0){
        textchange.textContent = roles[roleIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, speed / 2);
    }else{
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, speed)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    if(roles.length) type();
});