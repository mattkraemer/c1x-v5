let circle1 = document.getElementById('circle1');

const onMouseMove = (e) =>{
  circle1.style.left = e.pageX + 'px';
  circle1.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);