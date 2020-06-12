(() => {
  const thisScript = document.querySelector('script[src*="bg-animation.js"]');
  const classSuffix = thisScript.getAttribute("data-class-suffix");
  const bg = document.querySelector('#background-image');
  
  let coordinates = { pageX: 0, pageY: 0 };
  const animationEvent = (event) => {
    const { pageX, pageY } = event;
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
  
  bg.onmousemove = animationEvent;
  bg.ontouchmove = animationEvent;
})();
