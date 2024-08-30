var animation =lottie.loadAnimation({
  container: document.getElementById('icono'),
  renderer:'svg',
  loop: false,
  autoplay: false,
  path: 'data.json',

})

btn = document.getElementById('icono');
btn.addEventListener('click', function(){
  animation.play();
})
