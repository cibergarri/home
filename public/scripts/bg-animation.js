(() => {
  const thisScript = document.querySelector('script[src*="bg-animation.js"]');
  const classSuffix = thisScript.getAttribute("data-class-suffix");
  const bg = document.querySelector('#background-image');
  
  let coordinates = { pageX: 0, pageY: 0 };
  const animationEvent = (event) => {
    // A touch event carries its coordinates on the touch point, not on the event itself.
    const point = event.touches ? event.touches[0] : event;
    const { pageX, pageY } = point;
    // calculate distance between last animated and new points:
    if(Math.hypot(pageX-coordinates.pageX, pageY-coordinates.pageY)< 15){
      return;
    }
    coordinates = { pageX, pageY };
  
    const rnd = Math.round(Math.random() * (1 - 0));
    const newDiv = document.createElement('div');
    newDiv.className = `bg-animation-div-${classSuffix}`;
    newDiv.style.left = `${pageX}px`;
    newDiv.style.top = `${pageY}px`;
    newDiv.animate([
      { opacity: 0.7 }, 
      { opacity: 0 },
    ], 1000);
    newDiv.appendChild(document.createTextNode(rnd));
    newDiv.tagName='dyndiv';
    document.body.appendChild(newDiv);
    setTimeout(() => {
      document.body.removeChild(newDiv)
    }, 1000);
  }
  
  // The script is loaded again on every theme change, so drop the previous run's listeners
  // first or every move would leave several digits.
  if (bg.bgAnimationHandler) {
    bg.removeEventListener('mousemove', bg.bgAnimationHandler);
    bg.removeEventListener('touchmove', bg.bgAnimationHandler);
  }
  bg.bgAnimationHandler = animationEvent;
  bg.addEventListener('mousemove', animationEvent, { passive: true });
  // Passive: the finger is scrolling the page, the digits must never get in the way of that.
  bg.addEventListener('touchmove', animationEvent, { passive: true });
})();
