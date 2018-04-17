const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
    //console.log(e);
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight; what it would be oldstyle

    const{offsetWidth: width, offsetHeight: height} = hero; //ES6 destructuring
    let {offsetX: x, offsetY: y} = e //to know where the cursor is.

    console.log(x,y); //you'll get 0,0 at the top left corner of any element because you're calling for the element.
    //console.log(this, e.target);
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop; //so that it won't find the top left corner of any element you hover by adding on the values. 
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2)); //to standardize to pixels of the webpage. 
    const yWalk = Math.round((y/ height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
                             ${xWalk * -1 }px ${yWalk}px 0 rgba(0,255,255,0.7),
                             ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
                             ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
                             `;
}

hero.addEventListener('mousemove', shadow);
